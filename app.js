
// Javascript Code to print Hello World

// const heading = document.createElement('h1');
// heading.innerHTML = 'Hello World';
// const parent = document.getElementById('root');

// Appends heading into root element
// parent.appendChild(heading)


// React Code to print Hello World


const heading = React.createElement('h1', {}, 'Hello World')

const parent = ReactDOM.createRoot(document.getElementById('root'))

// HEading gets replaced by root's inner HTML
parent.render(heading)

