'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delay = 0.1, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 60,
      }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
