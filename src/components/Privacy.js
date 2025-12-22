import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="privacy-page">
      <div className="container">
        <motion.button
          className="back-button"
          onClick={() => navigate('/')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ x: -5 }}
        >
          <ArrowLeft size={20} />
          Back to Home
        </motion.button>

        <motion.div
          className="privacy-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Shield size={48} className="privacy-icon" />
          <h1>Privacy Policy</h1>
          <p className="privacy-meta">
            <strong>Effective Date:</strong> December 22, 2025<br />
            <strong>Owner:</strong> The Nirschl Lab, Department of Pathology and Laboratory Medicine, University of Wisconsin–Madison
          </p>
        </motion.div>

        <motion.div
          className="privacy-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <section>
            <h2>1. Overview</h2>
            <p>
              This website is intended to share non-confidential academic and research information about the Nirschl Lab. 
              We respect your privacy and are committed to protecting any information collected through this site. 
              This privacy policy explains how we handle information when you visit our website.
            </p>
          </section>

          <section>
            <h2>2. Information Collection & Use</h2>
            <h3>Personal Information</h3>
            <p>This site does <strong>not</strong> actively collect personal data unless you voluntarily submit it through:</p>
            <ul>
              <li>Contact forms</li>
              <li>Email subscription requests</li>
              <li>Direct email communication</li>
            </ul>
            
            <h3>Data Handling</h3>
            <ul>
              <li><strong>No selling or sharing:</strong> We do not sell, trade, or share your personal information with third parties for marketing purposes.</li>
              <li><strong>Limited retention:</strong> Any information you provide is stored only as long as necessary to respond to your inquiry or fulfill the purpose for which it was submitted.</li>
              <li><strong>Purpose limitation:</strong> Data collected is used solely for the specific purpose indicated at the time of collection.</li>
            </ul>
          </section>

          <section>
            <h2>3. Web Analytics</h2>
            <p>We may use web analytics services (such as Google Analytics) to understand how visitors interact with our site. These tools help us:</p>
            <ul>
              <li>Monitor website traffic and usage patterns</li>
              <li>Improve user experience and content</li>
              <li>Understand geographic distribution of visitors</li>
            </ul>
            <p><strong>Important:</strong> Analytics tools are configured to:</p>
            <ul>
              <li>Not collect personally identifiable information (PII)</li>
              <li>Anonymize IP addresses where possible</li>
              <li>Comply with applicable data protection regulations</li>
            </ul>
            <p>
              You may opt out of Google Analytics tracking by installing the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
          </section>

          <section>
            <h2>4. Cookies</h2>
            <p>This website uses minimal cookies, if any, solely for functional purposes such as:</p>
            <ul>
              <li>Maintaining session state</li>
              <li>Remembering basic preferences</li>
              <li>Supporting website performance</li>
            </ul>
            <p>
              <strong>Your control:</strong> You can disable cookies through your browser settings. 
              Please note that disabling cookies may affect some website functionality.
            </p>
          </section>

          <section>
            <h2>5. Email Communication</h2>
            <p>If you contact us via email or through a contact form:</p>
            <ul>
              <li>Your email address will be used <strong>only</strong> to respond to your inquiry</li>
              <li>We will <strong>not</strong> add you to any mailing lists without your explicit consent</li>
              <li>Your contact information will be kept confidential and secure</li>
            </ul>
          </section>

          <section>
            <h2>6. Third-Party Links</h2>
            <p>Our website may contain links to external websites, including:</p>
            <ul>
              <li>Academic publications and databases</li>
              <li>Partner institutions</li>
              <li>Research resources</li>
            </ul>
            <p>
              <strong>Disclaimer:</strong> These links are provided for convenience and do not constitute endorsement of the linked sites. 
              We are not responsible for the content, accuracy, or privacy practices of external websites. 
              We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2>7. Data Security</h2>
            <p>
              We implement reasonable security measures to protect information submitted through this website. 
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>8. Changes to This Policy</h2>
            <p>
              We reserve the right to update this privacy policy as needed to reflect changes in our practices or legal requirements. 
              Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
            </p>
          </section>
         
          <div className="privacy-footer">
            <p><em>Last updated: December 22, 2025</em></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
