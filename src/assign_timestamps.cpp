#include "assign_timestamps.h"
#include <iostream>
#include <list>

std::vector<Video*> assign_timestamps(std::vector<float> distances, std::vector<Video*> vids_vector){
    std::vector<Video*> result_sequence;

    std::list<Video*> vids_list(vids_vector.begin(), vids_vector.end());

    for (int i=0; i < distances.size(); i++) {
        Video* candidateVid = NULL;

        for (auto vid : vids_list) {
            float currDuration = vid->getDuration();

            if (currDuration - distances[i] >= 0) {
                if (candidateVid == NULL)
                    candidateVid = vid;
                else if (currDuration < candidateVid->getDuration())
                    candidateVid = vid;
            }
        }

        if (candidateVid == NULL){
            std::cout << "[ERROR] Couldn't find a sequence of videos that satisfy the given timestamps" << std::endl;
            exit(1);
        }

        vids_list.remove(candidateVid);
        result_sequence.push_back(candidateVid);
    }

    return result_sequence;
}
