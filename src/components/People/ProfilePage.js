import React from "react";
import Navbar from "../Navbar/Navbar";
import OurPeopleBg from "./OurPeopleBg";
import Profile from "./Profile";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
const ProfilePage = ({ profileImg, name, about, position }) => {
  return (
    <div>
      <Navbar />
      <OurPeopleBg />
      <Profile
        profileImg={profileImg}
        name={name}
        about={about}
        position={position}
      />
      <Contact />
      <Footer />
    </div>
  );
};

export default ProfilePage;
