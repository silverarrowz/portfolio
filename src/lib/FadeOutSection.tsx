"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FadeOutSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.9]);
  const translateY = useTransform(scrollYProgress, [0.5, 1], [0, -10]);

  return (
    <motion.section
      className=""
      ref={ref}
      style={{ opacity, scale, y: translateY }}
    >
      {children}
    </motion.section>
  );
};

export default FadeOutSection;
