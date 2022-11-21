// 1) import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2) get a reference to the div with ID root
const el = document.getElementById('root'); // el = element

// 3) tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) show the component on the screen
root.render(<App />);