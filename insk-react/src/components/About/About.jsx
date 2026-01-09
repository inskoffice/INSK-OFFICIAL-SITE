import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-dark">
      <div className="container about-wrapper">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src="/images/about-team.jpg" alt="About INSK" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <span className="about-tag"><span className="gradient-text">★ About Company</span></span>

          <h2>
            Elevating Your Brand’s Influence Through Bold,
            Innovative Digital Solutions
          </h2>

          <p className="about-desc">
            INSK Group, founded in 2023, is an international digital
            solutions and media marketing organization
            headquartered in Sri Lanka, with a team of over 100
            professionals dedicated to helping businesses build strong,
            impactful, and sustainable digital presences. 
          </p>

          {/* <p className="about-desc">
            We collaborate
            with brands across diverse industries to transform ideas into
            meaningful digital experiences through creativity, advanced
            technology, and strategic thinking, while delivering
            measurable results with a strong focus on clarity, quality,
            and long-term value—empowering our clients to grow,
            adapt, and succeed in an ever-evolving digital landscape.
          </p> */}

          {/* FEATURE LIST */}
          <div className="about-features">
            <div className="feature-item">
              <span>✔</span>
              Driving Progress Intelligent Innovation
            </div>
            <div className="feature-item">
              <span>✔</span>
              Powering Change Partnership
            </div>
            <div className="feature-item">
              <span>✔</span>
              Paths to Real Success
            </div>
          </div>

          {/* CTA */}
          {/* <a href="#contact" className="btn about-btn">
            More About Us
          </a> */}
        </div>

      </div>
    </section>
  );
}
