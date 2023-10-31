from pytube import YouTube
from pydub import AudioSegment


OUTPUT_AUDIO_FILENAME = "song.mp3"


def download_yt_vid(video_id, start_time, end_time):
    # Download YouTube video as "song.mp3"
    video = YouTube(f"https://youtube.com/watch?v={video_id}")
    stream = video.streams.filter(only_audio=True).first()
    stream.download(filename=OUTPUT_AUDIO_FILENAME)

    # Cut audio from start_time to end_time
    start_time = int(start_time*1000)
    end_time = int(end_time*1000)

    audio = AudioSegment.from_file(OUTPUT_AUDIO_FILENAME)
    cut_audio = audio[start_time:end_time]
    cut_audio.export(OUTPUT_AUDIO_FILENAME, format="mp3") # override the same file
