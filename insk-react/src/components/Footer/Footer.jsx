import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* ================= TOP SECTION ================= */}
        <div className="footer__top">
          {/* CTA */}
          <div className="footer__cta">
            <h2 className="footer__cta-title">
              Smart investing starts here. Let’s grow together—starting today!
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* ================= LINKS ================= */}
          <div className="footer__links">
            {/* Column 1 */}
            <div className="footer__column">
              <h3 className="footer__column-title">Our Solutions</h3>
              <ul className="footer__list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/#about">About Us</Link>
                </li>
                <li>
                  <Link to="/#services">Services</Link>
                </li>
                <li>
                  <Link to="/#stats">Achievements</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="footer__column">
              <h3 className="footer__column-title">Quick Links</h3>
              <ul className="footer__list">
                <li>
                  {/* <Link to="/#team">Our Team</Link> */}
                </li>
                <li>
                  <Link to="/#contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/careers">Job Openings</Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="footer__column">
              <div className="footer__contact-item">
                <h4 className="footer__contact-title">Say hello!</h4>
                <p className="footer__contact-text">
                  INSKGroup.Official@outlook.com
                </p>
              </div>

              <div className="footer__contact-item">
                <h4 className="footer__contact-title">Location</h4>
                <p className="footer__contact-text">
                  Mireka Tower, Kirulapone, Colombo, Sri Lanka
                </p>
              </div>

              <div className="footer__contact-item">
                <h4 className="footer__contact-title">Phone Number</h4>
                <p className="footer__contact-text">+94 76 946 2754</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="footer__bottom">
          <div className="footer__socials">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/group_insk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/insk-group"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H9.5V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.13-.92 2.06-2.06 2.06zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="footer__bar">
        <div className="footer__bar-container">
          © {new Date().getFullYear()} INSK Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
