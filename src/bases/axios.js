import axios from "axios";

const apiKey = "J6L6VRCdeOQ9CZaDEywmuuq4wIALEzH2";
// `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

const giphyApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: apiKey,
  },
});

giphyApi
  .get("/random")
  .then((ans) => {
    const { data } = ans.data;
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.log);
