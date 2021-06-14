import React from "react";
import { Link } from "react-router-dom";

const AboutMeNav = () => {
  return (
    <section className="aboutme_menu_display">
      <section className="app_header_menu">
        <nav className="navContent">
          <section>
            <ul className="navLinks">
              <li>
                <Link to="/AboutMe/WorkHistory">Work History</Link>
              </li>
              <li>
                <Link to="/AboutMe/Skills">Skills</Link>
              </li>
              <li>
                <Link to="/AboutMe/Education">Education</Link>
              </li>
            </ul>
          </section>
        </nav>
      </section>
    </section>
  );
};

export { AboutMeNav };
