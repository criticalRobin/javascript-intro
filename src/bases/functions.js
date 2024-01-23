const greet = (name) => `Hola ${name}!`;

console.log(greet("Goku"));

const getUser = () => {
  return {
    uid: "ABC123",
    username: "El_Papi1502",
  };
};

const heroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
  },
  {
    id: 3,
    name: "Robin",
  },
];

// find devuelve true si se encuentra el elemento y undefined si no se encuentra
const exists = heroes.find((hero) => hero.id === 8);
// some devuelve true si se encuentra el elemento y false si no se encuentra
const exists2 = heroes.some((hero) => hero.id === 2);

console.log(exists2);

if (exists) {
  console.log("Heroe existe");
} else {
  console.log("Heroe no existe");
}
