import React from "react";
import profileImg from "../assets/andrew.jpeg";
import ProfilePage from "../components/People/ProfilePage";
function Andrew() {
  const name = "Andrew Wanga";
  const position = "Senior Partner";
  const about =
    " Andrew is a senior partner with a wealth of experience in immigration is Label With Internally Disabled Control, real estate, property law and financial technology.";
  return (
    <div>
      <ProfilePage
        profileImg={profileImg}
        name={name}
        about={about}
        position={position}
      />
    </div>
  );
}

export default Andrew;
