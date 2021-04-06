import React from 'react';

export const Project = ({project}) => {
    //console.log(`path=${window.location.pathname}, Image = ${img}`)
    const openProject = () => {
        window.open(project.href, '_blank');
    }

    const techStack = project.stack.map((item,idx) => {
        return(<img key={idx} src={item.src}        title={item.title}      alt={item.alt}></img>)
    });

    return(
        <div className="project_container">
            <section className="project_title">
                <a href={project.href} target="_blank" title="Click to show the app">{project.title}</a>
            </section>
            
            <section className="project_image">
                <section className="project_image_container">
                    <img src={project.image} />
                </section>
            </section>
            <section className="project_summary">
                <p>
                    {project.summary}
                </p>
                <p>
                    {techStack}
                </p>
            </section>

            <section className="project_footer">
                <button type="button" className="btn btn-primary" onClick={openProject}>Visit App</button>
            </section>
        </div>
    );
};
