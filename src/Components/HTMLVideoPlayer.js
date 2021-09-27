import React, { Component } from "react";
import A from "./videos/A.mp4";

function HTMLVideoPlayer() {
  return (
    <div className="video_player">
      <h1>Video Player</h1>

      <video controls width="720px" height="420px">
        <source src={A} type="video/mp4" />
      </video>
    </div>
  );
}

export default HTMLVideoPlayer;
