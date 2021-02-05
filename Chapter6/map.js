// Словари =====================================================
// let ages = {
//   Anna: 33,
//   Dmitry: 38,
//   Nikita: 8
// }

// console.log(`Anna is ${ages['Anna']} years old`);
// console.log('Daniel is ', 'Daniel' in ages);
// console.log('toString' in ages);

let ages = new Map();
  ages.set('Anna', 33)
  ages.set('Dmitry', 38)
  ages.set('Nikita', 8)

console.log(ages);

console.log(`Anna is ${ages.get('Anna')} years old`);
console.log('Daniel is ', ages.has('Daniel'));
console.log(ages.has('toString'));

console.log({x: 1}.hasOwnProperty('x'))
console.log({x: 1}.hasOwnProperty('toString'))