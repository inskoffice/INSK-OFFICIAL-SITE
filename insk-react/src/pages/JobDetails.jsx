import { useParams, Link } from "react-router-dom";
import { useMemo } from "react";
import { jobsData } from "../data/jobsData";
import SEO from "../components/SEO/SEO";
// import '../styles/global.css';

export default function JobDetails() {
  const { jobSlug } = useParams();

  const allJobs = useMemo(() => Object.values(jobsData).flat(), []);
  const job = allJobs.find(j => j.slug === jobSlug);

  if (!job) return <h2>Job not found</h2>;

  const mailTo = `mailto:${job.email}?subject=${encodeURIComponent(
    `Application for ${job.title}`
  )}`;

  return (
    <section className="careers-layout">
      <SEO
        title={`${job.title} | INSK Careers`}
        description={job.shortDescription}
      />

      {/* LEFT – JOB LIST */}
      <aside className="jobs-list">
        <h4>{allJobs.length} Jobs Found</h4>

        {allJobs.map(j => (
          <Link
            key={j.slug}
            to={`/careers/${j.slug}`}
            className={`job-list-item ${j.slug === jobSlug ? "active" : ""}`}
          >
            <h5>{j.title}</h5>
            <p>{j.location}</p>
            <span>{j.type}</span>
          </Link>
        ))}
      </aside>

      {/* RIGHT – JOB DETAILS */}
      <main className="job-details-panel">
        <header className="job-header">
          <h1>{job.title}</h1>
          {/* <a href={mailTo} className="btn">Apply Now</a> */}
        </header>

        <div className="job-meta">
          <span>📍 {job.location}</span>
          <span>💼 {job.type}</span>
          <span>🏢 {job.dept}</span>
          {job.salary && <span>💰 {job.salary}</span>}
        </div>

        <section className="job-content">
          {job.description
            .trim()
            .split("\n")
            .filter(Boolean)
            .map((line, i) => (
              <p key={i}>{line}</p>
            ))}

          {/* <a href={mailTo} className="job-btn">Apply Now</a> */}
        </section>
        <a href={mailTo} className="job-btn">Apply Now</a>
      </main>
    </section>
  );
}
