"use client";

import { motion } from "framer-motion";

import Sidebar from "../components/Sidebar";

const Page = () => {
  return (
    <>
      <Sidebar navLink={{ href: "/ru", label: "На главную" }} />
      <main className="min-h-screen p-10 pt-28 md:p-24 md:pt-16 bg-background md:mt-0 relative z-10">
        <article className="flex flex-col justify-around items-center gap-16 w-full relative z-10">
          <h1 className="text-3xl animate-fade-in opacity-0 ">
            Приятно познакомиться!
          </h1>
          <div className="flex flex-col md:flex-row gap-10 justify-between w-full animate-fade-in-sl opacity-0">
            <blockquote className="flex flex-col gap-8 text-lg">
              <p className="max-w-xl ">
                Всем привет! Меня зовут
                <span className="text-rose-800 font-bold"> Диана </span>и я из
                города{" "}
                <span className="text-rose-800 font-bold"> Иркутск.</span>
                <br />
                <br />
                Мне с детства нравилось создавать сайты с помощью HTML, CSS,
                JavaScript и конструкторов. Я окончила технический университет
                ИрНИТУ и последние несколько лет я занимаюсь веб-разработкой
                главным образом на React. Мне также нравится заниматься SEO и
                оптимизацией.
                <br />
                <br />
                Помимо веб-разработки, у меня множество и других увлечений,
                например:
              </p>
              <ul className="pl-8">
                <li className="flex gap-2">
                  <img src="/images/like1.png" className="w-6 h-6" />
                  Художественная литература
                </li>
                <li className="flex gap-2">
                  <img src="/images/like1.png" className="w-6 h-6" />
                  Походы и путешествия
                </li>
                <li className="flex gap-2">
                  {" "}
                  <img src="/images/like1.png" className="w-6 h-6" />
                  Музыка
                </li>
                <li className="flex gap-2">
                  {" "}
                  <img src="/images/like1.png" className="w-6 h-6" />
                  Фотография
                </li>
                <li className="flex gap-2">
                  {" "}
                  <img src="/images/like1.png" className="w-6 h-6" />
                  Спортзал
                </li>
              </ul>
              <p>Больше всего я люблю своего пёсика Марка породы колли. </p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="font-serif text-[clamp(2rem,6vw,8rem)] leading-none italic"
              >
                — Я стараюсь, чтобы мои проекты делали интернет хотя бы чуточку
                лучше.
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
