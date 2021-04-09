// tworzymy zegar rectowy
import ReactDOM from 'react-dom';
import React from 'react';
const Clock = () => {
    return (
        <div id="clock__container">
            <div id="clock"> {new Date().toLocaleTimeString()}</div>
        </div>
    );
};

// ReactDOM.render(<Clock />, document.getElementById('root'));

function tick() {
    ReactDOM.render(<Clock />, document.getElementById('root'));
}

setInterval(tick, 1000);
