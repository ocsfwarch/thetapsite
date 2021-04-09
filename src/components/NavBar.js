import React from "react";

export const NavBar = () => {
  return (
    <nav className="navContent">
      <section>
        <ul className="navLinks">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Projects">Projects</a>
          </li>
          <li>
            <a href="/AboutMe">About Me</a>
          </li>
        </ul>
      </section>
    </nav>
  );
};
