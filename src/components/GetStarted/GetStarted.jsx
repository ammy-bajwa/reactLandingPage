import React, { Component } from "react";
import MyButton from "../Helpers/Button";


let whiteButton = {
  color: "#0099FF",
  backgroundColor: "#FFFFFF"
};
let blueButton = {
  color: "white",
  backgroundColor: "#1373d7"
};
export default class GetStarted extends Component {
  render() {
    return (
      <div id='getStartedMain'>
      <div id='getStartedContent'>
      <div className='row'>
      <div className='col-md-5'>
          <h1 className='text-light d-inline'>Ready to get started</h1>
          <h2>Get in touch or read docs</h2>
        </div>
        <div className='col-md-5'>
        <div className="row h-100 justify-content-center align-items-center">
                <MyButton color={whiteButton} />
                <MyButton color={blueButton} />
              </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}