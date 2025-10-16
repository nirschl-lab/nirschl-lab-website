import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Using Formspree for form submission
      // You need to replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus('Message sent successfully! We\'ll get back to you soon.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('Failed to send message. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Contact
          </motion.h2>
          
          <div className="contact-grid">
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Lab Information</h3>
              
              <div className="contact-item">
                <MapPin size={20} />
                <div>
                  <strong>Address:</strong><br />
                  Wisconsin Institutes for Medical Research (WIMR)<br />
                  University of Wisconsin-Madison<br />
                  Madison, WI 53705
                </div>
              </div>
              
              <div className="contact-item">
                <Mail size={20} />
                <div>
                  <strong>Principal Investigator:</strong><br />
                  Dr. Jeff Nirschl<br />
                  Assistant Professor of Neuropathology
                </div>
              </div>
              
              <div className="contact-item">
                <Send size={20} />
                <div>
                  <strong>Email:</strong><br />
                  <img 
                    src="/assets/email.png" 
                    alt="Email address" 
                    className="email-image"
                    style={{ height: '18px', verticalAlign: 'middle', display: 'inline-block' }}
                  />
                </div>
              </div>

              <div className="contact-item">
                <Phone size={20} />
                <div>
                  <strong>Phone:</strong><br />
                  <a href="tel:+1-608-263-8443">+1 (608) 263-8443</a>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="contact-form" variants={itemVariants}>
              <h3>Get in Touch</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  ></textarea>
                </div>
                
                {submitStatus && (
                  <div className={`form-status ${submitStatus.includes('successfully') ? 'success' : 'error'}`}>
                    {submitStatus}
                  </div>
                )}
                
                <motion.button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
          
          <motion.div className="contact-map" variants={itemVariants}>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.1506503524473!2d-89.42034878450436!3d43.07344257914684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8807acc6b2a6f9b5%3A0x2b8c4f9e9e6e0b8e!2sWisconsin%20Institutes%20for%20Medical%20Research!5e0!3m2!1sen!2sus!4v1647884400000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WIMR Location"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 