import React from "react";

function RightSection({
  imageURL = "https://via.placeholder.com/400",
  productName = "Product Name",
  productDesription = "Product description goes here.",
  learnMore = "#",
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Text Content */}
        <div className="col-md-6 col-12 mb-4 mb-md-0 p-4">
          <h1 className="fw-bold">{productName}</h1>
          <p className="text-muted fs-5">{productDesription}</p>
          <a href={learnMore} className="btn btn-outline-primary mt-3">
            Learn More
          </a>
        </div>

        {/* Image */}
        <div className="col-md-6 col-12 text-center p-4">
          <img src={imageURL} alt={productName} className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
