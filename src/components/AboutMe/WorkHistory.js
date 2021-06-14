import React from "react";
import { AboutMeNav } from "./AboutMeNav";
import { WorkHistoryList } from "./WorkHistoryList";

const WorkHistory = () => {
  return (
    <section className="aboutme_container">
      <AboutMeNav />
      <WorkHistoryList />
    </section>
  );
};

export { WorkHistory };
