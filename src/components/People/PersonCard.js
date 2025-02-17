import { React } from "react";
import { Link } from "react-router-dom";

import "./PersonCard.css";

const PersonCard = ({
  profilePic,
  firstName,
  lastName,
  position,
  profileLink,
}) => {
  return (
    <div className="card">
      <img className="profile-pic" src={profilePic} alt="Profile" />

      <div className="info">
        <h2 className="person-name">
          {firstName} {lastName}
        </h2>
        <p className="position">{position}</p>
        <Link to={profileLink} state={{ smooth: true }} className="view-more">
          View More
        </Link>
      </div>
    </div>
  );
};

export default PersonCard;




<div className={${isMenuOpen? 'flex' 'hidden'} w-full h-fit bg-yellow-500 p-4 absolute top-[72px] left-0} onClick={closeMenu}>
<ul className='flex flex-col justify-center items-center gap-2 w-full"> {navItems.map(({ Link, path }) => (
<Link key={path} className='text-black uppercase font-semibold cursor-pointer p-2 rounded-1g Ohover:bg-black hover: text-white w-full text-center' to [path] spy {true} offset=-100)>(Link)</Link>
))}
</ul>
</div>

