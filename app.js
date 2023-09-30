
// Javascript Code to print Hello World

// const heading = document.createElement('h1');
// heading.innerHTML = 'Hello World';
// const parent = document.getElementById('root');

// Appends heading into root element
// parent.appendChild(heading)


// React Code to print Hello World

// const heading = React.createElement('h1', {}, 'Hello World')

// const parent = ReactDOM.createRoot(document.getElementById('root'))

// HEading gets replaced by root's inner HTML
// parent.render(heading)


// Write React Code for 
/* <div id="parent">
        <div id="Child1">
            <h1>I m h1 tag in Child1</h1>
        </div>
        <div id="Child2">
            <h1>I m h1 tag in Child2</h1>
        </div>
</div> */

import React from 'react';
import  ReactDOM  from 'react-dom/client';

const Child1 = React.createElement('div', {id: 'Child1'}, 
                                    React.createElement('h1', {}, 'I m h1 tag in Child1'))


const Child2 = React.createElement('div', {id: 'Child2'}, 
                                    React.createElement('h1', {}, 'I m h1 tag in Child2'))

const parent = React.createElement('div', {id:'parent'}, [Child1, Child2])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
                                    