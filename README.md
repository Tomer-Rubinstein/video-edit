# video-edit

Given a series of video files, a single audio file and timestamps, combine the videos
in such a way that the output video will be precisely cut at the timestamps which match
the beats of the audio file (song).

Keep in mind that ``pip install pybind11`` won't fully download the cmake files for pybind11.
Instead, install with conda like so:
```
 $ conda install pybind11 -c conda-forge
```
