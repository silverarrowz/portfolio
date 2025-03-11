import { Project } from "@/lib/types";
import Image from "next/image";

interface ProjectPreviewProps {
  project: Project;
}
const ProjectPreview = ({ project }: ProjectPreviewProps) => {
  const { title, description, images, slug } = project;

  return (
    <li>
      <a
        href={`/en/projects/${slug}`}
        className="space-y-4 flex flex-col items-center md:items-start"
      >
        <h3 className="font-serif text-[clamp(3rem,7vw,7rem)] leading-none uppercase transition-all duration-500 hover:-skew-x-12 hover:translate-x-10 hover:opacity-80 ">
          {title}
        </h3>
        <p>- {description}</p>
        <div className="w-xs h-64 sm:w-lg md:w-sm lg:w-xl sm:h-96 md:h-72 lg:h-96 relative">
          {" "}
          <Image
            className="object-contain"
            fill
            src={images[0]}
            alt={description}
          />
        </div>
      </a>
    </li>
  );
};

export default ProjectPreview;
