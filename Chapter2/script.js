// МИНИМУМ
let min = function(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};

console.log(min(4, 1));

// РЕКУРСИЯ
let isEven = function(number) {
  if (number == 0) {
    return true;
  } else if (number == 1) {
    return false;
  } else  if (number < 0) {
    return isEven(-number);
  } else {
    return isEven(number - 2);
  }
};

console.log(isEven(-1));

// ПОДСЧЕТ БУКВ 
let countBs = function(string) {
  let B = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == 'B') {
      ++B;
    }
  }
  console.log(B);
};

countBs('Bat');


let countChar =function(string, letter) {
  let B = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      ++B;
    }
  }
  console.log(B);
};

countChar('Anna', 'a');