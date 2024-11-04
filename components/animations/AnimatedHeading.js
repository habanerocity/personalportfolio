import React, { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedHeading = ({ text, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.06, // Stagger the animation of each word
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.h2
      className={className}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {text.split(' ').map((word, index) => (
        <motion.span key={index} variants={wordVariants} style={{ display: 'inline-block', marginRight: '0.25rem' }}>
          {word}{index < text.split(' ').length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default AnimatedHeading;