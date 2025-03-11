"use client";

import { motion } from "framer-motion";
import { FaGithub, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const navVariants = {
    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.07,
        delayChildren: 1.3,
        delay: 0.8,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const itemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        y: { stiffness: 1000, velocity: 100 },
      },
    },
    hidden: {
      opacity: 0,
      y: 90,
      x: 0,
    },
  };

  const NAV_LINKS = [
    {
      label: "Проекты",
      href: "/ru/projects",
      index: 0,
    },
    {
      label: "Резюме",
      href: "/ru/cv",
      index: 1,
    },
    {
      label: "Обо мне",
      href: "/ru/about",
      index: 2,
    },
    {
      label: "Контакты",
      href: "/ru/contact",
      index: 3,
    },
  ];

  return (
    <div className="h-full flex flex-col md:flex-row items-center justify-between gap-20 max-w-6xl w-full mx-auto">
      <div className="flex flex-col gap-3 max-w-full md:max-w-[460px] animate-fade-in opacity-0">
        <h1 className="text-3xl xl:text-4xl tracking-wider ">
          Диана Кармадонова
        </h1>
        <h2 className="text-gray-700">Фронтенд-разработчик</h2>
        <p className="text-sm text-gray-700">
          Привет! Я Диана и веб-разработка - это то, чем мне по-настоящему
          нравится заниматься. Я люблю создавать красивые и удобные интерфейсы с
          помощью React и моего любимого фреймворка Next.js и каждый день изучаю
          новые приёмы и технологии, чтобы становиться всё профессиональнее и
          эффективнее в своём деле.
        </p>
        <div className="border-b w-48 my-4" />
        <div className="flex gap-4 ">
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
      </div>

      <div className="shrink-0">
        <motion.ul
          variants={navVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="font-serif uppercase "
        >
          {NAV_LINKS.map((link) => (
            <motion.li
              variants={itemVariants}
              whileHover={{
                x: 35,
                skewX: -12,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={``}
              key={link.label}
            >
              <a
                className="text-[clamp(2rem,14vw,9rem)] md:text-[clamp(2rem,9vw,9rem)] leading-none"
                href={link.href}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Hero;
