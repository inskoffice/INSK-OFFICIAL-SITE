import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="container nav-wrap">
        {/* LOGO */}
        <a href="#home" className="logo">
          <img src="/images/insk-1.png" alt="INSK Logo" />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <i className={open ? "ri-close-line" : "ri-menu-line"}></i>
        </button>

        {/* NAV LINKS */}
        <div className={`nav-links ${open ? "show" : ""}`}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#about" onClick={() => setOpen(false)}>About Us</a>
          <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
          <a href="#client" onClick={() => setOpen(false)}>Client</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          {/* MOBILE CTA */}
          <div className="mobile-cta">
            <a className="btn1" href="https://wa.me/94760685652">
              <i className="ri-whatsapp-line"></i> Let's Talk
            </a>
            <a className="btn" href="#services">
              All Our Services
            </a>
          </div>
        </div>

        {/* DESKTOP CTA */}
        <div className="nav-cta">
          <a className="btn1" href="https://wa.me/94760685652">
            <i className="ri-whatsapp-line"></i> Let's Talk
          </a>
          <a className="btn" href="#services">
            All Our Services
          </a>
        </div>
      </div>
    </nav>
  );
}
