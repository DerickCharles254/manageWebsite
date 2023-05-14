import React from "react";
import "./Styles.css";
import illustration from "../images/illustration-intro.svg";

export default function Hero() {
  return (
    <>
      <section id="hero">
        <div className="leftColumn">
          <h1>Bring everyone together to build better products.</h1>
          <p className="leftText">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="cta">
            <p>Get Started</p>
          </div>
        </div>
        <div className="rightColumn">
          <img src={illustration} alt="hero illustration" />
        </div>
      </section>
    </>
  );
}
