import { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const parallaxRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // Parallax effect for hero image
    const handleScroll = () => {
      if (!parallaxRef.current || !heroRef.current) return;
      
      const scrolled = window.pageYOffset;
      const heroRect = heroRef.current.getBoundingClientRect();
      const heroTop = heroRect.top + scrolled;
      
      // Only apply parallax when hero is in viewport
      if (scrolled < heroTop + heroRect.height) {
        const yPos = scrolled * 0.3; // Parallax speed
        parallaxRef.current.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Trigger animations on mount
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.hero .animate-on-scroll');
      elements.forEach(el => el.classList.add('is-visible'));
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <header id="home" className="hero section hero-parallax" ref={heroRef}>
      {/* Floating gradient orbs for visual interest */}
      <div className="hero-bg-orbs">
        <div className="orb orb-1 float"></div>
        <div className="orb orb-2 float-delayed"></div>
      </div>

      <div className="container hero-grid">
        <div className="hero-content">
          <span className="chip animate-on-scroll fade-down">
            {/* Creative • Data-Driven • Reliable */}
          </span>

          <h1 className="animate-on-scroll fade-up">
            Building <span className="gradient-text gradient-animated">Digital Products</span>, Brands &
            Experiences
          </h1>

          <p className="hero-p animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
            We are an international Digital marketing and promotion company specializing in helping businesses, brands, and individuals grow their digital presence across global platforms. 
            INSK Group operates in a highly professional, structured, and performance-oriented environment.
          </p>

          <div className="hero-cta animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
            <a className="btn ripple-effect" href="https://wa.me/94760685652">
              Contact Us Now
            </a>
            <a className="btn1" href="#services">
              Learn more About Us
            </a>
          </div>

          {/* Trust indicators with counter animation */}
          <div className="hero-stats animate-on-scroll fade-up" style={{ transitionDelay: '300ms' }}>
            <div className="stat-item">
              <span className="stat-number counter">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number counter">500+</span>
              <span className="stat-label">Projects Done</span>
            </div>
            <div className="stat-item">
              <span className="stat-number counter">250+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>

        <div className="hero-img-wrapper animate-on-scroll fade-left" style={{ transitionDelay: '150ms' }}>
          <div className="hero-img hero-card img-reveal" ref={parallaxRef}>
            <img src="/images/head1.png" alt="Creative workspace" />
            
            {/* Floating badge */}
            <div className="hero-badge float">
              <div className="badge-icon">⭐</div>
              <div className="badge-text">
                <strong>Top Rated</strong>
                <span>Digital Agency</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </header>
  );
}