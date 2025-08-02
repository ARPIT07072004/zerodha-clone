import React from "react";

const topics = [
  "Online Account Opening",
  "Offline Account Opening",
  "Company, Partnership and HUF Account",
  "Opening",
  "NRI Account Opening",
  "Charges at Zerodha",
  "Zerodha IDFC FIRST Bank 3-in-1 Account",
  "Getting Started",
];

const TopicCard = ({ title }) => (
  <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
    <div className="p-3 border rounded h-100 shadow-sm">
      <h5 className="mb-3">
        <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
        {title}
      </h5>
      <ul className="list-unstyled">
        {topics.map((item, index) => (
          <li key={index}>
            <a href="#" className="text-decoration-none lh-lg d-block">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

function CreateTicket() {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">
        To create a ticket, select a relevant topic
      </h2>
      <div className="row">
        {Array.from({ length: 6 }).map((_, idx) => (
          <TopicCard key={idx} title="Account Opening" />
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
