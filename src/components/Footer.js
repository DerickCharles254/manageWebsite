import React from "react";
import logo from "../images/footerLogo.svg";
import instagram from "../images/icon-instagram.svg";
import facebook from "../images/icon-facebook.svg";
import pinterest from "../images/icon-pinterest.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="topPartFooter">
          <div className="textPartFooter">
            <h3>Simplify how your team works today.</h3>
          </div>
          <div className="cta">
            <p>Get Started</p>
          </div>
        </div>
        <div className="bottomPartFooter">
          <div className="leftColumnFooter">
            <div className="bottomLogo">
              <img src={logo} alt="manage Logo" />
            </div>
            <div className="socialMedia">
              <img src={instagram} alt="insta logo" />
              <img src={facebook} alt="facebook logo" />
              <img src={pinterest} alt="pinterest logo" />
              <img src={twitter} alt="twitter logo" />
              <img src={youtube} alt="youtube logo" />
            </div>
          </div>
          <div className="middleColumnFooter">
            <div className="firstColumnFooter">
              <a href="#home">Home</a>
              <a href="#Pricing">Pricing</a>
              <a href="#Products">Products</a>
              <a href="#About Us">About Us</a>
            </div>
            <div className="secondColumnFooter">
              <a href="#Careers">Careers</a>
              <a href="#Community">Community</a>
              <a href="#Privacy policy">Privacy policy</a>
            </div>
          </div>
          <div className="rightColumnFooter">
            <div className="searchBox">
              <input type="text" />
            </div>
            <div className="send">
              <p>Go</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
