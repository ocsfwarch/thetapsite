import React from "react";

const AboutMeNav = () => {
  return (
    <section className="aboutme_footer">
      <section className="app_header_menu">
        <nav className="navContent">
          <section>
            <ul className="navLinks">
              <li>
                <a href="/AboutMe/WorkHistory">Work History</a>
              </li>
              <li>
                <a href="/AboutMe/Skills">Skills</a>
              </li>
              <li>
                <a href="/AboutMe/Education">Education</a>
              </li>
            </ul>
          </section>
        </nav>
      </section>
    </section>
  );
};

export { AboutMeNav };
