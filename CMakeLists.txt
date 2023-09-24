cmake_minimum_required(VERSION 3.14)
project(video-edit C CXX)
set(CMAKE_CXX_STANDARD 14)

add_subdirectory(lib/FFmpeg)

add_definitions(-DGL_SILENCE_DEPRECATION)

list(APPEND SOURCES
    src/main.cpp
    src/load_frame.cpp
)

add_executable(video-edit ${SOURCES})
target_link_libraries(video-edit FFmpeg)
