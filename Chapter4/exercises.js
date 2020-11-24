// Свертка ========================================================
let array = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  ['a', 'b', 'c', 'd'],
  ['e', 'f', 'g', 'h']
];

let newArray = array.reduce((arr, item) => arr.concat(item));
console.log(newArray);


