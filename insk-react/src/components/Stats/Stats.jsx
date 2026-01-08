import "./Stats.css";

export default function Stats() {
  return (
    <section className="stats-premium">
      <div className="container stats-wrapper">

        {/* LEFT CONTENT */}
        <div className="stats-left">
          <span className="stats-tag">★ INSK Success</span>

          <h2>
            Expert-Led Strategies <br />
            Driving Online Success
          </h2>

          <div className="stats-years">
            <span className="stats-years-num">10+</span>
            <span className="stats-years-text">
              Years of Experience <br />
              Delivering Quality Solutions
            </span>
          </div>

          <img
            src="/images/trophy.png"
            alt="INSK Awards"
            className="stats-trophy"
          />
        </div>

        {/* RIGHT GRID */}
        <div className="stats-right">
          <div className="stats-card">
            <div className="stats-icon">
              <i className="ri-briefcase-4-line"></i>
            </div>
            <h3>300+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="stats-card">
            <div className="stats-icon">
              <i className="ri-line-chart-line"></i>
            </div>
            <h3>95%</h3>
            <p>Client Success Rate</p>
          </div>

          <div className="stats-card">
            <div className="stats-icon">
              <i className="ri-team-line"></i>
            </div>
            <h3>65+</h3>
            <p>Expert Members</p>
          </div>

          <div className="stats-card">
            <div className="stats-icon">
              <i className="ri-shield-check-line"></i>
            </div>
            <h3>28K+</h3>
            <p>Trusted Clients</p>
          </div>
        </div>


      </div>
    </section>
  );
}
