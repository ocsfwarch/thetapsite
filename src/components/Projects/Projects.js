import React, { useState } from "react";
import { ProjectsNav } from "./ProjectsNav";
import { ProjectsList } from "./ProjectsList";

const Projects = () => {
  const [projectType, setProjectType] = useState("enterprise");
  const updateProjectType = (event) => {
    event.preventDefault();
    const newProjectType = event.target.name;
    if (newProjectType && newProjectType.length) {
      if (newProjectType !== projectType) {
        setProjectType(newProjectType);
      }
    }
  };

  return (
    <div className="project_view_container">
      <ProjectsNav
        projectType={projectType}
        updateProjectType={updateProjectType}
      />
      <ProjectsList projectType={projectType} />
    </div>
  );
};

export { Projects };
