import React from "react";
import { Card } from "react-bootstrap";

const SingleFeature = ({ feature }) => {
  const { icon, title, description, link } = feature;

  return (
    <Card className=" shadow-sm border-0 rounded p-3 hover-shadow text-start text-justify">
      <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
        <div className="d-flex align-items-center justify-content-center bg-dark text-white rounded" style={{ width: "64px", height: "64px" }}>
          <img src={icon} alt={title} width={36} height={36} />
        </div>
        <h3 className="mt-4 mb-3 h5 fw-semibold text-dark">{title}</h3>
        <p className="text-muted ">{description}</p>
      </a>
    </Card>
  );
};

export default SingleFeature;
