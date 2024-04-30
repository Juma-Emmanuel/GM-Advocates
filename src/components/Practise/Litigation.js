import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Litigation.css";
import litigationImg from "../../assets/Litigation-and-Dispute-Resolution.jpg";
function Litigation() {
  return (
    <section className="litigation">
      <Navbar />
      <div className="litigation-content">
        <div className="litigation-body">
          <div className="horizontal-bar"></div>
          <h1>Litigation & Dispute Resolution</h1>
          <div className="litigation-text">
            <h7>
              Our Litigation & Dispute Resolution practice focuses on solving
              disputes relating to employment and labour relations, environment
              and land disputes, constitutional human rights law, family and
              succession law and procurement disputes.
            </h7>
            <h7>
              Our team is well equipped with skills and knowhow to guide our
              clients through the dispute resolution process.
            </h7>
          </div>
          <div className="litigationImg-container">
            <img
              src={litigationImg}
              alt="litigation-Img"
              className="litigationImg"
            ></img>
          </div>
        </div>
        <div className="focus-areas">
          <div className="horizontal-bar"></div>
          <h1>Areas of Focus</h1>

          <div className="focus-area">
            <i className="fa fa-caret-right"></i>
            <h7>Constitutional & Human Rights Law</h7>
          </div>
          <div className="focus-area">
            <i className="fa fa-caret-right"></i> <h7>Criminal Litigation</h7>
          </div>
          <div className="focus-area">
            <i className="fa fa-caret-right"></i>
            <h7>Family & Succession Law</h7>
          </div>
          <div className="focus-area">
            <i className="fa fa-caret-right"></i>
            <h7>Arbitration & Mediation</h7>
          </div>
          <div className="focus-area">
            <i className="fa fa-caret-right"></i>
            <h7>Defamation Law</h7>
          </div>
          <div className="focus-area">
            <i className="fa fa-caret-right"></i>
            <h7>Policy Formulation & Legislative Drafting</h7>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Litigation;
