import { LucideDownload } from "lucide-react";
import Cv from "./components/Cv";
import Sidebar from "../components/Sidebar";

const Page = () => {
  return (
    <>
      <Sidebar navLink={{ href: "/ru", label: "На главную" }} />
      <main className="min-h-screen p-10 pt-24 md:p-24 md:pt-16 bg-background md:mt-0 relative z-10">
        <div className="flex flex-col justify-around items-center gap-16 w-full relative z-10">
          <h1 className="text-3xl animate-fade-in opacity-0 ">Резюме</h1>
          <a
            role="button"
            className="rounded-md px-4 py-2 bg-slate-200 hover:bg-cyan-200 transition-all duration-300 flex gap-2 items-center hover:translate-y-1 hover:shadow-[0px_0px_32px_6px_rgba(83,234,253,0.63)] animate-fade-in opacity-0"
            href="/cv.pdf"
            download
          >
            <LucideDownload size={20} />
            Скачать PDF
          </a>
          <Cv />
        </div>

        <div className="inset-0 absolute bg-background-alt z-0 animate-fade-in-scale origin-top" />
      </main>
    </>
  );
};

export default Page;
