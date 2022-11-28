// WebSocket
// ws://
// wss://

const URL = 'wss://fep-app.herokuapp.com/';

const counterEl = document.querySelector('#counter');
const incBtn = document.querySelector('#incBtn');
const decBtn = document.querySelector('#decBtn');
const setBtn = document.querySelector('#setBtn');
const countsInput = document.querySelector('#countsInput');
let counts = 0;

incBtn.addEventListener('click', () => {
    send('increment', +countsInput.value);
});

decBtn.addEventListener('click', () => {
    send('decrement', +countsInput.value);
});

setBtn.addEventListener('click', () => {
    send('set', +countsInput.value);
});

countsInput.addEventListener('input', () => {
    send('edit', +countsInput.value);
});

const socket = new WebSocket(URL);

socket.onopen = () => {
    console.log('socket connected!');
};

socket.onclose = () => {
    console.log('socket closed!');
};

socket.onerror = () => {
    console.log('socket error!');
};

socket.onmessage = ({ data }) => {
    data = JSON.parse(data);
    action(data);
};

function send(type, payload) {
    const package = {
        type: 'message',
        payload: {
            author: 'Alex',
            message: 'Hello world!',
        },
    };

    socket.send(JSON.stringify(package));
}

function action({ type, payload }) {
    switch (type) {
        case 'increment':
            counts += +payload;
            break;
        case 'decrement':
            counts -= +payload;
            break;
        case 'set':
            counts = +payload;
            break;
        case 'edit':
            countsInput.value = payload;
            break;
    }

    counterEl.textContent = counts;
}
