import type { ReactNode } from 'react';
import { motion as Motion } from 'framer-motion'

const animationConfiguration = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
};

type PageTransitionProps = {
    children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <Motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </Motion.div>
  )
}

export default PageTransition