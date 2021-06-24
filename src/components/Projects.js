import React from "react";
import { Project } from "./Project";
import { ProjectItems } from "./Helpers/ProjectItems";

export const Projects = () => {
  const projectList = ProjectItems.map((item, idx) => (
    <Project key={idx} project={item} />
  ));
  return <div className="projects_container">{projectList}</div>;
}; // End Projects
