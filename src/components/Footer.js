import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Research', href: '#research' },
    { name: 'Publications', href: '#publications' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <Brain size={32} />
              <h4>Nirschl Lab</h4>
            </div>
            <p>Computational Neuropathology Research</p>
            <p className="footer-tagline">
              Advancing understanding of neurodegenerative diseases through artificial intelligence
            </p>
          </motion.div>
          
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>University</h4>
            <p>
              <a 
                href="https://www.wisc.edu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="external-link"
              >
                University of Wisconsin-Madison
                <ExternalLink size={14} />
              </a>
            </p>
            <p>
              <a 
                href="https://www.wimr.wisc.edu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="external-link"
              >
                Wisconsin Institutes for Medical Research
                <ExternalLink size={14} />
              </a>
            </p>
          </motion.div>
          
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Research Focus</h4>
            <ul className="research-list">
              <li>Alzheimer's Disease</li>
              <li>Digital Pathology</li>
              <li>Machine Learning</li>
              <li>Computer Vision</li>
              <li>Biomarker Discovery</li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>&copy; 2025 Nirschl Lab. All rights reserved.</p>
            <div className="footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Use</a>
              <a href="#contact" onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}>Contact</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 