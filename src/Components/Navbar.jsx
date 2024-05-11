import React from "react";
import PropTypes from "prop-types";
import { useNavigate, Link } from "react-router-dom";

function Navbar({ title = "Set Title Here" }, ...props) {
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };

  const gotoTeam = () => {
    navigate("/team");
  };

  const gotoContact = () => {
    navigate("/contact");
  };

  const gotoAbout = () => {
    navigate("/about");
  };

  //-------------Driver Code---------------//
  return (
    <>
      <div className="flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 font-medium place-content-between px-10 py-2">
        <div className="flex items-center">
          <div className="ml-24">
            <p
              className="font-semibold text-[24px] text-[#322A26]"
              onClick={gotoHome}
            >
              <Link to="/">{title}</Link>
            </p>
          </div>
        </div>
        <div className="flex">
          <ul className="flex gap-12 text-white font-semibold text-[20px]">
            <li onClick={gotoTeam}>
              <Link to="/team">Team</Link>
            </li>
            <li onClick={gotoContact}>
              <Link to="/contact">Contact</Link>
            </li>
            <li onClick={gotoAbout}>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
