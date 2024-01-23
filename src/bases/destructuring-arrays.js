const characters = ["Goku", "Vegeta", "Trunks", "Goten"];

// const goku = characters[0];
// const vegeta = characters[1];
// const trunks = characters[2];
// console.log(goku);
// console.log(vegeta);
// console.log(trunks);

const [goku, vegeta, trunks, goten = "No tiene valor"] = characters;
console.log(goku, vegeta, trunks, goten);

const returnArray = () => {
  return ["ABC", 123];
};

const [letters, numbers] = returnArray();
console.log(letters, numbers);
