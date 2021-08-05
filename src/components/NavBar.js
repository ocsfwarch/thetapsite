import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navContent">
      <section>
        <ul className="navLinks">
          <li>
            <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/Projects`}>Projects</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/AboutMe`}>About Me</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};
