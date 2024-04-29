import React from "react";
import "./About.css";
import aboutImg from "../../assets/law-justice.jpg";
function About() {
  return (
    <section id="about">
      <div className="about-img-div">
        <img src={aboutImg} className="about-img" alt="about-img" />
      </div>
      <div className="about-content">
        <h1>
          Your trusted Legal <br />
          Partner
        </h1>
        <div className="horizontal-bar"></div>

        <p>
          G.M Orina & Co. Advocates is a medium sized law firm providing legal
          counsel and solutions to a wide range of clients in Kenya, Africa and
          globally.
        </p>
      </div>
    </section>
  );
}

export default About;
