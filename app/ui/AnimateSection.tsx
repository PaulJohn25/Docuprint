"use client";

import { motion } from "motion/react";
import React from "react";

interface AnimateSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimateSection = ({ children, className }: AnimateSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimateSection;
