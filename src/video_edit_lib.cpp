#include <iostream>

#include "video_edit_lib.h"
#include "video.h"
#include "load_videos.h"
#include "edit.h"
#include "concat_demuxer.h"
#include "calc_durations.h"
#include "assign_timestamps.h"


/* TODO

Invoked with: ['hello', 'world'], [0.5, 1]

Did you forget to `#include <pybind11/stl.h>`? Or <pybind11/complex.h>,
<pybind11/functional.h>, <pybind11/chrono.h>, etc. Some automatic
conversions are optional and require extra headers to be included
when compiling your pybind11 module.

*/
void video_edit_run(std::string videos_dir_path, std::vector<float> timestamps) {
    std::cout << "videos_dir_path: " << videos_dir_path << std::endl;
    std::cout << "timestamps[0]: " << timestamps[0] << std::endl;

    // std::vector<Video*> videos_list = load_videos(videos_dir_path);
    // std::vector<float> durations_list = calc_durations(timestamps);
    // std::vector<Video*> matching_sequence = assign_timestamps(durations_list, videos_list);

    // std::vector<std::string> cuts_filenames = cut_videos(durations_list, matching_sequence);
    // ConcatDemuxer *concat_demuxer = new ConcatDemuxer(cuts_filenames);

    // concat_demuxer->merge_videos("output.mp4");
}
