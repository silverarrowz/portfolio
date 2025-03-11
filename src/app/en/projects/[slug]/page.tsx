import Sidebar from "../../components/Sidebar";
import Image from "next/image";
import FadeOutSection from "@/lib/FadeOutSection";
import { PROJECTS_EN } from "@/lib/utils";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS_EN.find((p) => p.slug === slug);

  return (
    <div className="">
      <Sidebar navLink={{ href: `/en/projects`, label: "Projects" }} />
      <main className="p-10 md:p-24 md:pb-0 pt-28 flex flex-col bg-background">
        <h1 className="text-[clamp(2rem,8vw,8rem)] leading-none font-serif uppercase opacity-0 animate-fade-in delay-200 ">
          {project!.title}
        </h1>

        <FadeOutSection>
          <div className="flex flex-col smd:flex-row gap-x-12 relative pb-16">
            <p className="opacity-0 animate-fade-in delay-[400ms] font-serif text-xl pt-14  w-full smd:max-w-[9.375rem] smd:sticky top-0 smd:h-[100vh] text-gray-800">
              {project!.description}
            </p>
            <div className="flex flex-col flex-1 gap-14 pt-14">
              {" "}
              <div className="relative w-full aspect-[4/3] opacity-0 animate-fade-in delay-500 group ">
                <Image
                  className="bg-foreground object-contain"
                  fill
                  src={project!.images[0]}
                  alt="e-commerce screenshot"
                />
                <div
                  className="absolute bottom-[0%] top-0  right-[0%] left-[0%] bg-foreground/75 flex flex-col text-background-alt text-center justify-center p-8 group-hover:opacity-100 opacity-0 
              transition-opacity duration-500"
                >
                  <a
                    className="hover:text-neutral-300 hover:underline underline-offset-4"
                    href={project!.github}
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    className="hover:text-neutral-300 hover:underline underline-offset-4"
                    href={project!.link}
                    target="_blank"
                  >
                    Live
                  </a>
                </div>
              </div>
              <div className="relative w-full aspect-[4/3] opacity-0 animate-fade-in delay-500 group ">
                <Image
                  className="bg-foreground  object-contain"
                  fill
                  src={project!.images[1]}
                  alt="e-commerce screenshot"
                />
                <div
                  className="absolute bottom-[0%] top-0  right-[0%] left-[0%] bg-foreground/75 flex flex-col text-background-alt text-center justify-center p-8 group-hover:opacity-100 opacity-0 
              transition-opacity duration-500"
                >
                  <a
                    className="hover:text-neutral-300 hover:underline underline-offset-4"
                    href={project!.github}
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    className="hover:text-neutral-300 hover:underline underline-offset-4"
                    href={project!.link}
                    target="_blank"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeOutSection>

        <FadeOutSection>
          <div className=" bg-background-alt -mx-10 md:-mx-24 px-24 pt-16 pb-24">
            <h2 className="font-serif text-4xl">Project Stack</h2>

            <ul className="mt-16 w-full mx-auto flex flex-col md:flex-row justify-between gap-12">
              {project!.stack.map((tech) => (
                <li key={tech.title}>
                  <h3 className="mb-4 text-lg font-bold">{tech.title}</h3>
                  <p className="mb-4 text-gray-700">{tech.description}</p>
                  <a
                    href={tech.link}
                    target="_blank"
                    className="group font-bold relative text-sm
                  
                  after:absolute after:w-full after:h-0.5 after:bg-black  
             after:-bottom-1 after:left-0 after:scale-x-0 
             after:transition-transform after:duration-300 after:ease-in-out 
             after:origin-bottom-right
             hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    Learn more
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </FadeOutSection>

        <section className="grid grid-cols-12 relative">
          <div className="col-span-12 md:col-span-3 md:sticky md:h-[100vh] top-0 pt-16 md:pt-72">
            <h2 className="text-3xl md:-rotate-90 md:text-7xl md:font-serif md:uppercase">
              Gallery
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-5 pt-16 md:mb-10">
            {project!.images.slice(2).map((image) => (
              <div
                key={image}
                className="relative w-full aspect-[4/3] opacity-0 animate-fade-in delay-500 group"
              >
                <Image
                  className=" object-contain"
                  fill
                  src={image}
                  alt="e-commerce screenshot"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
