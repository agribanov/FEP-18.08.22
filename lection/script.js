// 'use strict';
// // ООП;
// // Обьектно ориентированное програмирование

// function fn() {
//     console.log('hello', this.name);
// }

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.say = function (msg) {
//         console.log(msg, this.name);
//     };
// }

// // const personA = {
// //     name: 'Alex',
// //     age: 22,
// //     say: fn,
// // };
// // const personB = {
// //     name: 'Bob',
// //     age: 33,
// //     say: fn,
// // };

// // const personC = {
// //     name: 'John',
// //     age: 33,
// //     say: fn,
// // };

// const personA = new Person('Alex', 22);
// const personB = new Person('Bob', 33);
// const personC = new Person('John', 245);

const calc = new Calculator(10);
calc.result; // 10
calc.add(100); //110
calc.result; // 110
calc.div(11); //10
calc.mult(5); //50
calc.sub(20); //30
calc.result; // 30
