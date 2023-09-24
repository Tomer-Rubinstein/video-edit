#include <iostream>

#include "video.h"
#include "load_videos.h"

int main(){
    std::list<Video*> videos_list;
    std::string videos_dir = "../sample-input/videos";

    if (!load_videos(videos_dir, &videos_list)) {
        std::cout << "[ERROR] Couldn't load videos in directory: " << videos_dir << std::endl;
        return 1;
    }

    std::list<Video*>::iterator iter;
    for (iter=videos_list.begin(); iter!=videos_list.end(); iter++){
        std::cout << "Filename: " << (*iter)->getFilename() << std::endl;
        std::cout << "Duration: " << (*iter)->getDuration() << std::endl;
        std::cout << "--------" << std::endl;
    }

    return 0;
}
