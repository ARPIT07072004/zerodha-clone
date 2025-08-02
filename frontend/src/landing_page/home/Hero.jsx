import React from "react";

function Hero() {
  return (
    <div className="container py-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-10">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="img-fluid mb-4"
          />
          <h1 className="mt-4 fs-2 fs-md-1">Invest in everything</h1>
          <p className="mb-4">
            Online platform to invest in stocks, derivatives, mutual funds, and more
          </p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary px-4 py-2 fs-5">
              Signup Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
