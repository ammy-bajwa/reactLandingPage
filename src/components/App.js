import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Features from "./Features/Features";
import Triggers from "./Triggers/Triggers";
import Roadmap from "./Roadmap/Roadmap";
import GetStarted from "./GetStarted/GetStarted";
import Footer from "./Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Features />
        <Triggers />
        <Roadmap />
        <GetStarted />
        <Footer />
      </div>
    );
  }
}

export default App;
