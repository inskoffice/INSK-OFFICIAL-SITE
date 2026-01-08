import "./Hero.css";

export default function Hero() {
  return (
    <header id="home" className="hero section">
      <div className="container hero-grid">
        <div>
          <span className="chip">
            <i className="ri-flashlight-fill"></i>
            Creative • Data-Driven • Reliable
          </span>

          <h1>
            Building <span className="brand">Digital Products</span>, Brands &
            Experiences
          </h1>

          <p>
            We help businesses grow by creating innovative digital products,
            memorable brand identities, and seamless user experiences.
          </p>

          <div className="hero-cta">
            <a className="btn" href="https://wa.me/94760685652">
              Get a Free Quote
            </a>
            <a className="btn1" href="#services">
              Explore Services
            </a>
          </div>
        </div>

        <div className="hero-img hero-card">
          <img src="/images/head.png" alt="Creative workspace" />
        </div>
      </div>
    </header>
  );
}
