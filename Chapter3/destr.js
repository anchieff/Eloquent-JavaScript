// Деструктуризация массивов =================================================
function calcValues(a, b) {
  return [
    a + b,
    undefined,
    a * b,
    a / b
  ];
}

const [sum, sub = "Вычитания нет", mult, ...others] = calcValues(42, 10); 
// дополнительная запятая говорит о том, что мы не используем какое-либо значение
// можно указывать значение по умолчанию

// const sum = result[0];
// const sub = result[1];

// const [sum, sub] = result;

// console.log(sum, mult, others, sub);


// Деструктуризация объектов =================================================
const person = {
  name: 'Anna',
  age: 33,
  adress: {
    country: 'Russia',
    city: 'Samara'
  }
};

const {
  name: firstName, 
  age, 
  car = "No car",
  adress: {country, city}
} = person;
// Можно указывать значение по умолчанию
// Можно задавать название для переменной
// Для вложенных значений также можно создавать отдельные переменные

console.log(firstName, age, car, country, city);



