// // // function Hamburger(size) {
// // //     this._size = size;
// // //     this._toppings = [];
// // //     this._price = size.price;
// // //     this._callories = size.callories;
// // // }

// // // Hamburger.SMALL_SIZE = { label: 'Small size', price: 50, callories: 100 };
// // // Hamburger.BIG_SIZE = { label: 'Big size', price: 100, callories: 200 };

// // // Hamburger.TOPPING_MAYO = { label: 'Mayo', price: 60, callories: 2000 };
// // // Hamburger.TOPPING_KETCHUP = { label: 'Ketchup', price: 40, callories: 200 };
// // // Hamburger.TOPPING_CHEESE = { label: 'Cheese', price: 100, callories: 50 };

// // // Hamburger.prototype.addTopping = function (topping) {
// // //     this._toppings.push(topping);

// // //     this._calculate();
// // //     return this;
// // // };

// // // Hamburger.prototype._calculate = function () {
// // //     this._price = this._toppings.reduce(
// // //         (acc, { price }) => acc + price,
// // //         this._size.price
// // //     );

// // //     this._callories = this._toppings.reduce(
// // //         (acc, { callories }) => acc + callories,
// // //         this._size.callories
// // //     );
// // // };

// // // Hamburger.prototype.getPrice = function () {
// // //     return this._price;
// // // };

// // // Hamburger.prototype.getCallories = function () {
// // //     return this._callories;
// // // };

// // // OOP
// // // Инкапсуляция
// // // Наследование
// // // полиморфизм

// // // get/set

// class Hamburger {
//     static SMALL_SIZE = { label: 'Small size', price: 50, callories: 100 };
//     static BIG_SIZE = { label: 'Big size', price: 100, callories: 200 };

//     static TOPPING_MAYO = { label: 'Mayo', price: 60, callories: 2000 };
//     static TOPPING_KETCHUP = { label: 'Ketchup', price: 40, callories: 200 };
//     static TOPPING_CHEESE = { label: 'Cheese', price: 100, callories: 50 };

//     #toppings = [];
//     #size = null;
//     #price = 0;
//     #callories = 0;

//     get price() {
//         return this.#price;
//     }

//     constructor(size) {
//         this.#size = size;
//         this.#price = size.price;
//         this.#callories = size.callories;
//     }

//     addTopping(topping) {
//         this.#toppings.push(topping);

//         this.#calculate();
//         return this;
//     }

//     #calculate() {
//         this.#price = this.#toppings.reduce(
//             (acc, { price }) => acc + price,
//             this.#size.price
//         );

//         this.#callories = this.#toppings.reduce(
//             (acc, { callories }) => acc + callories,
//             this.#size.callories
//         );
//     }

//     getCallories() {
//         return this.#callories;
//     }
// }

// class SuperBurger extends Hamburger {
//     isSuper = true;

//     constructor(size, topping) {
//         super(size);

//         this.addTopping(topping);
//     }

//     getCallories() {
//         return super.getCallories() * 1.2;
//     }
// }

// const hum = new SuperBurger(Hamburger.SMALL_SIZE, Hamburger.TOPPING_MAYO);

// // hum.addTopping(Hamburger.TOPPING_MAYO)
// //     .addTopping(Hamburger.TOPPING_CHEESE)
// //     .addTopping(Hamburger.TOPPING_KETCHUP);
// // // hum.addTopping(Hamburger.TOPPING_KETCHUP);

// // // hum.getPrice(); // 150
// // // hum.getCallories(); // 2300

// // // hum.addTopping(TOPPING_MAYO);

// // // hum.getPrice(); // 210
// // // hum.getCallories(); // 4300

// // class Person {
// //     #name = '';
// //     #surname = '';

// //     get fullname() {
// //         return this.#name + ' ' + this.#surname;
// //     }

// //     // set fullname(newName) {
// //     //     const [name, surname] = newName.split(' ');

// //     //     if (!surname) {
// //     //         return;
// //     //     }

// //     //     this.#name = name;
// //     //     this.#surname = surname;
// //     // }

// //     constructor(name, surname) {
// //         this.#name = name;
// //         this.#surname = surname;
// //     }
// // }

// // const alex = new Person('Alex', 'Smith');

const tabset = new Tabset(document.getElementById('container'));
const accordion = new Accordion(document.getElementById('accordion'));
