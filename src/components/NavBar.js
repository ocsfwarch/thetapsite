import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navContent">
      <section>
        <ul className="navLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/AboutMe">About Me</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};
