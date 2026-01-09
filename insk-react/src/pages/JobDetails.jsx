import { useParams, Link } from "react-router-dom";
import { useMemo, useEffect } from "react";
import { jobsData } from "../data/jobsData";
import SEO from "../components/SEO/SEO";

// Helper function to parse job description into structured sections
function parseJobDescription(description) {
  const lines = description.trim().split("\n").filter(line => line.trim());
  const sections = [];
  let currentSection = null;

  lines.forEach(line => {
    const trimmed = line.trim();
    
    // Check if line is a heading (ends with colon)
    if (trimmed.endsWith(':')) {
      if (currentSection) sections.push(currentSection);
      currentSection = {
        type: 'section',
        title: trimmed.slice(0, -1),
        description: '',
        items: []
      };
    }
    // Check if line is a bullet point
    else if (trimmed.startsWith('•') || trimmed.startsWith('-') || trimmed.startsWith('*')) {
      const content = trimmed.slice(1).trim();
      if (currentSection) {
        currentSection.items.push(content);
      } else {
        // Create a bullets section without heading
        if (!sections.length || sections[sections.length - 1].type !== 'bullets') {
          sections.push({ type: 'bullets', items: [] });
        }
        sections[sections.length - 1].items.push(content);
      }
    }
    // Regular paragraph text
    else {
      // If we're inside a section and haven't started bullets yet
      if (currentSection && currentSection.items.length === 0) {
        // Append to description with a space
        currentSection.description += (currentSection.description ? ' ' : '') + trimmed;
      } else {
        // Close current section if open
        if (currentSection) {
          sections.push(currentSection);
          currentSection = null;
        }
        sections.push({ type: 'paragraph', content: trimmed });
      }
    }
  });

  if (currentSection) sections.push(currentSection);
  return sections;
}

export default function JobDetails() {
  const { jobSlug } = useParams();

  // Flatten all jobs
  const allJobs = useMemo(() => Object.values(jobsData).flat(), []);
  const job = allJobs.find(j => j.slug === jobSlug);

  // Parse description into sections
  const parsedDescription = useMemo(() => {
    return job ? parseJobDescription(job.description) : [];
  }, [job]);

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
            The job you're looking for may have been closed or does not exist.
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
            {allJobs.map(j => (
              <Link
                key={j.slug}
                to={`/careers/${j.slug}`}
                className={`job-list-item ${j.slug === jobSlug ? "active" : ""}`}
              >
                <h5>{j.title}</h5>
                <span>💰 {j.salary}</span>
                <p>🌏 {j.location}</p>
              </Link>
            ))}
          </aside>

          {/* RIGHT — JOB DETAILS */}
          <main className="job-details-panel">
            <div className="job-details-inner">

              <header className="job-header">
                <h1>{job.title}</h1>
              </header>

              <div className="job-meta">
                <span>📍 {job.location}</span>
                <span>💼 {job.type}</span>
                <span>🏢 {job.dept}</span>
                {job.salary && <span>💰 {job.salary}</span>}
              </div>

              <section className="job-content">
                {parsedDescription.map((section, i) => {
                  if (section.type === 'paragraph') {
                    return <p key={i}>{section.content}</p>;
                  }
                  
                  if (section.type === 'section') {
                    return (
                      <div key={i} className="job-section">
                        <h3>{section.title}</h3>
                        {section.description && (
                          <p>{section.description}</p>
                        )}
                        {section.items.length > 0 && (
                          <ul>
                            {section.items.map((item, j) => (
                              <li key={j}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  }
                  
                  if (section.type === 'bullets') {
                    return (
                      <ul key={i}>
                        {section.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  
                  return null;
                })}
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