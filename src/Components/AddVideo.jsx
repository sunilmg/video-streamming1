import React, { Component } from "react";

class AddVideo extends React.Component {
  render() {
    return (
      <div className="addVideo">
        <h1>Add Video</h1>
        <br />
        <form action="addVideo">
          Select File <input type="file" name="video_file" />
          <br />
          <br />
          <button type="submit" className="btn btn-info btn-m m-2 ">
            Store
          </button>
        </form>
      </div>
    );
  }
}

export default AddVideo;
