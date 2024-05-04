import React from "react";
import "./People.css";
import PersonCard from "./PersonCard";
// import ProfilePic from "../../assets/person.webp";
import ProfilePic from "../../assets/lawyer.jpg";
import OurPeopleBg from "./OurPeopleBg";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
function People() {
  return (
    <div className="people">
      <Navbar />
      <OurPeopleBg />
      <div className="our-people">
        <PersonCard
          profilePic={ProfilePic}
          profileLink="/john-doe/"
          firstName="John"
          lastName="Doe"
          position="Secretary"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <PersonCard
          profilePic={ProfilePic}
          firstName="John"
          lastName="Doe"
          position="Secretary"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <PersonCard
          profilePic={ProfilePic}
          firstName="John"
          lastName="Doe"
          position="Secretary"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <PersonCard
          profilePic={ProfilePic}
          firstName="John"
          lastName="Doe"
          position="Secretary"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <PersonCard
          profilePic={ProfilePic}
          firstName="John"
          lastName="Doe"
          position="Secretary"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <PersonCard
          profilePic={ProfilePic}
          firstName="John"
          lastName="Doe"
          position="Secretary"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default People;
