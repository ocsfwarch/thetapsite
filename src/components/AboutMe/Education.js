import React from "react";
import { AboutMeNav } from "./AboutMeNav";

const Education = () => {
  return (
    <section className="aboutme_container">
      <AboutMeNav />
      <section className="education_card_container">
        <section className="education_card">
          <div>
            <span className="span1">
              Master of Science, Software Engineering
            </span>
          </div>
          <div>
            <span className="span2">
              California State University, Fullerton
            </span>
          </div>
          <div>
            <span className="span3">June 2006</span>
          </div>
          <div className="csuf_image_container">
            <div className="csuf_image">
              <img src="/images/Techs/CSUF_2.jpg" alt="CSUF" />
            </div>
          </div>
        </section>
        <section className="education_card">
          <div>
            <span className="span1">Bachelor of Science, Computer Science</span>
          </div>
          <div>
            <span className="span2">
              California State University, Fullerton
            </span>
          </div>
          <div>
            <span className="span3">June 2003</span>
          </div>
          <div className="csuf_image_container">
            <div className="csuf_image">
              <img src="/images/Techs/CSUF_2.jpg" alt="CSUF" />
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export { Education };
