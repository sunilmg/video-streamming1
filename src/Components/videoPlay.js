import React, { Component } from "react";
import VideoPlayer from "react-video-js-player";
import A from "./videos/A.mp4";
import S from "./s.jpg";
import "../App.css";

function VideoJS() {
  const videoSrc = A;
  const poster = S;
  return (
    <div className="video-player">
      <center>
        <h1>Video player</h1>
        <VideoPlayer
          src={videoSrc}
          poster={poster}
          width="720"
          height="420"
          playbackRates={[0.5, 1, 1.5, 2.0, 2.5, 3]}
        />
      </center>
    </div>
  );
}

export default VideoJS;
