#include <iostream>
#include <list>
#include "video.h"

std::list<Video*> assignTimestamps(std::list<float> distances, std::list<Video*> vids_list){
    std::list<float>::iterator distsIter;
    std::list<Video*>::iterator vidsIter;

    std::list<Video*> result_sequence;

    for (distsIter = distances.begin(); distsIter != distances.end(); distsIter++) {
        Video* candidateVid = NULL;

        for (vidsIter = vids_list.begin(); vidsIter != vids_list.end(); vidsIter++) {
            float currDuration = (*vidsIter)->getDuration();

            if (currDuration - *distsIter >= 0) {
                if (candidateVid == NULL)
                    candidateVid = *vidsIter;
                else if (currDuration < candidateVid->getDuration())
                    candidateVid = *vidsIter;
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


// TODO
bool outputEdit() { return false; }
