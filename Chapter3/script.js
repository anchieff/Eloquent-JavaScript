let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2 - 1]);

//СВОЙСТВА МАССИВОВ ====================================================================
//Почти все значения JS имеют свойства. Кроме null и undefined.
null.length;

let doh ="Эгегей";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

let sequence =[1, 2, 3];
sequence.push(4); //push добавляет элемент в конец массива
sequence.push(5);
console.log(sequence);
console.log(sequence.pop()); //pop удаляет последний элемент массива
console.log(sequence);

let anObject = {
  left: 1,
  right: 2
};

console.log(anObject.left);
delete anObject.left; // удаляет свойство объекта
console.log(anObject.left);
console.log(anObject);
console.log("left" in anObject); //сообщает, есть ли у объекта свойство с таким именем
console.log("right" in anObject);


console.log(Object.keys({x: 0, y: 0, z: 2})); // Object.keys возвращает имена свойств объекта в виде массива

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4}); //Object.assign копирует все свойства из одного объекта в другой
console.log(objectA);

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

const score = {visitors: 0, home: 0};
score.visitors = 1; //так можно
// score = {visitors: 1, home: 0};  так нельзя

// Программа управляет очередью задач
let todoList = [];
function remember(task) {
  todoList.push(task); //добавить задачу в конец списка
}
function getTask() {
  return todoList.shift(); //вызывает (и удаляет) первый элемент из списка
}
function rememberUrgently(task) {
  todoList.unshift(task); //добавляет задачу в начало списка
}


//Поиск определенного значения у массива
console.log([1, 2, 3, 2, 1].indexOf(2)); //ищет значение с начала массива и возвращает его индекс

console.log([1, 2, 3, 2, 1].lastIndexOf(2)); //ищет значение с конца массива и возвращает его индекс


// Метод slice
console.log([0, 1, 2, 3, 4].slice(2, 4)); //возращает массив, содержащий элементы между начальным индексом и конечным, исключая конечный

console.log([0, 1, 2, 3, 4].slice(2)); 


// Метод concat склеивает массивы

function remove(array, index) {
  return array.slice(0, index) // функция принимает массив и удаляет из него элемент по указанному индексу
  .concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));


// Строки и их методы ===========================================================================================
console.log("кокосы".slice(3, 6));

console.log("кокосы".indexOf("о")); //  slice и indexOf работают так же, как с массивами

console.log("   ok  \n ".trim()); //удаляет пробельные символы в начале и в конце строки

console.log(String(89).padStart(3, "0")); // первый аргумент - желаемая длина строки, второй - символы заполнения

let sentence = "Buenos dias amigos";
let words = sentence.split(" "); // делит строку на части в местах, где встречаются заданные фрагменты
console.log(words);

console.log(words.join('. ')); //соединяет массив в строку

console.log('La'.repeat(3)); //повторяет строку несколько раз


// Дополнительнные параметры ========================================================================
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

console.log(max(4, 1, 9, -2));

let numbers = [5, 1, 7];
console.log(max(...numbers)); // массив "развертывается" в функции

let words = ['never' , 'understand'];
console.log(['I', ...words, 'it']); //Разворачивает один массив в другом


// Объект Math ===========================================================================================
// Math.cos — косинус
// Math.sin — синус
// Math.tan — тангенс
// Math.PI — число пи
// Math.random - случайное число от 0(включительно) до 1(исключительно)

console.log(Math.random());

console.log(Math.floor(Math.random() * 10)); //округляет число в меньшую сторону до ближайшего целого

// Math.ceil — округляет до целого числа в большую сторону
// Math.round — округляет до ближайшего целого числа
// Math.abs — абсолютное значение числа (отрицательное число в положительное)


//Деструктурирование ======================================================================================

/* function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) / 
          Math.sqrt((table[2] + table[3]) *
          (table[0] + table[1]) *
          (table[1] + table [3]) *
          (table[0] + table[2]));
}
 */
function phi([n00, n01, n10, n11]) { // создаем отдельные привязки для элементов массива
  return (n11 * n00 - n10 * n01) / 
          Math.sqrt((n10 + n11) *
          (n00 + n01) *
          (n01 + n11) *
          (n00 + n10));
}

let {name} = {name: 'Anna', age: 33}; // создаем привязку для элемента объекта
console.log(name);

