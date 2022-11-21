// module.exports = {
//     add: require('./add'),
//     sub: require('./sub'),
// };

// export const calculator = {
//     add: () => console.log('add'),
// };

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export default function log() {
    console.log('I am default');
}
