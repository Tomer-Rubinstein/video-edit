#include "calc_durations.h"

std::vector<float> calc_durations(std::vector<float> timestamps){
    std::vector<float> durations;

    for (int i=1; i < timestamps.size(); i++)
        durations.push_back(timestamps[i] - timestamps[i-1]);

    return durations;
}
