import produce from 'immer';

const obj = {
    name: 'Alex',
    age: 23,
    marks: [1, 2, 3, 4],
};

// const changesObj = {
//     ...obj,
//     marks: [...obj.marks, 56],
// };

// const changesObj = obj;
// changesObj.name = 'Bob';

const changesObj = produce(obj, (draft) => {
    // draft.name = 'Bob';
    draft.marks.push(56);
});

console.log('Is equal', obj === changesObj, changesObj.marks);
