#include "video.h"

Video::Video(std::string filename, float duration){
    _filename = filename;
    _duration = duration;
}

std::string Video::getFilename() { return _filename; }
float Video::getDuration() { return _duration; }
