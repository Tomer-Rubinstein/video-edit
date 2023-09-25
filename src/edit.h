#pragma once
#include <list>
#include "video.h"

extern "C" {
    #include <libavformat/avformat.h>
}

std::list<Video*> assignTimestamps(std::list<float> distances, std::list<Video*> vids_list);
std::list<std::string> cut_videos(std::list<float> distances, std::list<Video*> result_sequence);
void merge_videos(std::list<std::string> cuts_filenames);
