const btn = document.querySelector('button');

document.addEventListener(
    'click',
    () => {
        console.log('capture click on document');
    },
    true
);

document.body.addEventListener(
    'click',
    (event) => {
        event.stopPropagation();

        console.log('capture click on body', event.target);
    },
    true
);

btn.addEventListener(
    'click',
    () => {
        console.log('capture click on btn');
    },
    true
);

document.addEventListener('click', () => {
    console.log('bubble click on document');
});

document.body.addEventListener('click', () => {
    console.log('bubble click on body');
});

btn.addEventListener('click', (event) => {
    console.log('bubble click on btn');
});
