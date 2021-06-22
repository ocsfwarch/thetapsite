import React from "react";

export const ProjectListItem = ({ project }) => {
  const techStack = project.stack.map((item, idx) => {
    return (
      <img key={idx} src={item.src} title={item.title} alt={item.alt}></img>
    );
  });

  let appLink = "";
  if (project.href && project.href.length > 0) {
    appLink = (
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        title="Click to show the app"
      >
        <button type="button" className="btn btn-primary">
          Visit App
        </button>
      </a>
    );
  }

  let gitLink = "";
  if (project.git && project.git.length > 0) {
    gitLink = (
      <a
        href={project.git}
        target="_blank"
        rel="noreferrer"
        title="Click to visit the GitHub repository"
      >
        <button type="button" className="btn btn-primary">
          Visit GitHub
        </button>
      </a>
    );
  }

  return (
    <div className="project_container">
      <section className="project_title">
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          title="Click to show the app"
        >
          {project.title}
        </a>
      </section>

      <section className="project_image">
        <img src={project.image} alt="" />
      </section>

      <section className="project_summary">
        <p>{project.summary}</p>
      </section>

      <section className="project_stack">{techStack}</section>

      <section className="project_footer">
        {appLink}
        {gitLink}
      </section>
    </div>
  );
};
