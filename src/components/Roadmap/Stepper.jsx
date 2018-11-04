import React from "react";

class Stepper extends React.Component {
  render() {
    return (
      <div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon" />
            <div className="timeline-content">
              <p className="timeline-content-date">2017</p>
            </div>
            <div className="timeline-content right">
              <p>
                <b>November:</b>
                Early Stage Concept
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon" />
              <div className="timeline-content">
                <p className="timeline-content-date">2018</p>
              </div>
              <div className="timeline-content right">
                <p>
                  <b>April:</b>
                  Concept Validation <br />
                  <b>July:</b>
                  Development Kickooff <br />
                  <b>November:</b>
                  Prototype API <br />
                </p>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon" />
                <div className="timeline-content">
                  <p className="timeline-content-date">2019</p>
                </div>
                <div className="timeline-content right">
                  <p>
                    <b>March:</b>
                    First MVP with UI <br />
                    <b>June:</b>
                    Official Launch <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Stepper;
