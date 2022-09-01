// Спрашиваем число.
// Проверяем что введено число и оно больше 0;
// Если нажата отмена или пустая строка или значение невалидно, переспрашиваем
// Посчитать сумму все четных чисел до этого числа включительно // 2+4+6+8+10
// Посчитать сумму все нечетных чисел до этого числа включительно // 1+3+5+7+9
// Выводим результат
// Сумма четных: 30
// Сумма нечетных: 25

const num = getNumber();

const evenSum = getEvenSum(num);
const oddSum = getOddSum(num);

console.log('Even sum: ' + evenSum);
console.log('Odd sum: ' + oddSum);

function getNumber() {
    let operand;

    do {
        operand = prompt('What is your number?');
    } while (isOperandInvalid(operand));

    return Number(operand);
}

function isOperandInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val) || val <= 0;
}

function getEvenSum(val) {
    let i = 0;
    let result = 0;
    while (i <= val) {
        result += i;
        i += 2;
    }

    return result;
}

function getOddSum(val) {
    let i = 1;
    let result = 0;
    while (i <= val) {
        result += i;
        i += 2;
    }

    return result;
}
