import axios from "axios";

const KEY = "AIzaSyCnr9JZvTjDGRrSPw6R5strOU9uXScummY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
