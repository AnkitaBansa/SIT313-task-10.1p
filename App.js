import React from 'react';
import './App.css';
import Footer from './Footer';
import logo from './logo.svg';
import Subscribe from './subscription'; // Import the subscription component
import server from './server';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Include the Subscribe component here */}
      <Subscribe />

      <Footer />
    </div>
  );
}

export default App;
