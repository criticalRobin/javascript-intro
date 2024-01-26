const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tenemos un valor en la promesa");
    }, 1000);
  });
};

const setTimeAsync = async () => {
  console.log("Inicio");
  const ans = await myPromise();
  console.log(ans);
  console.log("Fin");
};

setTimeAsync().catch("Error en medir el tiempo");

import giphyApi from "./bases/axios";

const getImage = async () => {
  try {
    const { data } = (await giphyApi.get("/random")).data;
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.log("Error en la peticion");
    throw error;
  }
};

getImage();
