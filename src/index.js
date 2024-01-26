console.log("Hola mundo");

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
