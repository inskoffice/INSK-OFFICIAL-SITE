import { useParams, Link } from "react-router-dom";
import { useMemo, useEffect } from "react";
import { jobsData } from "../data/jobsData";
import SEO from "../components/SEO/SEO";

export default function JobDetails() {
  const { jobSlug } = useParams();

  // Flatten all jobs
  const allJobs = useMemo(() => Object.values(jobsData).flat(), []);
  const job = allJobs.find(j => j.slug === jobSlug);

  // Scroll to top on job change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [jobSlug]);

  if (!job) {
    return (
      <section className="careers-page">
        <div className="careers-container">
          <h2>Job not found</h2>
          <p className="muted">
            The job you’re looking for may have been closed or does not exist.
          </p>
        </div>
      </section>
    );
  }

  const mailTo = `mailto:${job.email}?subject=${encodeURIComponent(
    `Application for ${job.title}`
  )}`;

  return (
    <section className="careers-page">
      <SEO
        title={`${job.title} | INSK Careers`}
        description={job.shortDescription}
        keywords={`${job.title}, ${job.location} jobs, INSK careers`}
        url={`https://insk.vercel.app/careers/${job.slug}`}
      />

      <div className="careers-container">
        <section className="careers-layout">

          {/* LEFT — JOB LIST */}
          <aside className="jobs-list">
            {/* <h4>{allJobs.length} Jobs Found</h4> */}

            {allJobs.map(j => (
              <Link
                key={j.slug}
                to={`/careers/${j.slug}`}
                className={`job-list-item ${j.slug === jobSlug ? "active" : ""}`}
              >
                <h5>{j.title}</h5>
                <span>💰 {job.salary}</span>
                <p>🌏 {job.location}</p>
              </Link>
            ))}
          </aside>

          {/* RIGHT — JOB DETAILS */}
          <main className="job-details-panel">
            <div className="job-details-inner">

              <header className="job-header">
                <h1>{job.title}</h1>
                {/* <a href={mailTo} className="job-btn small">
                  Apply
                </a> */}
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
              </section>

              <a href={mailTo} className="job-btn">
                Apply Now
              </a>

            </div>
          </main>

        </section>
      </div>
    </section>
  );
}
