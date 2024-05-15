import React from "react";
import "./People.css";
import PersonCard from "./PersonCard";
import OurPeopleBg from "./OurPeopleBg";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import GodfreyPic from "../../assets/Godfrey.jpeg";
import CatherinePic from "../../assets/catherine.jpeg";
import AndrewPic from "../../assets/andrew.jpeg";
import JohnPic from "../../assets/john.jpeg";

function People() {
  return (
    <div className="people">
      <Navbar />
      <OurPeopleBg />
      <div className="our-people">
        <PersonCard
          profilePic={GodfreyPic}
          profileLink="/our-people/godfrey-orina/"
          firstName="Godfrey"
          lastName="Orina"
          position="Founding Partner"
        />
        {""}
        <PersonCard
          profilePic={CatherinePic}
          profileLink="/our-people/catherine-mwinzi/"
          firstName="Catherine "
          lastName="M. Mwinzi"
          position="Adminstrator"
        />
        <PersonCard
          profilePic={AndrewPic}
          profileLink="/our-people/andrew-wanga/"
          firstName="Andrew"
          lastName="Wanga"
          position="Senior Partner"
        />
        <PersonCard
          profilePic={JohnPic}
          profileLink="/our-people/john-wekesa/"
          firstName="John"
          lastName="Wekesa"
          position="Senior Partner"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default People;
