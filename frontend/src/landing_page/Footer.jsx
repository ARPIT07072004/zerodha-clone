import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5 py-5">
        <div className="row text-center text-md-start">
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <img src="media/images/logo.svg" style={{ width: "50%" }} alt="Logo" />
            <p className="mt-2">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <p className="fw-bold">Company</p>
            <a href="#" className="d-block text-decoration-none text-muted">About</a>
            <a href="#" className="d-block text-decoration-none text-muted">Products</a>
            <a href="#" className="d-block text-decoration-none text-muted">Pricing</a>
            <a href="#" className="d-block text-decoration-none text-muted">Referral programme</a>
            <a href="#" className="d-block text-decoration-none text-muted">Careers</a>
            <a href="#" className="d-block text-decoration-none text-muted">Zerodha.tech</a>
            <a href="#" className="d-block text-decoration-none text-muted">Press & media</a>
            <a href="#" className="d-block text-decoration-none text-muted">Zerodha cares (CSR)</a>
          </div>

          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <p className="fw-bold">Support</p>
            <a href="#" className="d-block text-decoration-none text-muted">Contact</a>
            <a href="#" className="d-block text-decoration-none text-muted">Support portal</a>
            <a href="#" className="d-block text-decoration-none text-muted">Z-Connect blog</a>
            <a href="#" className="d-block text-decoration-none text-muted">List of charges</a>
            <a href="#" className="d-block text-decoration-none text-muted">Downloads & resources</a>
          </div>

          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <p className="fw-bold">Account</p>
            <a href="#" className="d-block text-decoration-none text-muted">Open an account</a>
            <a href="#" className="d-block text-decoration-none text-muted">Fund transfer</a>
            <a href="#" className="d-block text-decoration-none text-muted">60 day challenge</a>
          </div>
        </div>

        <div className="mt-4 text-muted small" style={{ lineHeight: "1.7" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633...
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES...
          </p>
          <p>
            Investments in securities market are subject to market risks...
          </p>
          <p>
            "Prevent unauthorised transactions in your account...
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
