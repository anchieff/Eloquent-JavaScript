// Урок 4. JavaScript. Асинхронность.Что такое Event Loop. JS SetTimeout 0 =====================
console.log('start 1');

setTimeout(function() {
  console.log('timeout 0')
}, 0) // будет отрабатываться после всех console.log

console.log('start 2');

function timeout2sec() {
  console.log('timeout2sec');
}

setTimeout(function() {
  console.log('Inside timeout, after 5 seconds')
}, 5000)

setTimeout(timeout2sec, 2000); // без круглых скобок — не вызываем функцию, а передаем ссылку на нее



console.log('end');