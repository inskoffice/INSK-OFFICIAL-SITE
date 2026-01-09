import { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="container nav-wrap">
        {/* LOGO */}
        <a href="/" className="logo">
          <img src="/images/insk-1.png" alt="INSK Logo" />
        </a>

        {/* MOBILE WHATSAPP BUTTON (outside dropdown) */}
        <a className="mobile-whatsapp-btn btn1" href="https://wa.me/94760685652">
          <i className="ri-whatsapp-line" style={{ color: '#25D366' }}></i> Let's Talk
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
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>

          <Link to="/#services" onClick={() => setOpen(false)}>
            Services
          </Link>

          <Link to="/#about" onClick={() => setOpen(false)}>
            About Us
          </Link>

          <Link to="/#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <Link to="/careers" onClick={() => setOpen(false)}>
            Careers
          </Link>

          {/* MOBILE CTA */}
          <div className="mobile-cta">
            <Link to="/#services" className="btn" onClick={() => setOpen(false)}>
              All Our Services
            </Link>
          </div>
        </div>

        {/* DESKTOP CTA */}
        <div className="nav-cta">
          <a className="btn1" href="https://wa.me/94760685652">
            <i className="ri-whatsapp-line" style={{ color: '#25D366' }}></i> Let's Talk
          </a>
          <a className="btn" href="#services">
            All Our Services
          </a>
        </div>
      </div>
    </nav>
  );
}