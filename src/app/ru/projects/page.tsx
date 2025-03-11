"use client";

import { PROJECTS_RU } from "@/lib/utils";
import Sidebar from "../components/Sidebar";

import ProjectPreview from "./components/ProjectPreview";

const Page = () => {
  return (
    <>
      <Sidebar navLink={{ href: "/ru", label: "На главную" }} />
      <main className="min-h-screen p-10 pt-24 md:p-24 md:pb-8  bg-background flex flex-col md:flex-row justify-around  gap-16 w-full md:mt-0 relative z-10">
        <aside className="flex-1 z-10 sticky bottom-8 space-y-4 animate-fade-in-up opacity-0 self-end">
          <h1 className="text-3xl md:text-4xl ">Проекты</h1>
          <p className="text-sm text-gray-700">
            Некоторые из моих последних пет- и фриланс-проектов. Эти проекты, от
            дизайна до разработки, полностью мои и позволили мне отточить навыки
            в этих облястях и поработать с самыми разнообразными инструментами.
            Иногда я знакомлюсь с новой для себя технологией, которую мне очень
            хочется испытать, и тогда я пробую инкорпорировать её в пет-проект.
          </p>
        </aside>
        <article className="flex-1 z-10 relative animate-fade-in opacity-0">
          <ul className="space-y-12">
            {PROJECTS_RU.map((project) => (
              <ProjectPreview project={project} key={project.description} />
            ))}
          </ul>
        </article>
        <div className="inset-0 absolute bg-background-alt z-0 animate-fade-in-scale origin-top" />

        {/* second section bg */}
        {/* <div className="inset-0 h-screen mt-[100vh] absolute bg-background-alt z-1 " /> */}
        {/* <div className="flex justify-around items-center gap-16 w-full md:mt-0 relative z-10"> */}

        {/* <div className="h-fit w-full flex flex-col">
            <h2 className="text-[clamp(2rem,8vw,8rem)] leading-none font-serif uppercase">
              Гомбрайх
            </h2>
            <p className="opacity-0 animate-fade-in delay-[400ms] font-serif text-xl mt-12 mb-14">
              Сайт для салона красоты с возможностью онлайн-записи + панель
              управления для админов
            </p>
            <div className="relative h-fit w-fit group">
              <Image
                className="bg-foreground"
                width={2466}
                height={1694}
                src={"/images/gombreich2.png"}
                alt="e-commerce screenshot"
              />
              <div
                className="absolute bottom-[0%] top-0 right-[0%] left-[0%] bg-foreground/75 flex flex-col text-background-alt text-center justify-center p-8 group-hover:opacity-100 opacity-0 
              transition-opacity duration-500
              "
              >
                <a
                  className="hover:text-neutral-300 hover:underline underline-offset-4"
                  href="#"
                >
                  Github
                </a>
                <a
                  className="hover:text-neutral-300 hover:underline underline-offset-4"
                  href="#"
                >
                  Live
                </a>
              </div>
            </div>
            <div className="mt-9">
              <h3 className=" text-2xl">Технологии</h3>

              <ul className="mt-8">
                <li>Next.js 14</li>
                <li>Tailwind</li>
                <li>React 18</li>
                <li>PostgreSQL</li>
                <li>TypeScript</li>
                <li>Payload CMS 3.0</li>
              </ul>
            </div>
          </div> */}
        {/* </div> */}
      </main>
    </>
  );
};

export default Page;
