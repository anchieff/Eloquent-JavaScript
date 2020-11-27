// Замыкание функции ==============================================================
// function createCalcFunction(n) {
//   return function() {
//     console.log(n * 1000);
//   }
// }

// const calc = createCalcFunction(42);
// calc();

// function createIncrementor(n) {
//   return function(num) {
//     return n + num;
//   };
// }

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);

// console.log(addOne(4));
// console.log(addOne(15));
// console.log(addTen(4));
// console.log(addTen(15));


// function urlCreator(domain) {
//   return function(url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = urlCreator('com');

// console.log(comUrl('google'));
// console.log(comUrl('netflix'));

// Создание собственной функции bind =================================================
function bind(context, fn) {
  return function(...arg) {
    fn.apply(context, arg);
  };
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name: 'Dmitriy', age: 37, job:'lower'};
const person2 = {name: 'Anna', age: 33, job:'frontend'};

bind(person1, logPerson)();
bind(person2, logPerson)();