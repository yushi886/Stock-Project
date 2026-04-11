import React from 'react';

function Award() {
  return (
    <div>
      <div className="container p-5 mb-5">
        <div className="row">

          {/* Left Image */}
          <div className="col-6 p-5 mt-3">
            <img
              src="media/largestBroker.svg"
              alt="Broker Image"
              className="mb-5 img-fluid"
            />
          </div>

          {/* Right Content */}
          <div className="col-6 p-5 mt-3">
            <h1>Largest stock broker in India</h1>
            <p className="mb-5">
              2+ million Zerodha clients contribute to over 15% of all the
              retail order volumes in India daily by trading and investing in:
            </p>

            <div className="row">
              <div className="col-6">
                <ul>
                  <li>Futures and Options</li>
                  <li>Commodity derivatives</li>
                  <li>Currency derivatives</li>
                </ul>
              </div>

              <div className="col-6">
                <ul>
                  <li>Stocks & IPOs</li>
                  <li>Direct mutual funds</li>
                  <li>Bonds and Government</li>
                </ul>
              </div>
            </div>

            <img
              src="media/pressLogos.png"
              alt="Press Logos"
              style={{ width: "90%" }}
              className="mt-4"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Award;
