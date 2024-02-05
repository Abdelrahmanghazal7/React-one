import React from "react";
import Error from "../../assets/Error.png";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="error-bg d-flex justify-content-center align-items-center">
      <img src={Error} alt="" className="error" />
    </div>
  );
}

export default NotFound;
