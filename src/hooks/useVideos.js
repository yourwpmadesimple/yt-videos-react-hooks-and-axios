import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    // <== 'term' receive's the term from input
    const response = await youtube.get("/search", {
      // <== Search for the term typed
      params: {
        q: term,
      },
    });
    setVideos(response.data.items); // Update videos piece of state.
  };
  return [videos, search];
};

export default useVideos;
