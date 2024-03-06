import React from "react";
import "./Footer.css";
import { NavLink, Link } from "react-router-dom";
import { getMenuStyles } from "../../utils/common";
import { useState } from "react";
import AboutUs from "../../Pages/AboutUs/AboutUs";

const Footer = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <Link to="/">
            <img src="./logo2.png" alt="logo" width={100} />
          </Link>
          {/* <img src="./logo2.png" alt="" width={120} /> */}

          <span className="secondaryText f-text">
            We’re reimagining how you buy, sell and rent. <br />
            It’s now easier to get into a place you love.
            <br />
            So let’s do this, together.
          </span>
        </div>
        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText f-text">
            University Road, Ahmedabad - 380009 , India{" "}
          </span>

          <div
            className="  flexCenter f-menu f-text"
            style={getMenuStyles(menuOpened)}
          >
            <NavLink to="/properties" className="f-menuHover">
              Properties
            </NavLink>

            <NavLink to="/contactUs" className="f-menuHover">
              Contact Us
            </NavLink>
            <span className="f-menuHover">Product</span>
            <NavLink to="/aboutUs" className="f-menuHover">
              About Us
            </NavLink>
          </div>
        </div>
      </div>

      {/* Copyright and creation */}
      <div className=" innerWidth flexCenter flecColStart  createdBy f-text">
        <span className="f-text copyright">Copyright @2024 Makaan inc.</span>
      </div>
    </section>
  );
};

export default Footer;
