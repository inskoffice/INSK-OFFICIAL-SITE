import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-header">
          We are a Strategic, Creative, Digital Agency
        </h2>
        <p className="section-sub">
          From concept to launch, we craft solutions that move your brand forward.
        </p>

        <div className="grid">
          <a className="service-card" href="#">
            <i className="ri-pencil-ruler-2-line"></i>
            <h4>Product Design</h4>
            <p>User-friendly digital products that delight customers.</p>
          </a>

          <a className="service-card" href="#">
            <i className="ri-computer-line"></i>
            <h4>Digital Marketing</h4>
            <p>Data-driven strategies that drive conversions.</p>
          </a>

          <a className="service-card" href="#">
            <i className="ri-pages-line"></i>
            <h4>Web Design</h4>
            <p>Responsive websites tailored to your brand.</p>
          </a>

          <a className="service-card" href="#">
            <i className="ri-layout-2-line"></i>
            <h4>Strategic Advisory</h4>
            <p>Long-term guidance for sustainable growth.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
