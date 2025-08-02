import React from "react";

function Hero() {
  return (
    <section className="container-fluid bg-primary text-white py-5">
      <div className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
          <h4 className="mb-2">Support Portal</h4>
          <a href="#" className="text-white text-decoration-underline">
            Track Tickets
          </a>
        </div>

        {/* Main Content */}
        <div className="row">
          {/* Left Section */}
          <div className="col-12 col-md-8 mb-4">
            <h2 className="fs-4 mb-3">
              Search for an answer or browse help topics to create a ticket
            </h2>
            <input
              className="form-control mb-3 " style={{width:"70%"}}
              placeholder="Eg. how do I activate F&O"
              type="text"
            />

            {/* Helpful Links */}
            <div className="d-flex flex-wrap gap-3">
              <a href="#" className="text-white text-decoration-underline">
                Track account opening
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Track segment activation
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Intraday margins
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Kite user manual
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-md-4">
            <h2 className="fs-4 mb-3">Featured</h2>
            <ol className="ps-3">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-white text-decoration-underline"
                >
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-decoration-underline"
                >
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
