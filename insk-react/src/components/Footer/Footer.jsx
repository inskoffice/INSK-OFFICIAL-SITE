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

          </div>
        </div>

        {/* Bottom Section: Contact Info + Socials */}
        <div className="footer__bottom">
          <div className="footer__contact">
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
          </div>

          <div className="footer__socials">
            <a href="#twitter" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#facebook" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#instagram" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="#1a1a1a" strokeWidth="2" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#1a1a1a" strokeWidth="2" />
              </svg>
            </a>
            <a href="#pinterest" aria-label="Pinterest">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.26 2.67 7.9 6.43 9.36-.09-.79-.17-2.01.04-2.87.18-.78 1.18-5.01 1.18-5.01s-.3-.61-.3-1.51c0-1.41.82-2.47 1.84-2.47.87 0 1.29.65 1.29 1.43 0 .87-.55 2.17-.84 3.37-.24 1.01.51 1.84 1.51 1.84 1.81 0 3.21-1.91 3.21-4.66 0-2.44-1.75-4.14-4.26-4.14-2.9 0-4.6 2.17-4.6 4.42 0 .88.34 1.82.76 2.33.08.1.09.19.07.29-.08.31-.25 1.02-.28 1.16-.04.19-.14.23-.33.14-1.27-.59-2.07-2.45-2.07-3.94 0-3.21 2.33-6.15 6.72-6.15 3.53 0 6.27 2.52 6.27 5.87 0 3.5-2.21 6.32-5.28 6.32-1.03 0-2-.54-2.33-1.17 0 0-.51 1.95-.63 2.43-.23.88-.85 1.98-1.27 2.65.96.3 1.98.46 3.04.46 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
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