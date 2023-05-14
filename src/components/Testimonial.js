import React from "react";
import Profile1 from "../images/avatar-ali.png";
import Profile2 from "../images/avatar-anisha.png";
import Profile3 from "../images/avatar-richard.png";

export default function Testimonials() {
  return (
    <>
      <section id="testimonials">
        <div className="sectionTitle">
          <h1>What they've said</h1>
        </div>
        <div className="cards">
          <div className="card">
            <img src={Profile2} alt="profile" />
            <h5>Anisha Li</h5>
            <p>
              " Manage has supercharged our team's workflow,They maintain
              visibility on target milestones at all times keeps everyone
              motivated."
            </p>
          </div>
          <div className="card">
            <img src={Profile1} alt="profile" />
            <h5>Anisha Li</h5>
            <p>
              " Manage has supercharged our team's workflow,They maintain
              visibility on target milestones at all times keeps everyone
              motivated."
            </p>
          </div>
          <div className="card">
            <img src={Profile3} alt="profile" />
            <h5>Anisha Li</h5>
            <p>
              " Manage has supercharged our team's workflow,They maintain
              visibility on target milestones at all times keeps everyone
              motivated."
            </p>
          </div>
        </div>
        <div className="testimonialcta">
          <div className="inner">
            <p>Get Started</p>
          </div>
        </div>
      </section>
    </>
  );
}
