import heroes, { owners } from "../data/heroes.js";

export const getHeroById = (id) => heroes.find((hero) => hero.id === id);

export const getHeoresByOwner = (owner) =>
  heroes.filter((hero) => hero.owner === owner);

// solución tarea 2

// import { getHeroById } from "./bases/import-export";
// import { getHeoresByOwner } from "./bases/import-export";

// console.log(getHeroById(2));
// console.log(getHeoresByOwner("DC"));
