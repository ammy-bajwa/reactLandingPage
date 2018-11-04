import React, { Component } from "react";
import Stepper from "./Stepper";


export default class Roadmap extends Component {
  render() {
    return (
      <div className="mt-5" id='roadMapMain'>
        <div className="mt-5">
          <h1 className="text-center">Roadmap</h1>
          <p className="text-muted">
            We have a lot of exciting <br />
            stuff. Stay tuned!
          </p>
          <Stepper />
        </div>
      </div>
    );
  }
}
