import React from "react";
import "./CorporateCommercial.css";
import "./TechnologyLaw.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import corporateImg from "../../assets/commercial.jpg";
function CorporateCommercial() {
  return (
    <section className="technology">
      <Navbar />
      <div className="technology-content">
        <div className="technology-body">
          <div className="horizontal-bar"></div>
          <h1>Corporate & Commercial Law</h1>
          <div className="technology-text">
            <h7>
              We advise on modalities of setting up new businesses, handling
              mergers and sale disputes, directors liability and privacy.
            </h7>
          </div>
          <div className="technologyImg-container">
            <img
              src={corporateImg}
              alt="technology-Img"
              className="technologyImg"
            ></img>
          </div>
        </div>
        <div className="focus-areas">
          <div className="horizontal-bar"></div>
          <div className="focus-area">
            <h7>
              We draft, advise and review contracts that prevent disputes to
              help solidfy relationships and commitments between parties.
            </h7>
          </div>
          <div className="focus-area">
            <h7>
              We advise entrepreneurs, investors, shareholders and financiers on
              how to select the best form of financing or restructuring.
            </h7>
          </div>
          <div className="focus-area">
            <h7>
              We advise individuals on how to avert bankruptcy, restart,
              reorganize, analyse risk and manage liability.
            </h7>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default CorporateCommercial;
