import React from "react";
import { ProjectListItem } from "./ProjectListItem";
import { ProjectItems } from "./Helpers/ProjectItems";

export const Projects = () => {
  const projectList = ProjectItems.map((item, idx) => (
    <ProjectListItem key={idx} project={item} />
  ));
  return <div className="projects_container">{projectList}</div>;
}; // End Projects
