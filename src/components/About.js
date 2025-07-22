import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const stats = [
    { number: '2025', label: 'Lab Founded' },
    { number: 'AI/ML', label: 'Core Focus' },
    { number: 'WIMR', label: 'Location' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About the Lab
          </motion.h2>
          
          <div className="about-content">
            <motion.div className="about-text" variants={itemVariants}>
              <p>
                The Nirschl Lab specializes in computational neuropathology, applying artificial intelligence and machine learning techniques to advance the understanding of Alzheimer's disease and related dementias. Our interdisciplinary work bridges digital histopathology, clinical data integration, and biomarker discovery, with a strong commitment to research transparency and reproducibility.
              </p>
              <p>
                Located within the Wisconsin Institutes for Medical Research (WIMR) at the University of Wisconsin-Madison, our lab operates in an environment that fosters cross-disciplinary collaboration and innovation in computational pathology.
              </p>
            </motion.div>
            
            <motion.div className="about-stats" variants={itemVariants}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 