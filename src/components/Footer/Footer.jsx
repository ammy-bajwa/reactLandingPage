import React, { Component } from "react";

export default class ActiveTriggers extends Component {
  render() {
    return (
        <div id='footerMain'>
          <footer className="page-footer font-small blue pt-4">

<div className="container-fluid text-center text-md-left">

  <div className="row">

    <div className="col-md-6 mt-md-0 mt-3">

      <h2 id='headingFooter' className="text-light text-center">
              thin
              <b>
                bl
                <u>o</u>
                ck
              </b>
            </h2>
    </div>

    <hr className="clearfix w-100 d-md-none pb-3"/>

    <div className="col-md-2 mb-md-0 mb-3 mt-4">

        <h4 className="text-uppercase text-muted">Developer</h4>

        <ul className="list-unstyled">
          <li>
            <a href='#' className='text-muted'>Documentation</a>
          </li>
          <li>
            <a href='#' className='text-muted'>Github</a>
          </li>
          <li>
            <a href='#' className='text-muted'>API Status</a>
          </li>
        </ul>

      </div>
      
    <div className="col-md-2 mb-md-0 mb-3 mt-4">

   <h4 className="text-uppercase text-muted">Resources</h4>

<ul className="list-unstyled">
  <li>
    <a href='#' className='text-muted'>{`Ter & conditions`}</a>
  </li>
  <li>
    <a href='#' className='text-muted'>Privacy Policy</a>
  </li>
</ul>

</div>

    <div className="col-md-2 mb-md-0 mb-3 mt-4">

   <h4 className="text-uppercase text-muted">Support</h4>

<ul className="list-unstyled">
  <li>
    <a href='#' className='text-muted'>Help Center</a>
  </li>
  <li>
    <a href='#' className='text-muted'>Twitter</a>
  </li>
  <li>
    <a href='#' className='text-muted'>Email</a>
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