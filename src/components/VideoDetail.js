import React from "react";
import he from "he";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  let datePublished = new Date(video.snippet.publishedAt).toDateString();
  datePublished = datePublished.split(" ");
  const publishedAt =
    datePublished[1] + " " + datePublished[2] + ", " + datePublished[3];

  let youTubeVideo = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div id="hide">
      <div className="ui embed">
        <iframe
          src={youTubeVideo}
          title={video.snippet.title}
          allowFullScreen
        />
      </div>
      <div className="ui raised piled segment">
        <i className="code icon"></i>
        <span className="date">Published {publishedAt} </span>
        <h4 className="ui header">{he.decode(video.snippet.title)}</h4>
        <p className="description">{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoDetails;
