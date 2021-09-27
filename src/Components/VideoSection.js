import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../App.css";
import G from "./Images/G.jpg";
import google from "./Images/google.png";
import babylon from "./Images/babylon.png";
import videoStream from "./Images/videoStream.png";
import Elastic from "./Images/Elastic.png";
import bucket from "./Images/bucket.png";
import python from "./Images/python.png";
import frontEnd from "./Images/frontEnd.png";

function VideoSection() {
  return (
    <div ClassName="video-Section">
      <h2 className="Headding">PAYMENT BYTES</h2>

      <div className="Payment-Bytes">
        <div className="videos">
          <a href="/video">
            <img src={Elastic} alt="" width="250px" height="150" />
          </a>

          <h4>ELASTIC</h4>
        </div>

        <div className="videos">
          <a href="/video">
            <img src={google} alt="" width="250px" height="150" />
          </a>

          <h4>GOOGLE CLOUD</h4>
        </div>

        <div className="videos">
          <a href="/video">
            <img src={G} alt="" width="250px" height="150" />
          </a>

          <h4>FMM</h4>
        </div>

        <div className="videos">
          <a href="/video">
            <img src={videoStream} alt="" width="250px" height="150" />
          </a>
          <h4>VIDEO STREMING</h4>
        </div>
      </div>

      <h2 className="Headding">TECHNICAL INSIGHTS</h2>

      <div className="Payment-Bytes">
        <div className="videos">
          <a href="/video">
            <img src={python} alt="" width="250px" height="150" />
          </a>
          <h4>PYTHON</h4>
        </div>

        <div className="videos">
          <a href="/video">
            <img src={frontEnd} alt="" width="250px" height="150" />
          </a>
          <h4>FRONT END</h4>
        </div>

        <div className="videos">
          <a href="/video">
            <img src={bucket} alt="" width="250px" height="150" />
          </a>
          <h4>S3 BUCKET</h4>
        </div>

        <div className="videos">
          <a href="/video">
            <img src={babylon} alt="" width="250px" height="150" />
          </a>
          <h4>BABYLON</h4>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
