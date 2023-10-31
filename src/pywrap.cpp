#include <pybind11/pybind11.h>
#include "video_edit_lib.h"

namespace py = pybind11;
constexpr auto byref = py::return_value_policy::reference_internal;

PYBIND11_MODULE(VideoEdit, m) {
    py::class_<VideoEditLib>(m, "VideoEditLib")
    .def(py::init<std::string, std::string, std::vector<float>>())  
    .def("run", &VideoEditLib::run, py::call_guard<py::gil_scoped_release>());
}
