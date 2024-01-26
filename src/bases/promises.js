// console.log("Inicio");

// new Promise((resolve, reject) => {
//   console.log("Cuerpo de la promesa");
//   //   resolve("Promesa resuelta");
//   reject("Promesa resuelta con error");
// })
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err));

// console.log("Fin");

import { getHeroById } from "./bases/import-export";

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);

      if (hero != null) {
        resolve(hero);
      } else {
        reject("El heroe no existe");
      }
    }, 1000);
  })
    .then((hero) => console.log(`El heroe es: ${hero.name}`))
    .catch(console.log);
};

getHeroByIdAsync(5);
