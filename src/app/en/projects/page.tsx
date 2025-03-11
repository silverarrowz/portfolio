"use client";

import { PROJECTS_EN } from "@/lib/utils";
import Sidebar from "../components/Sidebar";

import ProjectPreview from "./components/ProjectPreview";

const Page = () => {
  return (
    <>
      <Sidebar navLink={{ href: "/en", label: "Home" }} />
      <main className="min-h-screen p-10 pt-24 md:p-24 md:pb-8  bg-background flex flex-col md:flex-row justify-around  gap-16 w-full md:mt-0 relative z-10">
        <aside className="flex-1 z-10 sticky bottom-8 space-y-4 animate-fade-in-up opacity-0 self-end">
          <h1 className="text-3xl md:text-4xl ">Projects</h1>
          <p className="text-sm text-gray-700">
            Here are some of my latest pet and freelance projects. From design
            to development, these projects are entirely my own, allowing me to
            refine my skills in these areas and work with a variety of tools.
            Every now and then I come across a new technology that I’m eager to
            try, and I incorporate it into a pet project.
          </p>
        </aside>
        <article className="flex-1 z-10 relative animate-fade-in opacity-0">
          <ul className="space-y-12">
            {PROJECTS_EN.map((project) => (
              <ProjectPreview project={project} key={project.description} />
            ))}
          </ul>
        </article>
        <div className="inset-0 absolute bg-background-alt z-0 animate-fade-in-scale origin-top" />
      </main>
    </>
  );
};

export default Page;
