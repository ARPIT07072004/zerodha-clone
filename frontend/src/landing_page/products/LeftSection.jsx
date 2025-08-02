import React from "react";

function LeftSection({
  imageURL = "https://via.placeholder.com/400",
  productName = "Product Name",
  productDesription = "Product description goes here.",
  tryDemo = "#",
  learnMore = "#",
  googlePlay = "#",
  appStore = "#",
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 col-12 text-center mb-4 mb-md-0">
          <img src={imageURL} alt={productName} className="img-fluid rounded" />
        </div>

        {/* Content Section */}
        <div className="col-md-6 col-12 px-4">
          <h1 className="fw-bold">{productName}</h1>
          <p className="text-muted fs-5">{productDesription}</p>

          <div className="d-flex flex-wrap gap-3 mb-4">
            <a href={tryDemo} className="btn btn-primary">
              Try Demo
            </a>
            <a href={learnMore} className="btn btn-outline-secondary">
              Learn More
            </a>
          </div>

          <div className="d-flex flex-wrap align-items-center gap-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Download on Google Play"
                className="img-fluid"
                style={{ maxHeight: "60px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="Download on App Store"
                className="img-fluid"
                style={{ maxHeight: "60px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
