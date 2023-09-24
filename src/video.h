#pragma once
#include <string>

class Video {
private:
    std::string _filename;
    float _duration;
public:
    Video(std::string filename, float duration);
    std::string getFilename();
    float getDuration();
};
