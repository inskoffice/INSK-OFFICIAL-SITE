import "./Hero.css";

export default function Hero() {
  return (
    <header id="home" className="hero section">
      <div className="container hero-grid">
        <div>
          <span className="chip">
            {/* <i className="ri-flashlight-fill"></i> */}
            {/* Creative • Data-Driven • Reliable */}
          </span>

          <h1>
            Building <span className="gradient-text">Digital Products</span>, Brands &
            Experiences
          </h1>

          <p className="hero-p">
            We are an international Digital marketing and promotion company specializing in helping businesses, brands, and individuals grow their digital presence across global platforms. 
            INSK Group operates in a highly professional, structured, and performance-oriented environment.
          </p>

          <div className="hero-cta">
            <a className="btn" href="https://wa.me/94760685652">
              Contact Us Now
            </a>
            <a className="btn1" href="#services">
              Explore Services
            </a>
          </div>
        </div>

        <div className="hero-img hero-card">
          <img src="/images/head1.png" alt="Creative workspace" />
        </div>
      </div>
    </header>
  );
}
