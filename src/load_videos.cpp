#include <iostream>
#include <string>
#include <filesystem>
#include <vector>
#include "video.h"

namespace fs = std::filesystem;

extern "C" {
    #include <libavcodec/avcodec.h>
    #include <libavformat/avformat.h>
}

std::vector<Video*> load_videos(std::string videos_dir_path) {
    std::vector<Video*> videos_list;

    for (const auto &entry : fs::directory_iterator(videos_dir_path)) {
        std::string curr_vid_filename = entry.path().string();

        AVFormatContext* av_format_ctx = avformat_alloc_context();
        if (!av_format_ctx) {
            std::cout << "[ERROR] Couldn't create avformat context" << std::endl;
            exit(1);
        }

        if (avformat_open_input(&av_format_ctx, curr_vid_filename.c_str(), NULL, NULL) != 0) {
            std::cout << "[ERROR] Couldn't open video file " << curr_vid_filename << std::endl;
            exit(1);
        }

        float curr_vid_duration = av_format_ctx->duration/(float)AV_TIME_BASE;

        Video* curr_vid = new Video(curr_vid_filename, curr_vid_duration);
        videos_list.push_back(curr_vid);
    }

    return videos_list;
}
