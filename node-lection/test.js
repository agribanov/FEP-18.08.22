function dataReverse(data) {
    const bytesCount = data.length / 8;

    const bytes = new Array(bytesCount).fill(null).map(() => []);

    data.forEach((item, index) => {
        const byteNumber = Math.floor(index / 8);
        bytes[byteNumber].push(item);
    });

    console.log(bytes);

    return bytes.reverse().flat();
}

const data1 = [
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
];

console.log(dataReverse(data1));
