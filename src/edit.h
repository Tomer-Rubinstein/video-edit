#pragma once
#include <list>
#include "video.h"

std::list<Video*> assignTimestamps(std::list<float> distances, std::list<Video*> vids_list);
bool outputEdit();
