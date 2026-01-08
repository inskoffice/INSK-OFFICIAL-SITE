import { useState } from "react";
import JobCard from "./JobCard";
import "./Careers.css";

// Job data with more careers
const jobsData = {
  india: [
    { title: "SEO Specialist", type: "Hybrid", dept: "Marketing" },
    { title: "Frontend Developer", type: "Onsite", dept: "Engineering" },
    { title: "Backend Developer", type: "Onsite", dept: "Engineering" },
    { title: "Product Manager", type: "Hybrid", dept: "Product" },
    { title: "Graphic Designer", type: "Remote", dept: "Design" },
    { title: "Data Analyst", type: "Onsite", dept: "Data" },
  ],
  pakistan: [
    { title: "UI/UX Designer", type: "Remote", dept: "Design" },
    { title: "Content Writer", type: "Hybrid", dept: "Marketing" },
    { title: "Full Stack Developer", type: "Onsite", dept: "Engineering" },
    { title: "HR Manager", type: "Onsite", dept: "Human Resources" },
  ],
  srilanka: [
    { title: "Digital Marketing Executive", type: "Onsite", dept: "Marketing" },
    { title: "Social Media Manager", type: "Remote", dept: "Marketing" },
    { title: "SEO Specialist", type: "Hybrid", dept: "Marketing" },
    { title: "Frontend Developer", type: "Hybrid", dept: "Engineering" },
    { title: "Customer Support Lead", type: "Onsite", dept: "Support" },
  ],
};

// Country tabs data
const countries = [
  { code: "india", label: "India", flag: "🇮🇳" },
  { code: "pakistan", label: "Pakistan", flag: "🇵🇰" },
  { code: "srilanka", label: "Sri Lanka", flag: "🇱🇰" },
];

export default function CareersList() {
  const [activeCountry, setActiveCountry] = useState("india");

  return (
    <section className="careers-section">
      <div className="container">

        {/* Country Tabs */}
        <div className="country-tabs">
          {countries.map((country) => (
            <button
              key={country.code}
              onClick={() => setActiveCountry(country.code)}
              className={`tab-btn ${activeCountry === country.code ? "active" : ""}`}
            >
              <span className="flag">{country.flag}</span> {country.label}
            </button>
          ))}
        </div>

        {/* Job Cards */}
        <div className="jobs-grid">
          {jobsData[activeCountry]?.length ? (
            jobsData[activeCountry].map((job, index) => (
              <JobCard key={index} job={job} />
            ))
          ) : (
            <p className="no-jobs">
              😔 No job openings available in {countries.find(c => c.code === activeCountry)?.label}.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
