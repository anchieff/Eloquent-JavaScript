//ПОСТРОЕНИЕ ТРЕУГОЛЬНИКА В ЦИКЛЕ ==============================================
//Вариант 1
let row = '';

for (let i = 0; i < 7; i++) {
  row = row + '#';
  console.log(row);
}

//Вариант 2
let secondRow = '#';

while (secondRow.length <= 7) {
  console.log(secondRow);
  secondRow = secondRow + '#';
}

//Вариант 3 (песочница)
for (line = '#'; line.length < 8; line += '#')
console.log(line);


//FIZZBUZZ ==========================================================================
let number = 1;

for (let i = 0; i < 100; i++) {
  if (number % 3 == 0) {
    console.log('Fizz');
  } else  if (number % 5 == 0) {
    console.log('Buzz');
  } else (console.log(number));
  number++;
}

let secondNumber = 1;

for (let i = 0; i < 100; i++) {
  if (secondNumber % 3 == 0 && secondNumber % 5 == 0) {
    console.log('FizzBuzz');
  } else if (secondNumber % 3 == 0) {
    console.log('Fizz');
  } else  if (secondNumber % 5 == 0) {
    console.log('Buzz');
  } else (console.log(secondNumber));
  secondNumber++;
}

// ШАХМАТНАЯ ДОСКА ===================================================================
//Мой варинат
let size = 6;
let stroke = '';

for (let count = 0; count < size; count++) {
  for (i = 0; i <= size; i++) {
    if ((i + count) % 2 == 0) {
      stroke = stroke + ' ';
    } else {
      stroke = stroke + '#';
    }
  }
  console.log(stroke +'\n');
  stroke = '';
}

//Вариант из песочницы
let otherSize = 8;
let board = '';

for (let y = 0; y < otherSize; y++) {
  for (let x = 0; x < otherSize; x++) {
    if((x+y) % 2 == 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}

console.log(board);




