import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';

const Publications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const publications = [
    {
      year: '2026',
      title: 'Uncertainty-Aware Image Classification In Biomedical Imaging Using Spectral-normalized Neural Gaussian Processes',
      authors: 'Uma Meleti, Jeffrey J. Nirschl',
      journal: 'arXiv',
      citations: 0,
      links: [
        { type: 'arXiv', url: 'https://arxiv.org/abs/2602.02370' }
      ]
    },
    
    {
      year: '2026',
      title: 'iSight: Towards expert-AI co-assessment for improved immunohistochemistry staining interpretation',
      authors: 'Jacob S. Leiby, Jialu Yao, Pan Lu, George Hu, Anna Davidian, Shunsuke Koga, Olivia Leung, Pravin Patel, Isabella Tondi Resta, Rebecca Rojansky, Derek Sung, Eric Yang, Paul J. Zhang, Emma Lundberg, Dokyoon Kim, Serena Yeung-Levy, James Zou, Thomas Montine, Jeffrey Nirschl, Zhi Huang',
      journal: 'arXiv',
      citations: 0,
      links: [
        { type: 'arXiv', url: 'https://arxiv.org/abs/2602.04063' }
      ]
    },

    {
      year: '2023',
      title: 'Deep learning for medical image analysis',
      authors: 'S.K. Zhou, H. Greenspan, D. Shen',
      journal: 'Academic Press',
      citations: 417,
      links: [
        { type: 'Google Books', url: 'https://books.google.com/books?hl=en&lr=&id=OYXOEAAAQBAJ&oi=fnd&pg=PP1&dq=info:IqhnzdIrqKIJ:scholar.google.com&ots=OiuoDzHsGB&sig=VcZSy2pyGOQWQV6bDqHulKj4Oho#v=onepage&q&f=false' }
      ]
    },
    {
      year: '2017',
      title: 'Amyotrophic lateral sclerosis-linked mutations increase the viscosity of liquid-like TDP-43 RNP granules in neurons',
      authors: 'P.P. Gopal, J.J. Nirschl, E. Klinman, E.L.F. Holzbaur',
      journal: 'Proceedings of the National Academy of Sciences',
      citations: 275,
      links: [
        { type: 'PNAS', url: 'https://www.pnas.org/doi/abs/10.1073/pnas.1614462114' }
      ]
    },
    {
      year: '2014',
      title: 'LC3 binding to the scaffolding protein JIP1 regulates processive dynein-driven transport of autophagosomes',
      authors: 'M. Fu, J.J. Nirschl, E.L.F. Holzbaur',
      journal: 'Developmental Cell',
      citations: 236,
      links: [
        { type: 'Cell', url: 'https://www.cell.com/article/S1534-5807(14)00235-4/fulltext' }
      ]
    },
    {
      year: '2021',
      title: 'Actin cables and comet tails organize mitochondrial networks in mitosis',
      authors: 'A.S. Moore, S.M. Coscia, C.L. Simpson, F.E. Ortega, E.C. Wait, J.M. Heddleston, ...',
      journal: 'Nature',
      citations: 150,
      links: [
        { type: 'Nature', url: 'https://www.nature.com/articles/s41586-021-03309-5' }
      ]
    },
    {
      year: '2017',
      title: 'The impact of cytoskeletal organization on the local regulation of neuronal transport',
      authors: 'J.J. Nirschl, A.E. Ghiretti, E.L.F. Holzbaur',
      journal: 'Nature Reviews Neuroscience',
      citations: 115,
      links: [
        { type: 'Nature', url: 'https://www.nature.com/articles/nrn.2017.100' }
      ]
    },
    {
      year: '2025',
      title: 'A vision–language foundation model for precision oncology',
      authors: 'J. Xiang, X. Wang, X. Zhang, Y. Xi, F. Eweje, Y. Chen, Y. Li, C. Bergstrom, ...',
      journal: 'Nature',
      citations: 58,
      links: [
        { type: 'Google Scholar', url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=AJJwTxoAAAAJ&citation_for_view=AJJwTxoAAAAJ:maZDTaKrznsC' }
      ]
    },
    {
      year: '2025',
      title: 'A pathologist–AI collaboration framework for enhancing diagnostic accuracies and efficiencies',
      authors: 'Z. Huang, E. Yang, J. Shen, D. Gratzinger, F. Eyerer, B. Liang, J. Nirschl, ...',
      journal: 'Nature Biomedical Engineering',
      citations: 22,
      links: [
        { type: 'Nature', url: 'https://www.nature.com/articles/s41551-024-01223-5' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="publications" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Recent Publications
          </motion.h2>
          
          <div className="publications-container">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                className="publication-item"
                variants={itemVariants}
                whileHover={{ 
                  x: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="publication-year">{pub.year}</div>
                <div className="publication-content">
                  <h3>{pub.title}</h3>
                  <p className="publication-authors">{pub.authors}</p>
                  <p className="publication-journal">
                    {pub.journal}
                    {pub.citations && (
                      <span className="citation-count"> • {pub.citations} citations</span>
                    )}
                  </p>
                  <div className="publication-links">
                    {pub.links.map((link, linkIndex) => (
                      <motion.a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="publication-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        {link.type}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="publications-footer"
            variants={itemVariants}
          >
            <motion.a
              href="https://scholar.google.com/citations?user=AJJwTxoAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={20} />
              View All Publications
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications; 