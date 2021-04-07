import React from "react";

const AboutMe = () => {
  return (
    <div className="aboutme_container">
      <section className="img_sect">
        <section className="img_display">
          <img
            src="/images/AboutMe/IMG_1832.JPG"
            title="About Me"
            alt="About Me"
          />
        </section>
      </section>
      <section className="intro_sect">
        <span>intro</span>
      </section>
      <section className="footer_sect">
        <span>footer</span>
      </section>
    </div>
  );
};

export { AboutMe };
