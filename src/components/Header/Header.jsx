import React, { Component } from "react";
import Navebar from "./Navebar";

export default class Header extends Component {
  render() {
    return (
      <div id="HeaderMain">
        <Navebar />
        {/* <h1 className='text-center'>Automation for blockchains</h1> */}
      </div>
    );
  }
}
