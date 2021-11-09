import "../css/VideoItem.css";
import React from "react";
import he from "he";

// Functional Component
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="ui list video-item item"
    >
      <img
        className="ui top aligned small image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.high.url}
      />

      <div className="content">
        <div className="header">{he.decode(video.snippet.title)}</div>
      </div>
    </div>
  );
};

export default VideoItem;
