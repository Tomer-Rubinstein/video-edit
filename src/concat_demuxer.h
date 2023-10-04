/*
 * Responsible for concatenating video files into a single video file.
*/
#pragma once
#include <vector>
#include <string>

extern "C" {
    #include <libavcodec/avcodec.h>
    #include <libavformat/avformat.h>
}

class ConcatDemuxer {
private:
    int64_t last_dts = 0;
    int64_t last_pts = 0;
    std::vector<std::string> _filenames;

    void merge_video(std::string filename, AVFormatContext** output_format_ctx);
public:
    ConcatDemuxer(std::vector<std::string> filenames);
    void merge_videos(const char* output_filename);
};
