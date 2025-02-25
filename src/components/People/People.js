import React from "react";
import "./People.css";
import PersonCard from "./PersonCard";
import OurPeopleBg from "./OurPeopleBg";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import GodfreyPic from "../../assets/GM001.jpg";
import AnnePic from "../../assets/anne-wanjiru.jpg";
import AndrewPic from "../../assets/andrew.jpeg";
import JohnPic from "../../assets/john.jpeg";
import NeemaPic from "../../assets/Neema-Joanne.jpg";
import HomeNavLink from "../Navbar/HomeNavLink";

function People() {
  return (
    <div className="people">
      <Navbar HomeLinkToRender={HomeNavLink} />
      <OurPeopleBg />
      <div className="our-people">
        <PersonCard
          profilePic={GodfreyPic}
          profileLink="/our-people/godfrey-orina/"
          firstName="Godfrey"
          lastName="Orina"
          position="Managing Partner"
        />
        {""}
        <PersonCard
          profilePic={AnnePic}
          profileLink="/our-people/anne-wanjiru/"
          firstName="Anne"
          lastName="Wanjiru"
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
        <PersonCard
          profilePic={NeemaPic}
          profileLink="/our-people/neema-joanne/"
          firstName="Neema"
          lastName="Joanne"
          position="Senior Partner"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default People;
