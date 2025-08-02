import React from "react";

function Hero() {
  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="row border-bottom text-center py-5">
        <div className="col-12">
          <h1 className="fw-bold">Pricing</h1>
          <h3 className="text-muted mt-3 fs-5">
            Free equity investments and flat ₹20 intraday and F&O trades
          </h3>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="row text-center py-5">
        <div className="col-md-4 col-sm-6 col-12 mb-4 px-4">
          <img src="media/images/pricingEquity.svg" alt="Equity Pricing" className="img-fluid mb-3" />
          <h2 className="fs-4 fw-semibold">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 col-12 mb-4 px-4">
          <img src="media/images/intradayTrades.svg" alt="Intraday Trading" className="img-fluid mb-3" />
          <h2 className="fs-4 fw-semibold">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodities.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 col-12 mb-4 px-4">
          <img src="media/images/pricingEquity.svg" alt="Mutual Fund Pricing" className="img-fluid mb-3" />
          <h2 className="fs-4 fw-semibold">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
