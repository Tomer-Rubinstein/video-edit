#include <iostream>
#include <string>
#include <filesystem>
#include <list>
#include "video.h"

namespace fs = std::filesystem;

extern "C" {
    #include <libavcodec/avcodec.h>
    #include <libavformat/avformat.h>
}

bool load_videos(std::string videos_dir_path, std::list<Video*> *videos_list) {
    for (const auto &entry : fs::directory_iterator(videos_dir_path)) {
        std::string curr_vid_filename = entry.path().string();

        AVFormatContext* av_format_ctx = avformat_alloc_context();
        if (!av_format_ctx) {
            std::cout << "[ERROR] Couldn't create avformat context" << std::endl;
            return false;
        }

        if (avformat_open_input(&av_format_ctx, curr_vid_filename.c_str(), NULL, NULL) != 0) {
            std::cout << "[ERROR] Couldn't open video file " << curr_vid_filename << std::endl;
            return false;
        }

        float curr_vid_duration = av_format_ctx->duration/(float)AV_TIME_BASE;

        Video* curr_vid = new Video(curr_vid_filename, curr_vid_duration);
        videos_list->push_back(curr_vid);
    }

    return true;
}
