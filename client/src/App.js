import React from "react";
import "./styles/scss/test.scss";
import Landing from "./pages/Landing.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="test">Hello React!</div>
        <Landing />
      </header>
    </div>
  );
}

export default App;
