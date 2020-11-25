// Прототипы =================================================================
const person = {
  name: "Anna",
  age: 33,
  greet: function() {
    console.log('Greet!')
  }
};

Object.prototype.sayHello = function() {
  console.log('Hello!');
};

const lena = Object.create(person);

lena.sayHello()