#include <iostream>
#include <list>

#include "video.h"
#include "load_videos.h"
#include "edit.h"

std::list<float> calc_durations(float timestamps[], int size);

int main(){
    /* INPUT */
    std::string videos_dir = "../sample-input/videos";
    float timestamps[8] = { // TODO: change ds
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

    std::list<Video*> videos_list;
    if (!load_videos(videos_dir, &videos_list)) {
        std::cout << "[ERROR] Couldn't load videos in directory: " << videos_dir << std::endl;
        return 1;
    }
    std::list<float> distances_list = calc_durations(timestamps, 8);

    /* DEBUG */
    std::list<Video*> result_sequence = assignTimestamps(distances_list, videos_list);
    for (auto &elem : result_sequence) {
        std::cout << elem->getFilename() << std::endl;
    }

    // std::list<std::string> cuts_filenames = cut_videos(distances_list, result_sequence);
    std::list<std::string> cuts_filenames;
    merge_videos(cuts_filenames);

    return 0;
}


std::list<float> calc_durations(float timestamps[], int size){
    std::list<float> distances;

    for (int i=1; i < size; i++)
        distances.push_back(timestamps[i] - timestamps[i-1]);

    return distances;
}

