import React from "react";
import { AboutMeNav } from "./AboutMeNav";
import { WorkList } from "./WorkList";

const WorkHistory = () => {
  console.log(`LEN = ${WorkList.length}`);
  return (
    <section className="aboutme_container">
      <div className="work_history_container">
        <WorkList />
      </div>
      <AboutMeNav />
    </section>
  );
};

export { WorkHistory };
