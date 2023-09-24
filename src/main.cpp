#include <iostream>

bool load_frame(const char* filename, int* width, int* height, unsigned char** data);

int main(){
    int frame_width, frame_height;
    unsigned char* frame_data;
    
    if (!load_frame("../sample-input/videos/v1", &frame_width, &frame_height, &frame_data)) {
        std::cout << "[ERROR] Couldn't load video frame" << std::endl;
        return 1;
    }

    return 0;
}
