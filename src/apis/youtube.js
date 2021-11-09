import axios from "axios";

const KEY = "AIzaSyB_N31DsUivNr6FOTTdL-_cB4RziFt0GoE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 1000,
    key: KEY,
  },
});
