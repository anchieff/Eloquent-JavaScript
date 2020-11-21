// СУММА ДИАПАЗОНА =================================================================================

// function range(start, end) {
//   let array = [];
//   for (i = start; i <= end; i++) {
//     array.push(i);
//   }
//   return array;
// }

function range(start, end, step = 1) {               // function range(start, end, step = start > end ? 1 : -1) {  
  let array = [];
  if (start > end) {                                 // if (step < 0) { 
    for (i = start; i >= end; i -= Math.abs(step)) { // for (i = start; i >= end; i += step)  функция короче и элегантнее
      array.push(i);
    }
  } else {
    for (i = start; i <= end; i += step) {
      array.push(i);
    }
  } 
  return array;
}

console.log(range(5, 2, -2));

// console.log(range(1, 10));

function sum(array) {
  let sumArr = 0;
  for (i = 0; i < array.length; i++) {  // for (let value of array)
    sumArr += array[i];                 // sumArr += value;
  }
  return sumArr;
}

// console.log(sum([1, 0, 8, 5]));

console.log(sum(range(1, 10)));


// МАССИВ В ОБРАТНОМ ПОРЯДКЕ =================================================================================
function reverseArray(arr) {
  let newArr = [];
  for (element of arr) {
    newArr.unshift(element);
  }
  return newArr;
}

console.log(reverseArray([1, 2, 3, 4]));


// Вторую задачу так и не решила, решение из песочницы
function reverseArrayInPlace(arr) { 
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let num = arr[i];
    arr[i] = arr[arr.length - i -1];
    arr[arr.length - i -1] = num;  
  }
  return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));

// СПИСОК ===================================================================================
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

// Мое решение
/* function arrayToList(arr) {
  let  list = null;
  for (i = arr.length - 1; i >= 0; i--) {
    let rest = list || null;
    list = {};
    list.value = arr[i];
    list.rest = rest;
  }
  return list;
}


console.log(arrayToList([10, 20, 30, 40])); */

//Решение из песочницы 
function arrayToList(arr) { // принимает как аргумент массив и на его основе строит связанный список
  let list = null;
  for (i = arr.length - 1; i >= 0; i--) { // движемся с конца
    list = {value: arr[i], rest: list};
  }
  return list;
}

console.log(arrayToList([10, 20, 30]));


// Мое решение
function listToArray (list) { // принимает как аргумент связанный список и на его основе строит массив
  let arr = [];
  for (let node = list; node; node = node.rest) { // на каждой иттерации node указывает на текущий подсписок
    arr.push(node.value);
  }
return arr;
}

console.log(listToArray({ value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }));


// Мое решение
let anotherList = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

function prepend (element, list) {
  list = {value: element, rest: list};
  return list;
}

console.log(prepend('hello', anotherList));


// Мое решенеие
let otherList = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

function nth(num, list) {
 if (!list) return undefined;
 else if (num == 0) return list.value;
 else return  nth(num - 1, list.rest);
}

console.log(nth(1, otherList));


