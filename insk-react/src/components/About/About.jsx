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
            INSK delivers transformative digital experiences that captivate
            audiences. Our solutions are not only visually compelling but
            strategically engineered for growth.
          </p>

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
