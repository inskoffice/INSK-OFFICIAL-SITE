import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-dark">
      <div className="container about-wrapper">

        {/* LEFT CONTENT */}
        <div className="LeftContent animate-on-scroll fade-right">
          <div className="about-image img-reveal">
            <img src="/images/about-team.jpg" alt="About INSK" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <span className="about-tag animate-on-scroll fade-up">
            <span className="gradient-text">★ About Company</span>
          </span>

          <h2 className="animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
            Elevating Your Brand's Influence Through Bold,
            Innovative Digital Solutions
          </h2>

          <p className="about-desc animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
            INSK Group, founded in 2023, is an international digital
            solutions and media marketing organization
            headquartered in Sri Lanka, with a team of over 100
            professionals dedicated to helping businesses build strong,
            impactful, and sustainable digital presences.
          </p>

          {/* FEATURE LIST */}
          <div className="about-features">
            <div className="feature-item animate-on-scroll slide-in-left stagger-1">
              <span>✔</span>
              Driving Progress Intelligent Innovation
            </div>
            <div className="feature-item animate-on-scroll slide-in-left stagger-2">
              <span>✔</span>
              Powering Change Partnership
            </div>
            <div className="feature-item animate-on-scroll slide-in-left stagger-3">
              <span>✔</span>
              Paths to Real Success
            </div>
          </div>

          {/* CTA */}
          {/* <a href="#contact" className="btn about-btn animate-on-scroll scale-up" style={{ transitionDelay: '400ms' }}>
            More About Us
          </a> */}
        </div>

      </div>
    </section>
  );
}