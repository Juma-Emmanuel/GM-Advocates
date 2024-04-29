import React from "react";
import "./Home.css";
// import { Link } from "react-scroll";
function Home() {
  return (
    <section id="home">
      <div className="homeContent">
        <span className="introText">
          <span className="homeTitle">G.M ORINA & </span>
          CO. ADVOCATES
        </span>
        <div className="horizontal-bar"></div>

        <p className="homeText">
          Count on us for reliable legal support, where our goal is to achieve
          favorable outcomes for all our clients.
        </p>
      </div>
    </section>
  );
}

export default Home;
