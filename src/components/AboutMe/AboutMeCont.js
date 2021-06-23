import React from "react";

const AboutMeCont = () => {
  return (
    <div>
      <section className="aboutme_content">
        <section className="img_sect">
          <img
            src="/images/AboutMe/tp_image_2.png"
            title="About Me"
            alt="About Me"
          />
        </section>
        <section className="intro_sect">
          <p>
            Hi, my name is Terry Partridge. I have been a Full Stack Software
            Engineer based in Mission Viejo, California since 2000. For the past
            2 years my primary focus for frontend and backend development has
            been the PostgreSQL, Express, React, and Node (PERN) stack. I love
            the creative process associated with developing software and the
            constant advances in software development technologies. These allow
            me to build applications that are useful to people and it feeds my
            need for continuous improvement.
          </p>
        </section>
      </section>
    </div>
  );
};

export { AboutMeCont };
