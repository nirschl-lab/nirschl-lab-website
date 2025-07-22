import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Bot, BarChart3, Microscope, TrendingUp, Network } from 'lucide-react';

const Research = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const researchAreas = [
    {
      icon: <Brain size={40} />,
      title: 'Digital Histopathology',
      description: 'Developing advanced image analysis pipelines for automated quantification and classification of neuropathological features in digital histology images.'
    },
    {
      icon: <Bot size={40} />,
      title: 'Machine Learning Models',
      description: 'Creating end-to-end deep learning pipelines for classification and segmentation tasks in neurological disease diagnosis and prognosis.'
    },
    {
      icon: <BarChart3 size={40} />,
      title: 'Clinical Data Integration',
      description: 'Integrating multi-modal clinical data to develop comprehensive models for understanding disease progression and treatment response.'
    },
    {
      icon: <Microscope size={40} />,
      title: 'Biomarker Discovery',
      description: 'Identifying novel biomarkers for Alzheimer\'s disease and related dementias through computational analysis of pathological data.'
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Reproducible Research',
      description: 'Promoting open science and reproducibility through transparent methodologies and open-source tool development.'
    },
    {
      icon: <Network size={40} />,
      title: 'Cross-disciplinary Collaboration',
      description: 'Fostering partnerships across neuroscience, pathology, computer science, and clinical medicine to advance the field.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="research" className="section section-alt">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={cardVariants}>
            Research Areas
          </motion.h2>
          
          <div className="research-grid">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="research-card"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="research-icon"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {area.icon}
                </motion.div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research; 