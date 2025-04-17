import ImageModal from "@/components/ImageModal";

export default function ProjectCard({ project }:
{
    project:
        {
            name: string;
            description: string;
            image: string;
            link: string
            technologies: string;
        }
})
{
    return (
        <div className="bg-brand-primary text-white p-4 rounded-lg shadow-xl mb-3">
            <ImageModal src={project.image} alt={project.name + " image"} />
            <h2 className="text-2xl font-bold mt-1">{project.name}</h2>
            <p className="text-lg mt-2">{project.description}</p>
            <p className={"text-lg mt-2"}>Technologies: {project.technologies}</p>
            <br/>
            <br/>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg p-1">
                View Project
            </a>
        </div>
    );
}