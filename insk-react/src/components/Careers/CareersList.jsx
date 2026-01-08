import { useState } from "react";
import JobCard from "./JobCard";
import "./Careers.css";

const jobs = {
  india: [
    { title: "Frontend Developer", type: "Remote", dept: "Engineering" },
    { title: "SEO Specialist", type: "Hybrid", dept: "Marketing" }
  ],
  pakistan: [
    { title: "UI/UX Designer", type: "Remote", dept: "Design" }
  ],
  srilanka: [
    { title: "Digital Marketing Executive", type: "Onsite", dept: "Marketing" }
  ]
};

export default function CareersList() {
  const [active, setActive] = useState("india");

  return (
    <section className="careers-section">
      <div className="container">

        {/* Tabs */}
        <div className="country-tabs">
          <button onClick={() => setActive("india")} className={active === "india" ? "active" : ""}>
            🇮🇳 India
          </button>
          <button onClick={() => setActive("pakistan")} className={active === "pakistan" ? "active" : ""}>
            🇵🇰 Pakistan
          </button>
          <button onClick={() => setActive("srilanka")} className={active === "srilanka" ? "active" : ""}>
            🇱🇰 Sri Lanka
          </button>
        </div>

        {/* Job Cards */}
        <div className="jobs-grid">
          {jobs[active].map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
