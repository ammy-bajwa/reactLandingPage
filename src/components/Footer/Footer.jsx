import React, { Component } from "react";

export default class ActiveTriggers extends Component {
  render() {
    return (
      <div id="footerMain">
        <footer className="page-footer font-small blue pt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h2 id="headingFooter" className="text-light text-center">
                  thin
                  <b>
                    bl
                    <u>o</u>
                    ck
                  </b>
                </h2>
              </div>

              <hr className="clearfix w-100 d-md-none pb-3" />

              <div className="col-md-2 mb-md-0 mb-3 mt-4">
                <h4 className="text-uppercase text-muted">Developer</h4>

                <ul className="list-unstyled">
                  <li>
                    <p className="text-muted">
                      Documentation
                    </p>
                  </li>
                  <li>
                    <p className="text-muted">
                      Github
                    </p>
                  </li>
                  <li>
                    <p className="text-muted">
                      API Status
                    </p>
                  </li>
                </ul>
              </div>

              <div className="col-md-2 mb-md-0 mb-3 mt-4">
                <h4 className="text-uppercase text-muted">Resources</h4>

                <ul className="list-unstyled">
                  <li>
                    <p className="text-muted">{`Ter & conditions`}</p>
                  </li>
                  <li>
                    <p className="text-muted">
                      Privacy Policy
                    </p>
                  </li>
                </ul>
              </div>

              <div className="col-md-2 mb-md-0 mb-3 mt-4">
                <h4 className="text-uppercase text-muted">Support</h4>

                <ul className="list-unstyled">
                  <li>
                    <p className="text-muted">
                      Help Center
                    </p>
                  </li>
                  <li>
                    <p className="text-muted">
                      Twitter
                    </p>
                  </li>
                  <li>
                    <p className="text-muted">
                      Email
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
