import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Litigation.css";
function Litigation() {
  return (
    <section className="litigation">
      <Navbar />
      <div className="litigation-content">
        <h1>Litigation & Dispute Resolution</h1>
        <div className="litigation-body">
          <div className="litigation-text">
            <h3>
              Our Litigation & Dispute Resolution practice focuses on solving
              disputes relating to employment and labour relations, environment
              and land disputes, constitutional human rights law, family and
              succession law and procurement disputes
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Litigation;
