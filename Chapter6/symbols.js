// Символы ============================================================================
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


let sym = Symbol('name');
console.log(sym == Symbol('name'))

Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym])

const toStringSymbol = Symbol('toString');
Array.prototype[toStringSymbol] = function() {
  return `${this.length} metres of blue yarn`
}

console.log([1, 7, 85, 14].toString());
console.log([1, 7, 85, 14][toStringSymbol]())

let stringObject = {
  [toStringSymbol]() {return 'red yarn'}
}

console.log(stringObject[toStringSymbol]())