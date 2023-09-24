#pragma once
#include <string>
#include <list>
#include "video.h"

bool load_videos(std::string videos_dir, std::list<Video*> *videos_list);
