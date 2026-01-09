import "./Services.css";

export default function Services() {
  return (
    <section className="services-alt section" id="services">
  <div className="container services-alt-grid">

    {/* LEFT CONTENT */}
    <div className="services-alt-left">
      <span className="services-tag">What We Do</span>
      <h2>
        We build <span className="gradient-text">strategic digital solutions</span>
        <br /> that drive growth
      </h2>
      <p>
        From concept to launch, INSK helps brands create meaningful digital
        experiences through design, technology, and data-driven strategy.
      </p>

      <a href="/#about" className="btn">
        Learn More About Us
      </a>
    </div>

    {/* RIGHT CARDS */}
    <div className="services-alt-right">
      <div className="service-box highlight">
        <div className="icon">🧩</div>
        <h4>Product Design</h4>
        <p>User-friendly digital products that delight customers.</p>
      </div>

      <div className="service-box">
        <div className="icon">📈</div>
        <h4>Digital Marketing</h4>
        <p>Data-driven strategies that drive traffic and conversions.</p>
      </div>

      <div className="service-box">
        <div className="icon">💻</div>
        <h4>Web Design</h4>
        <p>Responsive, scalable websites tailored to your brand.</p>
      </div>

      <div className="service-box highlight">
        <div className="icon">🎯</div>
        <h4>Strategic Advisory</h4>
        <p>Long-term guidance for sustainable business growth.</p>
      </div>
    </div>

  </div>
</section>

  );
}
