import React from "react";
import { Link } from "react-router-dom";

const BestContentSection = () => {
  return (
    <div className="best-content-section">
      <h2 className="my-best-content-title">My Best Written Content</h2>
      <p>
        <Link to="https://www.linkedin.com/feed/update/urn:li:activity:7078657910456631296/">
          https://www.linkedin.com/feed/update/urn:li:activity:7078657910456631296/
        </Link>
      </p>
      <p>
        <Link
          to="https://www.linkedin.com/feed/update/urn:li:activity:7081928688652402688/
      "
        >
          https://www.linkedin.com/feed/update/urn:li:activity:7081928688652402688/
        </Link>
      </p>
    </div>
  );
};

export default BestContentSection;
