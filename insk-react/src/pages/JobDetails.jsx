import { useParams } from "react-router-dom";
import {jobsData} from "../data/jobsData";
import '../styles/global.css';
import SEO from "../components/SEO/SEO";


export default function JobDetails() {
  const { jobSlug } = useParams();

  // Flatten all country jobs into one array
  const allJobs = Object.values(jobsData).flat();

  const job = allJobs.find(j => j.slug === jobSlug);

  if (!job) {
    return (
      <section className="job-details section">
        <div className="container">
          <h2>Job not found</h2>
          <p className="muted">
            The job you’re looking for does not exist or has been closed.
          </p>
        </div>
      </section>
    );
  }

  const mailToLink = `mailto:${job.email}
      ?subject=Application for ${job.title}
      &body=Hello INSK Team,%0D%0A%0D%0A
      I am interested in applying for the ${job.title} position in ${job.location}.%0D%0A
      Employment Type: ${job.type}%0D%0A
      Department: ${job.dept}%0D%0A%0D%0A
      Please find my resume attached.%0D%0A%0D%0A
      Regards,%0D%0A
      [Your Name]`;

  return (
    <section className="job-details section">
      <SEO
        title={`${job.title} Job in ${job.location}`}
        description={`Apply for the ${job.title} role at INSK in ${job.location}. ${job.shortDescription}`}
        keywords={`${job.title}, INSK careers, ${job.location} jobs`}
        url={`https://insk.vercel.app/careers/${job.slug}`}
      />
      <div className="container">
        <h1>{job.title}</h1>

        <p className="job-meta">
          {job.dept} • {job.type} • {job.location}
        </p>

        <div className="job-description">
          {job.description.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <a href={mailToLink} className="btn">
          Apply Now
        </a>
      </div>
    </section>
  );
}
