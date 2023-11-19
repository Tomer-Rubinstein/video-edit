cmake_minimum_required(VERSION 3.14)
project(VideoEdit C CXX)
set(CMAKE_CXX_STANDARD 17)

find_package(pybind11 REQUIRED)

add_subdirectory(lib/FFmpeg)

add_definitions(-DGL_SILENCE_DEPRECATION)

list(APPEND SOURCES
    src/main.cpp
    src/video.cpp
    src/load_videos.cpp
    src/edit.cpp
    src/concat_demuxer.cpp
    src/calc_durations.cpp
    src/assign_timestamps.cpp
    src/video_edit_lib.cpp
)

# for easier testing, generate executable instead:
# add_executable(VideoEdit ${SOURCES})

add_library(VideoEditLib STATIC ${SOURCES})
set_target_properties(VideoEditLib PROPERTIES POSITION_INDEPENDENT_CODE ON)

pybind11_add_module(VideoEdit src/pywrap.cpp)
target_link_libraries(VideoEdit PRIVATE VideoEditLib)
target_link_libraries(VideoEdit PRIVATE FFmpeg)
