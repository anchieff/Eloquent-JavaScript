// Старый способ создания прототипов - ES5 =============================================================
// const Animal = function(options) {
//   this.name = options.name;
//   this.color = options.color;

  // первый способ создать метод у прототипа - не сможем в дальнейшем изменить
/*   this.voice = function() {
    console.log(`Base voice from ${this.name}`);
  } */
// };

// Второй способ создать метод у прототипа - в дальнейшем сможем переписать эту функцию
// Animal.prototype.voice = function() {
//   console.log(`Base voice from ${this.name}`);
// }

/* console.log(Animal.prototype); */

// const dog = new Animal({name: 'Rex', color: '#fff'});

/* console.log(dog);

dog.voice() */

// const Cat = function(options) {
//   Animal.apply(this, arguments)
//   this.hasTail = options.hasTail;
//   this.type = 'cat';
// };

// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;

// Animal.prototype.voice = function() {
//   console.log(`This sound goes from ${this.name}`);
// }

// Cat.prototype.voice = function() {
//   Animal.prototype.voice.apply(this, arguments);
//   console.log(`${this.name} says meow`);
// }

// const cat = new Cat({name: 'Peny', color: 'red', hasTail: true});
// console.log(cat);


// ES6 Классы =============================================================================
class Animal {
  constructor(options) {
    this.name = options.name;
    this.color = options.color;
  }

  voice() {
    console.log(`Base voice from ${this.name}`);
  }
}

const dog = new Animal({name: 'Rex', color: 'white'});

class Cat extends Animal {
  constructor(options) {
    super(options);

    this.hasTail = options.hasTail;
    this.type = 'cat';
  }

  voice() {
    super.voice();
    console.log(`${this.name} says meow`);
  }
}

const cat = new Cat({name: 'Peny', color: 'red', hasTail: true});


// Examples =======================================================================
Object.prototype.print = function() {
  console.log(`I am a ${this}`);
}

cat.print();