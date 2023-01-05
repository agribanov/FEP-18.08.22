import React from 'react';

function Circle({ position }) {
    return <div style={circleStyles(position)}></div>;
}

function circleStyles({ x, y }) {
    return {
        backgroundColor: 'red',
        width: '50px',
        height: '50px',
        position: 'absolute',
        borderRadius: '50%',
        top: y - 25,
        left: x - 25,
    };
}

export default Circle;
