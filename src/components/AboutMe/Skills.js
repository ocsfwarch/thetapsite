import React from "react";
import { AboutMeNav } from "./AboutMeNav";
import { SkillsList } from "./SkillsList";

const Skills = () => {
  return (
    <section className="aboutme_container">
      <SkillsList />
      <AboutMeNav />
    </section>
  );
};

export { Skills };
