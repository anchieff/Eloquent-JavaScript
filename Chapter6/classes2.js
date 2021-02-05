// let protoRabbit = {
//   speak(line) {
//     console.log(`${this.type} rabbit says: ${line}`)
//   }
// };

// function makeRabbit(type) {
//   let rabbit = Object.create(protoRabbit);
//   rabbit.type = type;
//   return rabbit;
// }

// function Rabbit(type) {
//   this.type = type;
// }

// Rabbit.prototype.speak = function(line) {
//   console.log(`The ${this.type} rabbit says: '${line}'`)
// }

// let weirdRabbit = new Rabbit('weird');
// weirdRabbit.speak('Ho-ho-ho');

// console.log(Object.getPrototypeOf(weirdRabbit));


class Rabbit {
  constructor(type) {
    this.type = type
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says: '${line}'`)
  }
}

let blackRabbit = new Rabbit('black');
let killerRabbit = new Rabbit('killer');

blackRabbit.speak("I am very happy");
killerRabbit.speak('Kill you');

Rabbit.prototype.teeth = 'small'; 

killerRabbit.teeth = 'big and sharp'
console.log(Rabbit.prototype.teeth)

console.log(String(blackRabbit))

Rabbit.prototype.toString = function() {
  return `${this.type} rabbit`
}

console.log(String(blackRabbit))



