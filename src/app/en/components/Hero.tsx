"use client";

import { motion } from "framer-motion";
import { FaGithub, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const navVariants = {
    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.4,
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
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      x: 0,
    },
  };

  const NAV_LINKS = [
    {
      label: "CV",
      href: "en/cv",
      index: 0,
    },
    {
      label: "Projects",
      href: "en/projects",
      index: 1,
    },
    {
      label: "About me",
      href: "en/about",
      index: 2,
    },
    {
      label: "Contact",
      href: "en/contact",
      index: 3,
    },
  ];

  return (
    <div className="h-full flex flex-col md:flex-row items-center justify-between gap-20 max-w-6xl w-full mx-auto">
      <div className="flex flex-col gap-3 max-w-full md:max-w-[460px] animate-fade-in opacity-0">
        <h1 className="text-3xl xl:text-4xl tracking-wider ">
          Diana Karmadonova
        </h1>
        <h2 className="text-gray-700">Frontend Developer</h2>
        <p className="text-sm text-gray-700">
          Hi! I’m Diana, and web development is something I truly enjoy. I love
          creating beautiful and user-friendly interfaces using React and my
          favorite framework, Next.js. Every day, I explore new techniques and
          technologies to become more professional and efficient in my field of
          work.
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
              transition={{ duration: 0.3, ease: "easeOut" }}
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
