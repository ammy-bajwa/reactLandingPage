import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Features from "./Features/Features";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Features />
      </div>
    );
  }
}

export default App;
