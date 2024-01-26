const apiKey = "J6L6VRCdeOQ9CZaDEywmuuq4wIALEzH2";
// https://api.giphy.com/v1/gifs/random?api_key=J6L6VRCdeOQ9CZaDEywmuuq4wIALEzH2

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch("Error al realizar la peticion");
