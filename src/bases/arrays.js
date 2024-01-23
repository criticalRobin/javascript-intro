const array = [];
array.push(1);
array.push(2);
array.push(3);

const array2 = [...array, 4, 5, 6];
const array3 = array2.map(function (num) {
  return num * 2;
});

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
console.log(array);
console.log(array2);
console.log(array3);
