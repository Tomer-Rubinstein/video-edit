#include <string>
#include <vector>

class VideoEditLib {
private:
    std::string videos_dir_path;
    std::string song_path;
    std::vector<float> timestamps;
public:
    VideoEditLib(std::string videos_dir_path, std::string song_path, std::vector<float> timestamps);
    void run();
};
