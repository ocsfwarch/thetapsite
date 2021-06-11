import React from "react";
import { AboutMeNav } from "./AboutMeNav";
import { WorkList } from "./WorkList";

const WorkHistory = () => {
  return (
    <section className="aboutme_container">
      <WorkList />
      <AboutMeNav />
    </section>
  );
};

export { WorkHistory };
