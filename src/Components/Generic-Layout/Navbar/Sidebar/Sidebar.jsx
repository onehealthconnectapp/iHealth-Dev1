import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="side-bar">
        <ul className="Nav-links">
          <NavLink to="/" className="Home" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </NavLink>
          <NavLink
            onClick={() => {
              document.querySelector("#UnderConst-wrapper").style.display =
                "flex";
            }}
            className="Services"
            style={{ textDecoration: "none" }}
          >
            <li>Our Services</li>
          </NavLink>
          <NavLink
            onClick={() => {
              document.querySelector("#UnderConst-wrapper").style.display =
                "flex";
            }}
            className="Research"
            style={{ textDecoration: "none" }}
          >
            <li>Research</li>
          </NavLink>
          <NavLink
            onClick={() => {
              document.querySelector("#UnderConst-wrapper").style.display =
                "flex";
            }}
            className="About-us"
            style={{ textDecoration: "none" }}
          >
            <li>About Us</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
