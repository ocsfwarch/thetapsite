import React from "react";
import { AboutMeNav } from "./AboutMeNav";

const AboutMe = () => {
  return (
    <div className="aboutme_container">
      <section className="aboutme_content">
        <section className="img_sect">
          <section className="img_display">
            <img
              src="/images/AboutMe/tp_image_2.png"
              title="About Me"
              alt="About Me"
            />
          </section>
        </section>
        <section className="intro_sect">
          <p>
            My name is Terry Partridge. I have been a Full Stack Software
            Engineer based in Mission Viejo, California since 2000. For the past
            2 years my primary focus for frontend and backend development has
            been the PostgreSQL, Express, React, and Node (PERN) stack. I love
            the creative process associated with developing software and the
            constant advances in software development and engineering
            technologioes. It allows me to build applications that help people
            and it feeds my need for continuous improvement.
          </p>
        </section>
      </section>
      <AboutMeNav />
    </div>
  );
};

export { AboutMe };
