import React from "react";

function Brokerage() {
  return (
    <div className="container my-5">
      <div className="row text-center border-top py-5 row-cols-1 row-cols-md-2">
        {/* Left Column: Brokerage calculator details */}
        <div className="col px-4 mb-4 text-start">
          <a href="#" className="text-decoration-none">
            <h3 className="fs-5 fw-semibold">Brokerage calculator</h3>
          </a>
          <ul className="text-muted ps-3 small" style={{ lineHeight: "2" }}>
            <li>Call & Trade and RMS auto-squareoff: ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via email.</li>
            <li>
              Physical contract notes: ₹20 per note + courier charges (if
              required).
            </li>
            <li>
              NRI (non-PIS): 0.5% or ₹100 per equity order (whichever is lower).
            </li>
            <li>
              NRI (PIS): 0.5% or ₹200 per equity order (whichever is lower).
            </li>
            <li>
              Orders during debit balance: ₹40 per executed order instead of ₹20.
            </li>
          </ul>
        </div>

        {/* Right Column: List of charges */}
        <div className="col px-4 mb-4 text-start">
          <a href="#" className="text-decoration-none">
            <h3 className="fs-5 fw-semibold">List of charges</h3>
          </a>
          <ul className="text-muted ps-3 small" style={{ lineHeight: "2" }}>
            <li>Equity Delivery: ₹0</li>
            <li>
              Intraday (Equity, F&O, Currency, Commodity): ₹20 or 0.03% per order (whichever is lower)
            </li>
            <li>Equity Futures: ₹20 per executed order</li>
            <li>Equity Options: ₹20 per executed order</li>
            <li>Currency Futures & Options: ₹20 per executed order</li>
            <li>Commodity Trades: ₹20 per executed order</li>
            <li>Mutual Funds (Direct): ₹0</li>
            <li>Account opening charges: ₹200 (individual)</li>
            <li>Annual Maintenance Charges (AMC): ₹300/year (₹75/quarter)</li>
            <li>Demat debit transaction: ₹13.5 + GST per scrip per day</li>
            <li>Fund transfer via UPI: Free</li>
            <li>Fund transfer via netbanking: ₹9 per transaction</li>
            <li>Payment gateway for instant fund transfers: ₹9 + GST</li>
            <li>Pledge charges: ₹30 + GST per scrip</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
