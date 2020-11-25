// Классы ================================================================
/* class Animal {
  static type = 'ANIMAL'; // Не будет доступна у animal


  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.hasTail = options.hasTail;
  }

  voice() {
    console.log('I am Animal!')
  }
}

// const animal = new Animal({
//   name: 'Animal',
//   age: 5,
//   hasTail: true
// });

class Cat extends Animal {
  static type = 'CAT';

  constructor(options) {
    super(options); // вызываем родительский конструктор
    this.color = options.color;
  }

  voice() {
    super.voice(); // можем сначала вызвать родительский метод
    console.log('I am a cat!'); //можем переписывать родительские методы
  }

  get ageInfo() { //Геттер, вызывается без ()
    return this.age * 7;
  } 

  set ageInfo(newAge) { // сеттер, позволяет задавать новые значения
    this.age = newAge;
  }
}

const cat = new Cat({
  name: 'Cat',
  age: 7,
  hasTail: true,
  color: 'black'
}); */

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  hide() {
    this.$el.style.display = 'none';
  }

  show() {
    this.$el.style.display = 'block';
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);

    this.$el.style.width = this.$el.style.height = options.size + 'px';
    this.$el.style.background = options.background;
  }
}

const box1 = new Box({
  selector: '#box1',
  size: 100,
  background: 'red'
})