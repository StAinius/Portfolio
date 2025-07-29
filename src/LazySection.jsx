import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LazySection = ({ children, direction = 'left' }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const variants = {
    hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <div ref={ref} style={{ minHeight: '200px', margin: '2rem 0' }}>
      {visible && (
        <motion.div initial="hidden" animate="visible" variants={variants}>
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default LazySection;
