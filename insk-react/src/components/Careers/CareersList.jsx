import { useState } from "react";
import JobCard from "./JobCard";
import "./Careers.css";

// Job data with more careers
const jobsData = {
  india: [
    {
      title: "SEO Specialist",
      slug: "seo-specialist-india",
      type: "Hybrid",
      dept: "Marketing",
      location: "India",
      email: "careers@insk.com",
      description: `
We are seeking an SEO Specialist to improve search rankings and
optimize website performance.

Requirements:
• On-page & off-page SEO
• Keyword research
• Analytics & reporting
      `
    },
    {
      title: "Frontend Developer",
      slug: "frontend-developer-india",
      type: "Onsite",
      dept: "Engineering",
      location: "India",
      email: "careers@insk.com",
      description: `
Looking for a Frontend Developer to build modern web interfaces.

Requirements:
• React / JavaScript
• HTML, CSS
• API integration
      `
    },
    {
      title: "Backend Developer",
      slug: "backend-developer-india",
      type: "Onsite",
      dept: "Engineering",
      location: "India",
      email: "careers@insk.com",
      description: `
Backend Developer responsible for server-side logic and APIs.

Requirements:
• Node.js / Python
• Databases
• REST APIs
      `
    },
    {
      title: "Product Manager",
      slug: "product-manager-india",
      type: "Hybrid",
      dept: "Product",
      location: "India",
      email: "careers@insk.com",
      description: `
Product Manager to define roadmap and manage cross-functional teams.
      `
    },
    {
      title: "Graphic Designer",
      slug: "graphic-designer-india",
      type: "Remote",
      dept: "Design",
      location: "India",
      email: "careers@insk.com",
      description: `
Graphic Designer to create engaging brand visuals and assets.
      `
    },
    {
      title: "Data Analyst",
      slug: "data-analyst-india",
      type: "Onsite",
      dept: "Data",
      location: "India",
      email: "careers@insk.com",
      description: `
Data Analyst to analyze datasets and generate business insights.
      `
    }
  ],

  pakistan: [
    {
      title: "UI/UX Designer",
      slug: "ui-ux-designer-pakistan",
      type: "Remote",
      dept: "Design",
      location: "Pakistan",
      email: "careers@insk.com",
      description: `
UI/UX Designer focused on user-centered digital experiences.
      `
    },
    {
      title: "Content Writer",
      slug: "content-writer-pakistan",
      type: "Hybrid",
      dept: "Marketing",
      location: "Pakistan",
      email: "careers@insk.com",
      description: `
Content Writer to craft blogs, website copy, and marketing content.
      `
    },
    {
      title: "Full Stack Developer",
      slug: "full-stack-developer-pakistan",
      type: "Onsite",
      dept: "Engineering",
      location: "Pakistan",
      email: "careers@insk.com",
      description: `
Full Stack Developer working across frontend and backend systems.
      `
    },
    {
      title: "HR Manager",
      slug: "hr-manager-pakistan",
      type: "Onsite",
      dept: "Human Resources",
      location: "Pakistan",
      email: "careers@insk.com",
      description: `
HR Manager overseeing recruitment and people operations.
      `
    }
  ],

  srilanka: [
    {
      title: "Digital Marketing Executive",
      slug: "digital-marketing-executive-srilanka",
      shortDescription: "Plan and optimize paid & organic digital campaigns.",
      type: "Onsite",
      dept: "Marketing",
      location: "Sri Lanka",
      email: "careers@insk.com",
      description: `
  We are seeking a Digital Marketing Executive to plan, execute, and
  optimize digital marketing campaigns across multiple platforms.`
  },
    {
      title: "Social Media Manager",
      slug: "social-media-manager-srilanka",
      shortDescription: "Manage content, engagement, and growth on social platforms.",
      type: "Remote",
      dept: "Marketing",
      location: "Sri Lanka",
      email: "careers@insk.com",
      description: `
  We are looking for a Social Media Manager to strengthen brand presence `
  },
    {
      title: "SEO Specialist",
      slug: "seo-specialist-srilanka",
      shortDescription: "Improve search rankings and drive organic traffic.",
      type: "Hybrid",
      dept: "Marketing",
      location: "Sri Lanka",
      email: "careers@insk.com",
      description: `
  SEO Specialist responsible for improving search visibility and
  driving organic traffic.`
  },
    {
      title: "Frontend Developer",
      slug: "frontend-developer-srilanka",
      shortDescription: "Build responsive, high-performance web interfaces.",
      type: "Hybrid",
      dept: "Engineering",
      location: "Sri Lanka",
      email: "careers@insk.com",
      description: `
  Frontend Developer to build responsive and high-performance user
  interfaces for web applications.`
  },
    {
      title: "Customer Support Lead",
      slug: "customer-support-lead-srilanka",
      shortDescription: "Lead support operations and ensure service quality.",
      type: "Onsite",
      dept: "Support",
      location: "Sri Lanka",
      email: "careers@insk.com",
      description: `
  Customer Support Lead responsible for managing support operations and
  ensuring high levels of customer satisfaction.`
  }
  ]

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
    <section id="careerssection" className="careers-section">
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
