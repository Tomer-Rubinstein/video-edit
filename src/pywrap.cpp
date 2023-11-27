#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include <iostream>
#include "video_edit_lib.h"

namespace py = pybind11;

PYBIND11_MODULE(VideoEdit, m) {
    m.def("run", &video_edit_run, R"pbdoc(
        Cut and combine input videos to the timestamps
        :param videos_dir_path: directory containing only input video files
        :param timestamps: array of timestamps on which to perform cuts

        :output: "output.mp4" file which combined the videos from videos_dir_path(param) on the timestamps(param),
            result video has no audio.
    )pbdoc");
}
