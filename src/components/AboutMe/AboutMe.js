import React from "react";
import { AboutMeNav } from "./AboutMeNav";
import { AboutMeCont } from "./AboutMeCont";

const AboutMe = () => {
  return (
    <div className="aboutme_container">
      <AboutMeNav />
      <AboutMeCont />
    </div>
  );
};

export { AboutMe };
