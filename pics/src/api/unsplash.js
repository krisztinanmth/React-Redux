import axios from "axios";

// create axios client
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID d4d8262c47566d0f2a04583e3c4d25b561c57d83153872bff79561f3f563a1d1"
  }
});
