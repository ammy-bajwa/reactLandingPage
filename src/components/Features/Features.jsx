import React, { Component } from "react";
import api from "./images/api.svg";
import app from "./images/app.svg";
import exchange from "./images/exchange.svg";
import wallet from "./images/wallet.svg";
import blockchain from "./images/blockchain.svg";
import Card from "./Card";

let featuresCardData = [
  {
    title: "APIs",
    image: api,
    description:
      "User our automation API to invoke triggers or be notified when an event happend."
  },
  {
    title: "Apps",
    image: app,
    description:
      "Access to countless integrations with your daily apps via Zapier integration."
  },
  {
    title: "Exchange",
    image: exchange,
    description:
      "We connect to the most popular exchange in order to help you automating your trading."
  },
  {
    title: "Wallets",
    image: wallet,
    description:
      "Use our wallet as a service with zero-knowledge to seamlessly integration wallets and automation."
  },
  {
    title: "Blockchains",
    image: blockchain,
    description:
      "Automation create transactions invoke smart contract or receive security notifications."
  }
];
export default class Features extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid mt-5">
          <h1 className="text-center">Empower your blockchain workflows</h1>
          <p className="text-muted mt-3">
            ThinBlock provides a interoperability layer to connect APIs.
            <br />
            apps,wallets.exchanges and blockchains
          </p>
        </div>
        <div className="container-fluid ">
          <div className="row h-100 justify-content-center align-items-center center-block">
            {featuresCardData.map((item, i) => {
              return (
                <div className="m-3" key={i}>
                  <Card
                    title={item.title}
                    description={item.description}
                    image={item.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
