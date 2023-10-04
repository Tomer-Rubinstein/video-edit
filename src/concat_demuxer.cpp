#include "concat_demuxer.h"
#include <iostream>

ConcatDemuxer::ConcatDemuxer(std::vector<std::string> filenames) {
    last_pts = 0;
    last_dts = 0;

    _filenames = filenames;
}

void ConcatDemuxer::merge_video(std::string filename, AVFormatContext** output_format_ctx) {
    AVFormatContext* input_format_ctx = avformat_alloc_context();
    avformat_open_input(&input_format_ctx, filename.c_str(), nullptr, nullptr);

    AVPacket packet;
    while (av_read_frame(input_format_ctx, &packet) >= 0) {
        if (packet.dts < last_dts)
            packet.dts = last_dts + packet.duration;
        
        if (packet.pts < last_pts) 
            packet.pts = last_pts + packet.duration;
        
        av_write_frame(*output_format_ctx, &packet);

        last_dts = packet.dts;
        last_pts = packet.pts;
    }
}

void ConcatDemuxer::merge_videos(const char* output_filename) {
    if (_filenames.size() == 0) {
        std::cout << "[ERROR] no given videos to concatenate!" << std::endl;
        exit(1);
    }

    AVFormatContext *output_format_ctx = avformat_alloc_context();

    /* set the muxer */
    output_format_ctx->oformat = av_guess_format(NULL, output_filename, NULL);

    /* create output file */
    avio_open2(&output_format_ctx->pb, output_filename, AVIO_FLAG_WRITE, NULL, NULL);

    /* get sample input format context, just to copy params for the output video */
    AVFormatContext *input_format_ctx = avformat_alloc_context();
    avformat_open_input(&input_format_ctx, _filenames.at(0).c_str(), NULL, NULL);

    /* create at least one stream for the output file */
    AVStream *input_stream = input_format_ctx->streams[0];
    AVStream *output_stream = avformat_new_stream(output_format_ctx, input_stream->codec->codec);
    avcodec_copy_context(output_stream->codec, input_stream->codec);
    output_stream->codec->codec_tag = 0;
    output_stream->codec->codec_type = input_stream->codec->codec_type;
    output_stream->codec->codec_id = input_stream->codec->codec_id;
    output_stream->time_base = input_stream->time_base; // same timebases

    /* initialize the muxer internals and write the file's header */
    avformat_write_header(output_format_ctx, 0);

    output_format_ctx->oformat->flags |= AVFMT_NOTIMESTAMPS;


    for (int i=0; i < _filenames.size(); i++) {
        std::string curr_video = _filenames[i];
        std::cout << "concatenating " << curr_video << std::endl;

        merge_video(curr_video, &output_format_ctx);
    }

    /* finalize concatenating the videos */
    av_write_trailer(output_format_ctx);

    avformat_free_context(output_format_ctx);
    avformat_free_context(input_format_ctx);
}
