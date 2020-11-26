let rabbit={};
rabbit.speak = function(line) {
    console.log(`Mr.Rabbit says ${line}`)
}

function speak(line) {
    console.log(`${this.type} кролик говорит ${line}`);
}

let whiteRabbit = {type: 'Белый', speak};
let hungryRabbit = {type: 'Голодный', speak};