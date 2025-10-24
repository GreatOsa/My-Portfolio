import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <a href="#" className="logo">
        <span>Agwaze Great</span>{" "}
      </a>

      <ul className={`nav-links ${toggle ? "active" : ""}`}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <GiHamburgerMenu
        id="menu-icon"
        onClick={() => {
          setToggle(!toggle);
        }}
      />
       <a href="https://github.com/GreatOsa"><button className="visit-btn">
        {" "}
        Visit Github
      </button></a>
    </header>
  );
}
