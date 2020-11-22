// Абстрагирование повторов ==================================================================================
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Абстрагируем этот цикл
function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

repeatLog(3);

// Вместо console.log можно использовать любую функцию
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}


// Создаем функциональное выражение непосредственно в вызове
let label = [];
repeat(5, i => {
    label.push(`Блок ${i + 1}`);
});
console.log(label);


// Функции высшего порядка ============================================================================
// Функция, меняющая свойства другой функции
function noisy(f) {
    return(...args) => {
        console.log('вызов для', args);
        let result = f(...args);
        console.log('вызов для ', args, " возвращает", result);
        return result;
    }
}

noisy(Math.min)(3, 2, 1);

// Функция, создающая новый тип последовательности выполнения
function unless(test, then) {
    if(!test) then();
}

repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(`${n} - четное число`);
    });
});

