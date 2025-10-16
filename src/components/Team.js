import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, GraduationCap, Users } from 'lucide-react';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

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
    <section id="team" className="section section-alt">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Team
          </motion.h2>
          
          <div className="team-grid">
            <motion.div
              className="team-member"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
                            <div className="member-photo">
                <img 
                  src="/assets/jeff_headshoot.jpg" 
                  alt="Dr. Jeff Nirschl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="placeholder-photo"><Users size={60} /></div>';
                  }}
                />
              </div>
              <div className="member-info">
                <h3>Dr. Jeff Nirschl</h3>
                <p className="member-title">Principal Investigator</p>
                <p className="member-affiliation">
                  Assistant Professor of Neuropathology<br />
                  University of Wisconsin-Madison
                </p>
                <div className="member-bio">
                  <p>
                    Dr. Nirschl is a physician-scientist and computational researcher with expertise in bioinformatics, computer vision, and healthcare. He completed his M.D./Ph.D. at the University of Pennsylvania and trained in neuropathology at Stanford University.
                  </p>
                  <p>
                    His research focuses on developing AI/ML approaches for digital pathology, with particular emphasis on neurodegenerative diseases and cardiac pathology.
                  </p>
                </div>
                <div className="member-links">
                  <motion.a
                    href="mailto:jjnirschl@wisc.edu"
                    className="member-link email-image-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail size={18} />
                    <img 
                      src="/assets/email.png" 
                      alt="Email address" 
                      className="email-image"
                      style={{ height: '18px', marginLeft: '4px' }}
                    />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/jeff-nirschl-56700918/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="member-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </motion.a>
                  <motion.a
                    href="https://scholar.google.com/citations?user=AJJwTxoAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="member-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <GraduationCap size={18} />
                    Google Scholar
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div className="team-footer" variants={itemVariants}>
            <div className="join-lab">
              <motion.div
                className="join-content"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Join Our Team</h3>
                <p>
                  We are always looking for talented individuals to join our interdisciplinary research team. 
                  Opportunities exist for postdoctoral researchers, graduate students, and undergraduate researchers 
                  interested in computational neuropathology and AI/ML applications in healthcare.
                </p>
                <div className="join-opportunities">
                  <div className="opportunity">
                    <strong>Postdoctoral Fellows</strong>
                    <p>Background in computer science, biomedical engineering, or related field</p>
                  </div>
                  <div className="opportunity">
                    <strong>Graduate Students</strong>
                    <p>Ph.D. and M.S. positions available in computational pathology</p>
                  </div>
                  <div className="opportunity">
                    <strong>Undergraduate Researchers</strong>
                    <p>Research opportunities for motivated students</p>
                  </div>
                </div>
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const contactSection = document.querySelector('#contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Mail size={20} />
                  Contact Us
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;