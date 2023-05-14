import React from "react";
import "./Styles.css";
import logo from "../images/logo.svg";

export default function Navigation() {
  return (
    <nav id="navigation">
      <div className="logo">
        <img src={logo} alt="manage Logo" />
      </div>
      <div className="navLinks">
        <a href="#pricing">Pricing</a>
        <a href="#pricing">Product</a>
        <a href="#pricing">About us</a>
        <a href="#pricing">Careers</a>
        <a href="#pricing">Community</a>
      </div>
      <div className="cta">
        <a href="get started">Get Started</a>
      </div>
    </nav>
  );
}
