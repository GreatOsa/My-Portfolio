import React from "react";
import { BsLaptop } from "react-icons/bs";
import { FaChartArea } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-info">
        <div className="grid">
          <div className="grid-card">
            <BsLaptop className="icon" />
            <span>Frontend Development</span>
            <h3>2 Years</h3>
            <p>
              {" "}
              A React Developer focused on creating responsive, interactive web
              applications with clean design and smooth user experiences.
            </p>
          </div>
          <div className="grid-card">
            <FaChartArea className="icon" />
            <span>Marketing Specialist</span>
            <h3>1 Year</h3>
            <p>
              I focus on building brand visibility, driving engagement, and
              turning insights into measurable growth.
            </p>
          </div>
          {/* <div className="grid-card">
            <BsLaptop className="icon" />
            <span>Frontend Development</span>
            <h3>5 Years</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div> */}
        </div>
        <img
          src={`${import.meta.env.BASE_URL}assets/${"Osayande.jpg"}`}
          alt=""
        />
      </div>
    </section>
  );
}
