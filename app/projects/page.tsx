import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text pl-8 pr-8 pt-2">
      <h1 className="text-4xl font-bold text-brand-text text-center">
        Projects
      </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {projects.map((project) => (<ProjectCard project={project} key={project.name} />))}
        </div>
    </main>
  );
}