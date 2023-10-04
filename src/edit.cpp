#include <iostream>
#include <vector>
#include "video.h"

extern "C" {
    #include <libavcodec/avcodec.h>
    #include <libavformat/avformat.h>
}

void cut_video(std::string filename, float start_time, float end_time, std::string output_filename, AVFormatContext **output_format_context) {
    AVFormatContext *input_format_context = avformat_alloc_context();
    if (!input_format_context) {
        std::cout << "[ERROR] Couldn't allocate AVFormatContext" << std::endl;
        exit(1);
    }

    if (avformat_open_input(&input_format_context, filename.c_str(), NULL, NULL) != 0) {
        std::cout << "[ERROR] Couldn't open video file " << filename << std::endl;
        exit(1);
    }

    for (int i=0; i < input_format_context->nb_streams; i++) {
        AVStream *input_stream = input_format_context->streams[i];
        AVStream *output_stream = avformat_new_stream(*output_format_context, input_stream->codec->codec);
        if (!output_stream) {
            std::cout << "[ERROR] Couldn't create stream for output" << std::endl;
            exit(1);
        }
        if (avcodec_copy_context(output_stream->codec, input_stream->codec) < 0) {
            std::cout << "[ERROR] Couldn't copy context from input to output" << std::endl;
            exit(1);
        }
        output_stream->codec->codec_tag = 0;
    }

    (*output_format_context)->oformat = av_guess_format(NULL, output_filename.c_str(), NULL);
    if (!(*output_format_context)->oformat) {
        std::cout << "[ERROR] Couldn't fill 'oformat' of output" << std::endl;
        exit(1);
    }

    if (avio_open(&(*output_format_context)->pb, output_filename.c_str(), AVIO_FLAG_WRITE) < 0) {
        std::cout << "[ERROR] Couldn't open output file" << std::endl;
        exit(1);
    }

    if (avformat_write_header(*output_format_context, NULL) < 0) {
        std::cout << "[ERROR] Couldn't write header to output" << std::endl;
        exit(1);
    }

    int video_stream_index = -1;
    AVStream *video_stream;
    AVCodecParameters *av_codec_params;
    AVCodec *av_codec;
    for (int i=0; i < input_format_context->nb_streams; i++) {
        video_stream = input_format_context->streams[i];
        av_codec_params = video_stream->codecpar;
        av_codec = avcodec_find_decoder(av_codec_params->codec_id);

        if (!av_codec)
            continue;

        if (av_codec_params->codec_type == AVMEDIA_TYPE_VIDEO) {
            video_stream_index = i;
            break;
        }
    }

    if (video_stream_index == -1) {
        std::cout << "[ERROR] Couldn't find valid video stream in " << filename << std::endl;
        exit(1);
    }

    AVCodecContext *av_codec_context = avcodec_alloc_context3(av_codec);
    if (!av_codec_context) {
        std::cout << "[ERROR] Couldn't allocate avcodec context" << std::endl;
        exit(1);
    }

    if (avcodec_parameters_to_context(av_codec_context, av_codec_params) < 0) {
        std::cout << "[ERROR] Couldn't set codec paramters to context" << std::endl;
        exit(1);
    }

    if (avcodec_open2(av_codec_context, av_codec, NULL) < 0) {
        std::cout << "[ERROR] Couldn't open codec" << std::endl;
        exit(1);
    }

    AVRational default_timebase;
    default_timebase.num = 1;
    default_timebase.den = AV_TIME_BASE;

    int64_t start_time_int64 = av_rescale_q((int64_t)(start_time*AV_TIME_BASE), default_timebase, video_stream->time_base);
    int64_t end_time_int64 = av_rescale_q((int64_t)(end_time*AV_TIME_BASE), default_timebase, video_stream->time_base);

    std::cout << "cutting video: " << filename << std::endl;

    if (avformat_seek_file(input_format_context, video_stream_index, INT64_MIN, start_time_int64, INT64_MAX, 0) < 0) {
        std::cout << "[ERROR] Couldn't seek file " << filename << std::endl;
        exit(1);
    }

    AVFrame *frame = av_frame_alloc();
    AVPacket *packet = av_packet_alloc();

    while (av_read_frame(input_format_context, packet) >= 0) {
        if (packet->stream_index != video_stream_index)
            continue;

        if (avcodec_send_packet(av_codec_context, packet) < 0) {
            std::cout << "[ERROR] Failed to decode packet" << std::endl;
            exit(1);
        }

        int response = avcodec_receive_frame(av_codec_context, frame);
        if (response == AVERROR(EAGAIN) || response == AVERROR_EOF) {
            continue;
        } else if (response < 0) {
            std::cout << "[ERROR] Failed to read frame" << std::endl;
            exit(1);
        }
   
        if (frame->pts >= start_time_int64 && frame->pts <= end_time_int64) {
            if (av_write_frame(*output_format_context, packet) < 0) {
                std::cout << "issued at " << frame->pts << std::endl;
                std::cout << "[ERROR] Couldn't write frame to output format context" << std::endl;
                exit(1);
            }
        }

        if (frame->pts > end_time_int64) {
            // found all the frames I want in the cut, no need to search for more.
            break;
        }   
    }


    if (av_write_trailer(*output_format_context) < 0) {
        std::cout << "[ERROR] Couldn't write trailer to output" << std::endl;
        exit(1);
    }

    avformat_close_input(&input_format_context);
    avio_close((*output_format_context)->pb);
    avformat_free_context(*output_format_context);
}


std::vector<std::string> cut_videos(std::vector<float> distances, std::vector<Video*> result_sequence) {
    auto list_dists_front = distances.begin();

    std::vector<std::string> cuts_filenames;

    int cutted_vid_count = 1;
    for (Video* vid : result_sequence) {
        float start_time = 0;
        float end_time = *list_dists_front;

        std::string output_filename = "cutted_vid";
        output_filename += std::to_string(cutted_vid_count++);
        output_filename += ".mp4";
        cuts_filenames.push_back(output_filename);

        AVFormatContext *output_cut_format_ctx = avformat_alloc_context();
        if (!output_cut_format_ctx) {
            std::cout << "[ERROR] Couldn't allocate AVFormatContext" << std::endl;
            exit(1);
        }
        cut_video(vid->getFilename(), start_time, end_time, output_filename, &output_cut_format_ctx);

        std::advance(list_dists_front, 1);
    }

    return cuts_filenames;
}
