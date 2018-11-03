import React, { Component } from "react";
import Navebar from "./Navebar";
import MyButton from "./Button";
import bitcoin from './images/bitcoin.svg'

let whiteButton = {
  color: "#0099FF",
  backgroundColor: "#FFFFFF"
};
let blueButton = {
  color: "white",
  backgroundColor: "#1373d7"
};
export default class Header extends Component {
  render() {
    return (
      <div id="HeaderMain">
        <Navebar />
        <div className="mt-5">
          <h1 className="text-center text-light pt-5">
            Automation for blockchains
          </h1>
          <div className="mt-3">
            <p className="text-center text-light">
              Thinblock connects blockchain platforms with third-party services
              <br />
              to help build smart applications
            </p>
            <div className="container-fluid">
              <div className="row h-100 justify-content-center align-items-center">
                <MyButton color={whiteButton} />
                <MyButton color={blueButton} />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row h-100 justify-content-center align-items-center">
              <img src={bitcoin} id='headMainImage' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
