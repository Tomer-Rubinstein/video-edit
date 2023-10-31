cmake_minimum_required(VERSION 3.14)
project(pybind11)

find_package(pybind11 REQUIRED)

# BEWARE: the following path to `pywrap.cpp` is constant to my system
# since I'm using WSL, `realpath` cmd returns "/home/USERNAME" but "~/" is required.
pybind11_add_module(${PROJECT_NAME} ~/Projects/video-edit/src/pywrap.cpp) 

target_compile_definitions(${PROJECT_NAME} PRIVATE VERSION_INFO=${EXAMPLE_VERSION_INFO})
target_include_directories(${PROJECT_NAME} PRIVATE ${PYBIND11_INCLUDE_DIRS})
