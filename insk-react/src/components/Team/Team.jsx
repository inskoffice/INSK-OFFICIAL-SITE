
import React, { useState } from 'react';
import "./Team.css";



export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    // Clear submit status when user modifies form
    if (submitStatus) {
      setSubmitStatus('');
    }
  };

  const isFormValid = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter a name';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter an email';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      setSubmitStatus('error');
      return;
    }
    
    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:inskoffice@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
      setSubmitStatus('');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-container">
          <div className="contact-left">
            <h2>Contact Us</h2>

            <h3>Feel free to ask <span className="gradient-text">anything, anytime.</span> <br></br> Just Contact</h3>

            <div className="contact-info">
  <a href="mailto:inskoffice@gmail.com" className="contact-email">
    <i className="ri-mail-line"></i>
    inskoffice@gmail.com
  </a>
  <a href="tel:+94760685652" className="contact-phone">
    <i className="ri-phone-line"></i>
    +94 760685652
  </a>
</div>
          </div>

          <div className="contact-right">
            <div className="contact-form">
              <div className="form-wrapper">
                <div className="form-row">
                  <div className="form-group">
                    <label>Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                    />
{errors.name && <span className="error-text-inline">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <div className="input-wrapper">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                      />
                      {errors.email && <span className="error-text-inline">{errors.email}</span>}
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group full-width">
                    <label>Subject</label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Your Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={errors.subject ? 'error' : ''}
                      />
                      {errors.subject && <span className="error-text-inline">{errors.subject}</span>}
                    </div>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                {errors.message && <span className="error-text-inline">{errors.message}</span>}                </div>
              </div>

              <div className="button-container">
                <button 
                  onClick={handleSubmit} 
                  className="submit-btn"
                >
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}