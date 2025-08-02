import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  const platforms = [
    { logo: "media/images/smallcaseLogo.png", desc: "Thematic investment platform" },
    { logo: "media/images/sensibullLogo.svg", desc: "Options trading simplified" },
    { logo: "media/images/smallcaseLogo.png", desc: "Thematic investment platform" },
    { logo: "media/images/smallcaseLogo.png", desc: "Thematic investment platform" },
    { logo: "media/images/streakLogo.png", desc: "Algo & strategy based trading", width: "30%" },
    { logo: "media/images/dittoLogo.png", desc: "Insurance simplified", width: "30%" },
  ];

  return (
    <div className="container my-5 text-center">
      <div className="mb-5">
        <h1 className="fw-bold">The Zerodha Universe</h1>
        <p className="text-muted fs-5">
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>

      <div className="row">
        {platforms.map((platform, index) => (
          <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>
            <img
              src={platform.logo}
              alt="Platform logo"
              className="img-fluid mb-3"
              style={{ width: platform.width || "50%" }}
            />
            <p className="text-muted">{platform.desc}</p>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Link to="/signup">
          <button className="btn btn-primary fs-5 px-4 py-2">Signup Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Universe;
