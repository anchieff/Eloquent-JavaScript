// Контекст вызова this
function hello() {
  console.log('Hello', this)
}

const person = {
  name: 'Anna',
  age: 33,
  sayHello: hello,
  //sayHelloWindow: hello.bind(window), // bind привязывает другой контекст вызова
  logInfo: function(job, phone) {
    console.group(`${this.name} info`)
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  }
};

const kitos = {
  name: 'Nikita',
  age: 8
};

// person.logInfo.bind(kitos, 'student', '8 992-12-33')(); // bind сам по себе не вызывает функцию, поэтому нужны круглые скобки

// person.logInfo.call(kitos, 'student', '8 992-12-33'); // call вызывает функцию сразу

person.logInfo.apply(kitos, ['student', '8 992-12-33']); //apply принимает два аргумента - объект и массив параметров, которые нужно применить в функции. Сразу вызывает функцию


// Примеры ==========================================================
const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//   return arr.map(i => i * n);
// }

// console.log(multBy(array, 5));

Array.prototype.multBy = function(n) {
  return this.map(i => i * n);
}

console.log(array.multBy(3));