#include <iostream>

#include "video.h"
#include "load_videos.h"
#include "edit.h"
#include "concat_demuxer.h"
#include "calc_durations.h"
#include "assign_timestamps.h"

int main(){
    /* INPUT */
    std::string videos_dir = "../sample-input/videos";
    std::vector<float> timestamps = {
        0.0,
        8.539,
        12.0,
        15.406,
        17.0,
        17.25,
        20.789,
        23.0
    };
    /* END INPUT */

    std::vector<Video*> videos_list = load_videos(videos_dir);
    std::vector<float> durations_list = calc_durations(timestamps);
    std::vector<Video*> matching_sequence = assign_timestamps(durations_list, videos_list);

    std::vector<std::string> cuts_filenames = cut_videos(durations_list, matching_sequence);
    ConcatDemuxer *concat_demuxer = new ConcatDemuxer(cuts_filenames);

    concat_demuxer->merge_videos("output.mp4");

    return 0;
}
