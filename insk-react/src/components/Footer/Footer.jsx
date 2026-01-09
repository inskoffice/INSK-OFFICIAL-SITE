import React, { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Top Section: CTA + Links */}
        <div className="footer__top">
          {/* CTA Section - Left */}
          <div className="footer__cta">
            <h2 className="footer__cta-title">
              Smart investing starts here. Let's grow together—starting today!
            </h2>
            <div className="footer__subscribe">
              <input
                type="email"
                placeholder="Your Email address"
                className="footer__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleSubmit} className="footer__submit">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Links Grid - Right */}
          <div className="footer__links">
            
            <div className="footer__column">
              <h3 className="footer__column-title">Our Solutions</h3>
              <ul className="footer__list">
                <li><a href="#services">Product Design</a></li>
                <li><a href="#services">Digital Marketing</a></li>
                <li><a href="#services">Web Design</a></li>
                <li><a href="#services">Strategic Advisory</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__column-title">Quick Link</h3>
              <ul className="footer__list">
                <li><a href="#about">About Us</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <div className="footer__contact-item">
                <h4 className="footer__contact-title">Say hello!</h4>
                <p className="footer__contact-text">INSKGroup.Official@outlook.com</p>
              </div>

              <div className="footer__contact-item">
                <h4 className="footer__contact-title">Location</h4>
                <p className="footer__contact-text">Mireka Tower, Kirulapone, Colombo, Western 00500, LK</p>
              </div>

              <div className="footer__contact-item">
                <h4 className="footer__contact-title">Phone Number</h4>
                <p className="footer__contact-text">+94 76 946 2754</p>
              </div> 
            </div>

          </div>
        </div>

        {/* Bottom Section: Contact Info + Socials */}
        <div className="footer__bottom">
          {/* <div className="footer__contact">
            <div className="footer__contact-item">
              <h4 className="footer__contact-title">Say hello!</h4>
              <p className="footer__contact-text">inskoffice@gmail.com</p>
            </div>

            <div className="footer__contact-item">
              <h4 className="footer__contact-title">Location</h4>
              <p className="footer__contact-text">Mireka Tower, Kirulapone, Colombo, Western 00500, LK</p>
            </div>

            <div className="footer__contact-item">
              <h4 className="footer__contact-title">Phone Number</h4>
              <p className="footer__contact-text">+94 760685652</p>
            </div>
          </div> */}

          <div className="footer__socials">
            {/* <a href="#twitter" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a> */}
            {/* <a href="#facebook" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a> */}
            <a href="https://www.instagram.com/group_insk?igsh=cXF5aWNneDlra2Fs&utm_source=ig_contact_invite" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="#1a1a1a" strokeWidth="2" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#1a1a1a" strokeWidth="2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/insk-group/services/request-proposal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H9.5V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.13-.92 2.06-2.06 2.06zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"/>
              </svg>
            </a>

          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer__bar">
        <div className="footer__bar-container">
          © Copyright 2025 by INSK Group
        </div>
      </div>
    </footer>
  );
}