"use client";

import { motion } from "framer-motion";

import Sidebar from "../components/Sidebar";

const Page = () => {
  return (
    <>
      <Sidebar navLink={{ href: "/en", label: "Home" }} />
      <main className="min-h-screen p-10 pt-28 md:p-24 md:pt-16 bg-background md:mt-0 relative z-10">
        <article className="flex flex-col justify-around items-center gap-16 w-full relative z-10">
          <h1 className="text-3xl animate-fade-in opacity-0 ">
            Nice to meet you!
          </h1>
          <div className="flex flex-col md:flex-row gap-10 justify-between w-full animate-fade-in-sl opacity-0">
            <blockquote className="flex flex-col gap-8 text-lg">
              <p className="max-w-xl ">
                Hi everyone! My name is
                <span className="text-rose-800 font-bold"> Diana </span>and I
                come from{" "}
                <span className="text-rose-800 font-bold">
                  {" "}
                  Irkutsk, Russia.
                </span>
                <br />
                <br />
                Since I was a child, I’ve loved creating websites using HTML,
                CSS, JavaScript, and website builders. I graduated from the
                Irkutsk National Research Technical University (IRNITU), and for
                the past few years, I’ve been focusing on web development,
                primarily with React. I also enjoy working on SEO and
                optimization.
                <br />
                <br />
                Besides web development, I have many other hobbies, such as:
              </p>
              <ul className="pl-8">
                <li className="flex gap-2">
                  <img src="/images/like1.png" className="w-6 h-6" />
                  Books
                </li>
                <li className="flex gap-2">
                  <img src="/images/like1.png" className="w-6 h-6" />
                  Hiking and travelling
                </li>
                <li className="flex gap-2">
                  {" "}
                  <img src="/images/like1.png" className="w-6 h-6" />
                  Music making
                </li>
                <li className="flex gap-2">
                  {" "}
                  <img src="/images/like1.png" className="w-6 h-6" />
                  Photography
                </li>
                <li className="flex gap-2">
                  {" "}
                  <img src="/images/like1.png" className="w-6 h-6" />
                  Gym
                </li>
              </ul>
              <p>Most of all, I love my Rough Collie puppy called Mark. </p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="font-serif text-[clamp(2rem,6vw,8rem)] leading-none italic"
              >
                — Working on my projects, I strive to make the internet a
                slightly better place.
              </motion.p>
            </blockquote>
            <div>
              <img
                src="/images/about1.webp"
                alt="Диана Портрет"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </article>

        <div className="inset-0 absolute bg-background-alt z-0 animate-fade-in-scale origin-top" />
      </main>
    </>
  );
};

export default Page;
