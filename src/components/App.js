import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetail";
import useVideos from "../hooks/useVideos";

// Function Component
//
const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("JavaScript");

  useEffect(() => {
    setSelectedVideo(videos[0]); // return the first video from the list searched for
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <div className="outerCon">
              <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
