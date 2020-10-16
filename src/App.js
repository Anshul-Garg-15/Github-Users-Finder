import React from 'react';
import logo from "./logo.jpg";
import './App.css';
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Users />
    </div>
  );
}

export default App;
