import "./Team.css";

export default function Team() {
  return (
    <section className="team section">
      <div className="container">
        <h2 className="section-header">Contact Our Team</h2>

        <div className="team-grid">
          <div className="t-card">
            <div className="badge"><i className="ri-user-star-line"></i></div>
            <h5>Chief Marketing Officer</h5>
            <a href="mailto:david.lim@lokkaads.com">david.lim@lokkaads.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
