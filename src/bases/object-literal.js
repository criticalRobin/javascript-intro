const person = {
  name: "Tony",
  lastName: "Stark",
  age: 45,
  address: {
    city: "New York",
    zip: 123456,
    lat: 14.3232,
    lng: 34.9233321,
  },
};

// esto es un clon del objeto person, rompe la referencia del objeto original
const person2 = { ...person };
person2.name = "Peter";

console.log(person);
console.log(person2);
