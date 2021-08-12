import React from "react";

const ProjectsNav = (props) => {
  return (
    <section className="menu_display">
      <section className="app_header_menu">
        <nav className="navContent">
          <section>
            <ul className="navLinks">
              <li>
                <button
                  className={
                    props.projectType === "enterprise" ? "use_underline" : ""
                  }
                  name="enterprise"
                  type="none"
                  onClick={props.updateProjectType}
                >
                  Enterprise
                </button>
              </li>
              <li>
                <button
                  className={
                    props.projectType === "general" ? "use_underline" : ""
                  }
                  name="general"
                  type="none"
                  onClick={props.updateProjectType}
                >
                  General
                </button>
              </li>
            </ul>
          </section>
        </nav>
      </section>
    </section>
  );
};

export { ProjectsNav };
