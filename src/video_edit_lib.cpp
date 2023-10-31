#include <iostream>

#include "video_edit_lib.h"
#include "video.h"
#include "load_videos.h"
#include "edit.h"
#include "concat_demuxer.h"
#include "calc_durations.h"
#include "assign_timestamps.h"

VideoEditLib::VideoEditLib(std::string videos_dir_path, std::string song_path, std::vector<float> timestamps) {
    this->videos_dir_path = videos_dir_path;
    this->song_path = song_path;
    this->timestamps = timestamps;
}

void VideoEditLib::run() {
    std::cout << "OMG" << std::endl;
    // std::vector<Video*> videos_list = load_videos(this->videos_dir_path);
    // std::vector<float> durations_list = calc_durations(this->timestamps);
    // std::vector<Video*> matching_sequence = assign_timestamps(durations_list, videos_list);

    // std::vector<std::string> cuts_filenames = cut_videos(durations_list, matching_sequence);
    // ConcatDemuxer *concat_demuxer = new ConcatDemuxer(cuts_filenames);

    // concat_demuxer->merge_videos("output.mp4");
}
