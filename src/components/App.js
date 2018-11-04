import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Features from "./Features/Features";
import Triggers from "./Triggers/Triggers";
import Roadmap from "./Roadmap/Roadmap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Features />
        <Triggers />
        <Roadmap />
      </div>
    );
  }
}

export default App;
