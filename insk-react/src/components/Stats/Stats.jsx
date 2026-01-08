import "./Stats.css";

export default function Stats() {
  return (
    <section id="portfolio" className="stats section">
      <div className="container stats-grid">
        <div>
          <h2 className="section-header">
            Experience & Innovative Solutions
          </h2>

          <div className="stats-pairs">
            <div className="stat"><h3>3+</h3><p>Years Experience</p></div>
            <div className="stat"><h3>100+</h3><p>Projects</p></div>
            <div className="stat"><h3>10+</h3><p>Industries</p></div>
            <div className="stat"><h3>99%</h3><p>Satisfaction</p></div>
          </div>
        </div>

        <div className="stats-card">
          <img src="/images/portfolio.jpg" alt="Portfolio" />
        </div>
      </div>
    </section>
  );
}
