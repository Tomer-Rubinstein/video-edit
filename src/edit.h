#pragma once
#include <vector>
#include "video.h"

extern "C" {
    #include <libavformat/avformat.h>
}

std::vector<std::string> cut_videos(std::vector<float> distances, std::vector<Video*> result_sequence);
