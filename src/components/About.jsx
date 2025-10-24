import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <img src="/assets/Osayande.jpg" alt="Profile" />

        <div className="info-box">
          <div className="text">
            <h3>Hi, i'm</h3>
            <h1>Agwaze Great</h1>
            <span>Frontend developer</span>
          </div>{" "}
          <div className="btn-group">
            {/* <div className="btn">Download CV</div> */}
            <div className="btn">
              <a href="#contact">Contact</a>{" "}
            </div>
          </div>
          <div className="socials">
            <a href="https://github.com/GreatOsa">
              {" "}
              <BsGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/greatosa/">
              <FaLinkedinIn className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
