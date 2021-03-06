import React from "react";
import { Link } from "react-router-dom";

const AboutMeNav = () => {
  return (
    <section className="menu_display">
      <section className="app_header_menu">
        <nav className="navContent">
          <section>
            <ul className="navLinks">
              <li>
                <Link to={`${process.env.PUBLIC_URL}/WorkHistory`}>
                  Work History
                </Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/Skills`}>Skills</Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/Education`}>
                  Education
                </Link>
              </li>
            </ul>
          </section>
        </nav>
      </section>
    </section>
  );
};

export { AboutMeNav };
