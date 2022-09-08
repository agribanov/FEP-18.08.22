let arr = ['c', 'd', 'a', 'b', 3, 45, 1, 11, 2];

let students = [
    {
        id: 1,
        name: 'Alex',
        marks: [10, 10, 5], // 25 / 3 = 8.3333
    },
    {
        id: 2,
        name: 'Bob',
        marks: [10, 10, 5],
    },
    {
        id: 3,
        name: 'John',
        marks: [10, 10, 5],
    },
];

function calculateStudentAverageMark(student) {} //

function calculateGroupAverageMark(students) {}

const result = calculateStudentAverageMark(students[1]);
console.log(result);
//

// map
// reduce
// foreach
// concat

// const filteredArr = arr.filter((item) => {
//     return !isNaN(item);
// });

// const val = arr.find((item) => {
//     return !isNaN(item);
// });

// const index = arr.findIndex((item) => {
//     return !isNaN(item);
// });

// const i = arr.indexOf(3);

// const index = arr.indexOf('d');
// arr.splice(index, 1);

// arr = arr.filter((item) => item !== 'd');

// const studentIndex = students.findIndex((item) => item.id === 2);
// students.splice(studentIndex, 1);

// students = students.filter((item) => item.id !== 2);

// students.sort((a, b) => a - b);

arr.reverse();
// -1 b > a
// 0 b === a
// 1 b < a
