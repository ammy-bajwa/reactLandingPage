import React, { Component } from "react";
import CodeCard from "./CodeCard";
import Bitcoin from "./images/bitcoin.PNG";

export default class Triggers extends Component {
  render() {
    return (
      <div id="triggerMain">
        <div id="contentTrigger">
            <h1 className="row h-100 justify-content-center align-items-center m-5 text-light">
              Use walletes or exchange API intrgration to automate execution
            </h1><div className="m-5 row h-100 justify-content-center align-items-center">
              <CodeCard />
            </div>
        </div>
      </div>
    );
  }
}
