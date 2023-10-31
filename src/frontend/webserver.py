from flask import (
    Flask, render_template,
    request, jsonify
)
from flask_cors import CORS, cross_origin
import json

from utils import download_yt_vid

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/start", methods=["POST"])
@cross_origin()
def start():
    timestamps = json.loads(request.json.get("timestamps"))
    yt_vid_id = request.json.get("yt_vid_id")
    yt_start_time = timestamps[0] # start of edit at first timestamp
    yt_end_time = timestamps[-1] # end of edit at last timestamp

    print("timestamps:", timestamps)
    print("yt_vid_id:", yt_vid_id)
    print("yt_start_time:", yt_start_time)
    print("yt_end_time:", yt_end_time)

    download_yt_vid(yt_vid_id, yt_start_time, yt_end_time)

    return jsonify({'success': True}), 200


if __name__ == "__main__":
    app.run(debug=True)
