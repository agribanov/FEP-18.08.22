// ООП

// 1) Наследование
// 2) Инкапсуляция
// 3) Полиморфизм

// 4) Абстракция

function Person(name) {
    this.name = name;
}

// Person.prototype.getName = function () {
//     console.log(Person.formatName(this.name));
// };
// Person.prototype.setName = function (newName) {
//     if (newName !== '') {
//         this.name = newName;
//     }
// };

Person.prototype.sayHi = function (newName) {
    console.log('hi ' + this.name);
};

// Person.PREFIX = 'Mr. ';
// Person.formatName = function (name) {
//     return Person.prefix + name;
// };

function Student(name) {
    this.name = name;
}

Student.prototype = new Person();
Student.prototype.study = function () {
    console.log('studying ' + this.name);
};
Student.prototype.sayHi = function () {
    Person.prototype.sayHi.call(this);
    // Person.prototype.sayHi();
    console.log('I am student', this.name);
};

const alex = new Student('Alex');
// const bob = new Student('Bob');
const human = new Person('Human');

// const obj = {
//     name: 'alex',
// };

// function fn(msg, msg1, msg2) {
//     console.log('FN', msg, msg1, msg2, this);

//     return 'Hello';
// }

// //call
// //apply
// //bind

// function sum(a) {
//     return (b) => a + b;
// }

// const add10 = sum(10);

// add10(5) // 15
// add10(50) // 60

const SMALL_SIZE = { price: 50, callories: 100 };
const BIG_SIZE = { price: 100, callories: 200 };

const TOPPING_MAYO = { price: 60, callories: 2000 };
const TOPPING_KETCHUP = { price: 40, callories: 200 };
const TOPPING_CHEEZE = { price: 100, callories: 50 };

function Hamburger() {}

const hum = new Hamburger(SMALL_SIZE);

hum.addTopping(TOPPING_MAYO);
hum.addTopping(TOPPING_KETCHUP);

hum.getPrice(); // 150
hum.getCallories(); // 2300

hum.addTopping(TOPPING_MAYO);

hum.getPrice(); // 210
hum.getCallories(); // 4300
