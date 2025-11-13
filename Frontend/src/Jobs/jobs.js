import React, { useState } from "react";
import "./jobs.css"; 

const jobsData = [
  {
    title: "Software Engineering Intern",
    company: "Google",
    location: "California",
    type: "Internship",
    icon: "ri-computer-line",
    url: "https://careers.google.com/jobs/results/"
  },
  {
    title: "Data Analyst Intern",
    company: "Microsoft",
    location: "Remote",
    type: "Internship",
    icon: "ri-bar-chart-2-line",
    url: "https://careers.microsoft.com/students/us/en"
  },
  {
    title: "Front-End Developer (Entry Level)",
    company: "IBM",
    location: "New York",
    type: "Full-time",
    icon: "ri-code-s-slash-line",
    url: "https://www.ibm.com/careers/"
  },
  {
    title: "Graphic Designer Intern",
    company: "Canva",
    location: "Remote",
    type: "Internship",
    icon: "ri-brush-line",
    url: "https://www.canva.com/careers/"
  },
  {
    title: "Junior Web Developer",
    company: "Upwork",
    location: "Remote",
    type: "Freelance",
    icon: "ri-terminal-line",
    url: "https://www.upwork.com/"
  },
  {
    title: "Digital Marketing Assistant",
    company: "HubSpot",
    location: "Boston",
    type: "Full-time",
    icon: "ri-megaphone-line",
    url: "https://www.hubspot.com/careers"
  },
  {
    title: "Content Writer (Part-time)",
    company: "Fiverr",
    location: "Remote",
    type: "Part-time",
    icon: "ri-edit-2-line",
    url: "https://www.fiverr.com/"
  },
  {
    title: "Junior Data Scientist",
    company: "Kaggle",
    location: "London",
    type: "Full-time",
    icon: "ri-database-2-line",
    url: "https://www.kaggle.com/jobs"
  },
  {
    title: "Teaching Assistant",
    company: "Coursera",
    location: "Remote",
    type: "Part-time",
    icon: "ri-book-open-line",
    url: "https://about.coursera.org/careers/"
  },
  {
    title: "Software Developer Intern",
    company: "Amazon",
    location: "Seattle",
    type: "Internship",
    icon: "ri-cloud-line",
    url: "https://www.amazon.jobs/en/"
  },
  {
    title: "UI/UX Designer (Junior)",
    company: "Adobe",
    location: "California",
    type: "Full-time",
    icon: "ri-pencil-ruler-2-line",
    url: "https://www.adobe.com/careers.html"
  },
  {
    title: "Customer Support Associate",
    company: "Zendesk",
    location: "Remote",
    type: "Full-time",
    icon: "ri-customer-service-2-line",
    url: "https://www.zendesk.com/jobs/"
  },
  {
    title: "Junior QA Tester",
    company: "Electronic Arts",
    location: "Vancouver",
    type: "Internship",
    icon: "ri-bug-line",
    url: "https://www.ea.com/careers"
  },
  {
    title: "Machine Learning Intern",
    company: "NVIDIA",
    location: "California",
    type: "Internship",
    icon: "ri-cpu-line",
    url: "https://www.nvidia.com/en-us/about-nvidia/careers/"
  },
  {
    title: "Social Media Coordinator",
    company: "TikTok",
    location: "Singapore",
    type: "Full-time",
    icon: "ri-share-line",
    url: "https://careers.tiktok.com/"
  },
  {
    title: "Research Assistant",
    company: "MIT Labs",
    location: "Boston",
    type: "Part-time",
    icon: "ri-flask-line",
    url: "https://hr.mit.edu/careers"
  },
  {
    title: "Backend Developer (Entry Level)",
    company: "Spotify",
    location: "Remote",
    type: "Full-time",
    icon: "ri-server-line",
    url: "https://www.lifeatspotify.com/jobs"
  },
  {
    title: "Junior Project Coordinator",
    company: "Asana",
    location: "California",
    type: "Full-time",
    icon: "ri-briefcase-line",
    url: "https://asana.com/jobs"
  },
  {
    title: "IT Support Intern",
    company: "Dell Technologies",
    location: "Texas",
    type: "Internship",
    icon: "ri-tools-line",
    url: "https://jobs.dell.com/"
  },
  {
    title: "Video Editor Intern",
    company: "YouTube",
    location: "California",
    type: "Internship",
    icon: "ri-video-line",
    url: "https://www.youtube.com/jobs"
  }
];

const Jobs = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  const handleFilter = () => {
    const filtered = jobsData.filter(j =>
      (keyword === "" || j.title.toLowerCase().includes(keyword.toLowerCase())) &&
      (location === "" || j.location === location) &&
      (type === "" || j.type === type)
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="jobs-page">
      <header className="header">
        <h1>Find Your Dream Job</h1>
        <p>Search from student and entry-level opportunities</p>
      </header>

      {/* Search & Filter Bar */}
      <section className="filter-bar">
        <input
          type="text"
          placeholder="Search keyword..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Location</option>
          <option>Remote</option>
          <option>California</option>
          <option>New York</option>
          <option>London</option>
          <option>Boston</option>
          <option>Vancouver</option>
          <option>Texas</option>
          <option>Singapore</option>
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Job Type</option>
          <option>Internship</option>
          <option>Part-time</option>
          <option>Full-time</option>
          <option>Freelance</option>
        </select>
        <button onClick={handleFilter}>
          <i className="ri-search-line"></i> Find Job
        </button>
      </section>

      {/* Popular Categories */}
      <section className="categories">
        <h2>Popular Categories</h2>
        <div className="category-grid">
          <div className="category-card"><i className="ri-brush-line"></i> Design & Creative</div>
          <div className="category-card"><i className="ri-megaphone-line"></i> Marketing</div>
          <div className="category-card"><i className="ri-phone-line"></i> Telemarketing</div>
          <div className="category-card"><i className="ri-code-s-slash-line"></i> Software & Web</div>
          <div className="category-card"><i className="ri-briefcase-line"></i> Administration</div>
          <div className="category-card"><i className="ri-book-open-line"></i> Teaching & Education</div>
          <div className="category-card"><i className="ri-tools-line"></i> Engineering</div>
          <div className="category-card"><i className="ri-t-shirt-line"></i> Garments / Textile</div>
        </div>
      </section>

      {/* Job Listing */}
      <main className="jobs">
        <div className="jobs-header">
          <h2>Job Listing</h2>
        </div>

        <div className="jobs-container">
          {filteredJobs.map((job, index) => (
            <div key={index} className="job-card">
              <div className="job-info">
                <i className={`${job.icon} job-icon`}></i>
                <div className="job-details">
                  <h4>{job.title}</h4>
                  <p>{job.company}</p>
                  <div className="job-meta">{job.location} • {job.type}</div>
                </div>
              </div>
              <a href={job.url} target="_blank" rel="noopener noreferrer">
                <button className="apply-btn">Apply Now</button>
              </a>
            </div>
          ))}
          {filteredJobs.length === 0 && <p>No jobs found.</p>}
        </div>
      </main>

      <footer>
        <p>© 2025 Student Careers Portal</p>
      </footer>
    </div>
  );
};

export default Jobs;
