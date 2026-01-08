export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <h4>{job.title}</h4>

      <p className="job-meta">
        {job.dept} • {job.type}
      </p>

      <a href="#apply" className="btn1">
        Apply Now
      </a>
    </div>
  );
}
