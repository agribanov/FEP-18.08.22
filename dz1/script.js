// 1. Спрашиваем первый операнд // 20
// 2. Спрашиваем второй операнд // 34
// 3. Вывести результат // 20 + 34 = 54

// const operandA = +prompt('OperandA?');

// const operandB = +prompt('OperandB?');
// const result = operandA + operandB;
// const expression = operandA + ' + ' + operandB + ' = ' + result;

// alert(expression);

// !, &&, ||

let answer = null;

do {
    answer = prompt('Enter Number');
} while (isInvalid(answer));

function isInvalid(str) {
    return str === null || str === '';
}

// alert('done');

// while (answer === null || answer.trim() === '') {
//     answer = prompt('Try again');
// }

// if (answer === null || answer.trim() === '') {
//     console.log('hello');
// }

// switch (answer) {
//     case '1':
//         console.log('one');
//         break;
//     case '2':
//         console.log('two');
//         break;
//     case '3':
//         console.log('three');
//         break;
//     default:
//         console.log('something else ');
// }

function sum(a, b) {
    return a + b;
}

// const sumResult = sum(20, 20);

// const answer = prompt('What is your name?');

// if (isInvalid(answer)) {
//     alert('value is invalid');
// } else {
//     alert(answer);
// }

/*
null - true
'' - true
'asdfasdf' - false
*/

// 1. Спрашиваем первый операнд // 20
// 1.1 Спрашиваем пока он не введет число
// 2. Спрашиваем второй операнд // 34
// 2.1 Спрашиваем пока он не введет число
// 3 Спрашиваем действие +, -, /, *
// 3.1 спрашиваем пока не введет правильно
// 4 Считаем результат
// 5. Вывести результат // 20 + 34 = 54
