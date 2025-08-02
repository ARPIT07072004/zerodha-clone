import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row pt-5 border-top">
        <div className="col-12 text-center mb-4">
          <h1 className="fw-bold">People</h1>
        </div>
      </div>

      <div className="row align-items-center text-muted pb-5">
        {/* Profile Image */}
        <div className="col-md-6 col-12 text-center mb-4 mb-md-0">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="rounded-circle img-fluid"
            style={{ maxWidth: "250px" }}
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        {/* Profile Description */}
        <div className="col-md-6 col-12" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="#" className="text-decoration-none">Homepage</a> /{" "}
            <a href="#" className="text-decoration-none">TradingQnA</a> /{" "}
            <a href="#" className="text-decoration-none">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
