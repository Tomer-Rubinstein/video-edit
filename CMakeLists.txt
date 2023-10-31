cmake_minimum_required(VERSION 3.14)
project(video-edit C CXX)
set(CMAKE_CXX_STANDARD 17)

add_subdirectory(lib/FFmpeg)
add_subdirectory(lib/pybind11)

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

add_executable(video-edit ${SOURCES})
target_link_libraries(video-edit FFmpeg)
