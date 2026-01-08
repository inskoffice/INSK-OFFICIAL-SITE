import "./About.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="hero-card">
          <img src="/images/about.png" alt="About LokkaAds" />
        </div>

        <div>
          <h2 className="section-header">
            We create ideas & policies for your company’s future
          </h2>
          <p className="section-sub">
            Collaboration and bold thinking underpin everything we deliver.
          </p>
        </div>
      </div>
    </section>
  );
}
