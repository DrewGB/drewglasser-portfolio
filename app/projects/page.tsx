"use client"
import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";



export default function Projects() {
  return (
    <>
        <main className="min-h-screen bg-brand-bg text-brand-text md:pl-2 md:pr-3 py-3">
          <h1 className="text-4xl font-bold text-brand-text text-center">
            Projects
          </h1>
            <div className="mb-4 mx-auto flex flex-col md:flex-row items-start">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4 mx-auto">
                    {projects.map((project) => (<ProjectCard project={project} key={project.name} />))}
                </div>
            </div>
        </main>
    </>
  );
}