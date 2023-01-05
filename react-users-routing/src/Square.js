import React from 'react';

function Square({ position }) {
    return <div style={squareStyles(position)}>Square</div>;
}

function squareStyles({ x, y }) {
    return {
        backgroundColor: 'blue',
        width: '50px',
        height: '50px',
        position: 'absolute',
        top: y,
        left: x,
    };
}

export default Square;
