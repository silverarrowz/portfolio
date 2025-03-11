import { FaGithub, FaTelegram, FaWhatsapp } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const Page = () => {
  return (
    <>
      <Sidebar navLink={{ href: "/en", label: "Home" }} />
      <main className="min-h-screen p-10 pt-28 md:p-24 md:pt-16 bg-background md:mt-0 relative z-10">
        <article className="space-y-5 p-0 relative z-10 md:p-10">
          <h1 className="text-[12vw] uppercase leading-[0.95em] md:text-[7vw]">
            Contact
          </h1>
          <div>
            <h2 className="">
              If you have any questions, feel free to write me anytime:
            </h2>
          </div>

          <div className="space-y-2 pb-6">
            <p className="text-sm">
              E-mail:{" "}
              <a href="mailto:karmadonowa.d@yandex.ru" className="">
                karmadonowa.d@yandex.ru
              </a>
            </p>
            <p className="text-sm">
              Phone:{" "}
              <a href="tel:7-983-402-15-17" className="">
                +7 (983) 402 15 17
              </a>
            </p>
            <div className="border-b w-48 my-4" />
            <div className="flex gap-4 mb-6">
              {" "}
              <a
                target="_blank"
                href="https://t.me/frzy_fr"
                className="hover:text-cyan-300 transition-colors duration-200"
              >
                <FaTelegram size={28} />
              </a>
              <a
                target="_blank"
                href="https://wa.me/79834021517"
                className="hover:text-cyan-300 transition-colors duration-200"
              >
                <FaWhatsapp size={28} />
              </a>
              <a
                href="https://github.com/silverarrowz"
                target="_blank"
                className="hover:text-cyan-300 transition-colors duration-200"
              >
                <FaGithub size={28} />
              </a>
            </div>

            <a
              href="/cv1.pdf"
              download
              className="text-sm underline transition-colors duration-200 hover:text-cyan-300"
            >
              Download my CV
            </a>
          </div>
        </article>
        <div className="inset-0 absolute bg-background-alt z-0 animate-fade-in-scale origin-top" />
      </main>
    </>
  );
};

export default Page;
