"use client";

import { ReactNode } from "react";
import { Variants, motion } from "framer-motion";

const transitionVariants: Variants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      exit="exit"
      initial="initial"
      animate="animate"
      variants={transitionVariants}
      transition={{
        delay: 0.2,
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="fixed top-0 bottom-0 right-full h-screen z-30 bg-[#2e2257] w-screen"
    >
      {children}
    </motion.div>
  );
}
