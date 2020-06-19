import React from "react";
import logo from "./logo192.png";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul>
            <li>
              <a href="#exercises">Exercises</a>
            </li>
            <li>
              <a href="#add-workout">Add Workout</a>
            </li>
            <li>
              <a href="#progress">Progress</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="progress">
        <h2>Progress</h2>
      </section>
      <section id="add-workout">
        <h2>Add Workout</h2>
      </section>
      <section id="exercises">
        <h2>Exercises</h2>
      </section>
    </div>
  );
}

export default App;
