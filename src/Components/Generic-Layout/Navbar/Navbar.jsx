//Import Libraries/Packages
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//Import Styles
import "./Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

//Import Local files
import desktopLogo from "../../../Assets/Brand/logo-nav-desktop.png";
import mobileLogo from "../../../Assets/Brand/logo-nav-mobile.png";

//Import Local Components
import NavDropdownButton from "./NavDropdown";
import Login from "../UserAuthentication/Login/Login";





const Navbar = () => 
{
  


  return (
    <>
      <nav className="nav-container">
        <NavDropdownButton />
        <div className="nav-inner-container">
          <div className="nav-logo-block">
            <NavLink to="/" className="nav-logo">
              <picture>
                <source media="(max-width: 1023px)" srcSet={mobileLogo} />
                <img
                  className="nav-logo-img"
                  src={desktopLogo}
                  loading="lazy"
                  alt="confidential"
                />
              </picture>
            </NavLink>
          </div>

          <div className="nav-links-block">
            <ul className="nav-links-list desktop">
              <li className="nav-links-listitem">
                <NavLink to="/" className="nav-links nav-home">
                  Home
                </NavLink>
              </li>
              <li className="nav-links-listitem">
                <NavLink
                  onClick={() => {
                    document.querySelector(
                      "#UnderConst-wrapper"
                    ).style.display = "flex";
                  }}
                  className="nav-links nav-services"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-links-listitem">
                <NavLink
                  onClick={() => {
                    document.querySelector(
                      "#UnderConst-wrapper"
                    ).style.display = "flex";
                  }}
                  className="nav-links nav-about-us"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-links-listitem">
                <NavLink
                  onClick={() => {
                    document.querySelector(
                      "#UnderConst-wrapper"
                    ).style.display = "flex";
                  }}
                  className="nav-links nav-research"
                >
                  Research
                </NavLink>
              </li>
            </ul>
            <ul className="nav-links-list">
              <li className="nav-links-listitem">
                <NavLink onClick={()=> console.log('login clicked')} className="nav-links nav-signin">
                  <AccountCircleIcon className="circle-icon" sx={{ fontSize: 32, marginLeft: 0.5 }} sm={{ fontSize: 48 }} />
                  <span className="nav-signin-span">Sign up or Log In</span>
                </NavLink>
              </li>
              <li className="nav-links-listitem">
                <NavLink
                  onClick={() => {
                    document.querySelector(
                      "#UnderConst-wrapper"
                    ).style.display = "flex";
                  }}
                  className="nav-links nav-donate"
                >
                  Donate
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Login Component */}
      <Login />
    </>
  );
};

export default Navbar;
