import React from "react";
import { projects } from "@/utils/constants";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <section className="mt-2 py-4 px-6" id="projects-section">
      <div className="container mx-auto flex justify-center py-3">
        <div>
          <img
            src="/dots-light.svg"
            alt=""
            className="h-[22px] w-[22px] items-center justify-center justify-self-start"
          />
        </div>
        <h2 className="text-2xl">Projects</h2>
      </div>
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mx-auto py-3">
        {projects.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
