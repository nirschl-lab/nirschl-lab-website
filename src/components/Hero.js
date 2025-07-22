import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Cpu } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background banner image overlay */}
      <div className="hero-banner-overlay">
        <img 
          src="/assets/nirschl-lab-banner.jpg" 
          alt="Computational Neuropathology Banner"
          className="hero-banner-image"
          onError={(e) => {
            // Fallback if image not found
            e.target.style.display = 'none';
          }}
        />
      </div>
      
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Computational Neuropathology
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Advancing the understanding of Alzheimer's disease and related dementias through artificial intelligence and machine learning
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('#research')}
            >
              Our Research
              <ArrowRight size={20} />
            </button>
            <button
              className="btn btn-secondary-hero"
              onClick={() => scrollToSection('#publications')}
            >
              Publications
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="visual-container">
            {/* Floating brain icon */}
            <motion.div
              className="brain-icon"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Brain size={120} />
            </motion.div>
            
            {/* Floating CPU icon */}
            <motion.div
              className="cpu-icon"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, -5, 5, 0],
                y: [0, 8, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Cpu size={80} />
            </motion.div>
            
            {/* Neural network visualization */}
            <div className="neural-network">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="node"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    delay: i * 0.2, 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              ))}
              
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="connection"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ 
                    opacity: [0.6, 1, 0.6], 
                    scaleX: 1 
                  }}
                  transition={{ 
                    delay: 0.8 + i * 0.1, 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              ))}
            </div>

            {/* Pulsing data points */}
            <div className="data-points">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="data-point"
                  style={{
                    position: 'absolute',
                    left: `${20 + (i % 4) * 20}%`,
                    top: `${15 + Math.floor(i / 4) * 25}%`,
                  }}
                  animate={{
                    scale: [0.5, 1, 0.5],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.15,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Animated particles */}
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 6,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero; 