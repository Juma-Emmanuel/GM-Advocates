import React from "react";
import profileImg from "../assets/john.jpeg";
import ProfilePage from "../components/People/ProfilePage";
function John() {
  const name = "John Wekesa";
  const position = "Senior Partner";
  const about =
    "John is a noted thought leader and expert on engineering and construction law, tax law, employment and litigation and counselling. John is also a human rights defender and a trusted adviser on financial technology.";
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

export default John;
