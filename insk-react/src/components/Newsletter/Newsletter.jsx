import { useState } from "react";
import "./Newsletter.css";

export default function Newsletter() {
  const [success, setSuccess] = useState(false);

  return (
    <section id="contact" className="newsletter section">
      <div className="container">
        <h2 className="section-header">Subscribe for updates</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSuccess(true);
          }}
        >
          <div className="sub-wrap">
            <input type="email" placeholder="Enter your email" required />
            <button className="btn">Subscribe</button>
          </div>

          {success && <div className="success">✅ Subscription successful!</div>}
        </form>
      </div>
    </section>
  );
}
