import "./Careers.css";

export default function CareersHero() {
  return (
    <section className="careers-hero">
      <div className="overlay"></div> {/* Optional overlay for better text readability */}
      <div className="container">

        <div className="testimonials__badge">
            Careers at INSK
          </div>

        <h1>
          Build Your Career With
          <span className="gradient-text"> Global Opportunities</span>
        </h1>

          Join INSK and shape the future with a team that values innovation,
          collaboration, and growth. Discover opportunities that span across
          borders and make an impact worldwide.
          
        <div>
          <br />
          <a href="#careerssection" className="cta-button">
            View Open Positions
          </a>
        </div>
        
      </div>
    </section>
  );
}
