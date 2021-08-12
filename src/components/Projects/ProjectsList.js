import React from "react";
import { Project } from "./Project";
import { ProjectItems } from "../Helpers/ProjectItems";

/**
 * Create a list of Projects based on the type of project.
 * @param props.projectType
 *  the project type to filter, this is a string value
 * @returns
 *  An array of divs containing a Project.
 */
export const ProjectsList = (props) => {
  // Here we want to filter the projects by
  // project type and then create a list of
  // the projects.
  const projectList = ProjectItems.filter(
    (item) => item.type === props.projectType
  ).map((item, idx) => <Project key={idx} project={item} />);
  return <div className="projects_container">{projectList}</div>;
}; // End ProjectsList
