import React from "react";
import "./careers.css";
import careersBgImg from "../assets/universe.jpg";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PageHeaderBg from "../components/PageHeaderBg";
import Contact from "../components/Contact/Contact";

function Careers() {
  return (
    <section className="careers-page">
      <Navbar />
      <PageHeaderBg title={"Careers"} />
      <div className="careers-content">
        <div className="main-area">
          <div className="horizontal-bar"></div>
          <h1>Join Our Team</h1>
          <div className="main-area-text">
            <p>
              At our firm, we believe in nurturing talent and providing an
              environment where you can gain invaluable experience. Working with
              us, you'll have the opportunity to engage in diverse legal
              matters, hone your skills, and grow professionally. Our team is
              dedicated to guiding you through your career journey, ensuring you
              gain the knowledge and expertise needed to excel in the legal
              field.
            </p>
          </div>
          <div className="img-container">
            <img src={careersBgImg} alt="careers-background" className="img" />
          </div>
        </div>
        <div className="focus-areas">
          <div className="horizontal-bar"></div>
          <h1>Perks of Working with Us</h1>
          <div className="focus-area">
            <i className="fa fa-caret-right"></i>
            <h7>Comprehensive Health Benefits</h7>
          </div>
          <div className="focus-area">
            <i className="fa fa-caret-right"></i>
            <h7>Professional Development Opportunities</h7>
          </div>
          <div className="focus-area">
            <i className="fa fa-caret-right"></i>
            <h7>Flexible Working Hours</h7>
          </div>
          <div className="focus-area">
            <i className="fa fa-caret-right"></i>
            <h7>Generous Paid Time Off</h7>
          </div>
          <div className="focus-area">
            <i className="fa fa-caret-right"></i>
            <h7>Collaborative Work Environment</h7>
          </div>
        </div>
        <div className="vacancies">
          <div className="horizontal-bar"></div>
          <h1>Available Vacancies</h1>
          <div className="vacancy">
            <h2>Associate Attorney</h2>
            <p>
              We are looking for an Associate Attorney with 3-5 years of
              experience in litigation. The ideal candidate will have strong
              analytical skills and the ability to work collaboratively with our
              team. Apply now to join our dynamic firm.
            </p>
          </div>
          <div className="vacancy">
            <h2>Legal Assistant</h2>
            <p>
              Our firm is seeking a Legal Assistant to support our attorneys
              with case preparation, research, and administrative tasks. If you
              have excellent organizational skills and a passion for the legal
              field, we want to hear from you.
            </p>
          </div>
          {/* space that we might to add more vacancies in future */}
        </div>
      </div>
      <Contact />
      <Footer />
    </section>
  );
}

export default Careers;
