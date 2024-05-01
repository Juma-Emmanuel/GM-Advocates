import React from "react";
import "./TechnologyLaw.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import realEstateImg from "../../assets/real_estate.jpg";
function RealEstateProperty() {
  return (
    <section className="technology">
      <Navbar />
      <div className="technology-content">
        <div className="technology-body">
          <div className="horizontal-bar"></div>
          <h1>Real Estate & Property Law</h1>
          <div className="technology-text">
            <h7>
              We provide support for home buyers, investors, developers, local
              authorities, banks and housing corporations.
            </h7>
          </div>
          <div className="technologyImg-container">
            <img
              src={realEstateImg}
              alt="technology-Img"
              className="technologyImg"
            ></img>
          </div>
        </div>
        <div className="focus-areas">
          <div className="horizontal-bar"></div>
          <div className="focus-area">
            <h7>
              Environmental planning and compliance with regulations, licenses,
              tenders and public private partnerships.
            </h7>
          </div>
          <div className="focus-area">
            <h7>
              Registration/recording of conveyances, leases and real estate
              security interests.
            </h7>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default RealEstateProperty;
