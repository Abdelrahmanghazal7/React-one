import React from "react";
import "./About.css";
import Underline from "../Underline/Underline";

function About() {
  return (
    <div className="about d-flex justify-content-center align-items-center animate__animated animate__fadeIn">
      <div className="container d-flex flex-column justify-content-center align-items-center flex">
        <div>
          <h2 className="text-center">About</h2>
          <Underline />
        </div>

        <div className="row text-secondary">
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
