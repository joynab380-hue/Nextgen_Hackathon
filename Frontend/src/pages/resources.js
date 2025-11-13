import React, { useState } from "react";
import "./resourcecard.css";

const resources = [
  {
    title: "MDN Web Docs — Learn Web Development",
    platform: "MDN",
    img: "https://media.licdn.com/dms/image/D5612AQHyLFkv9YBcGA/article-cover_image-shrink_720_1280/0/1715058774193?e=2147483647&v=beta&t=bsblbiAs57nBv8kcmXczizr6hf0fYygpscTiN58UIEw",
    url: "https://developer.mozilla.org/en-US/docs/Learn/",
    skills: ["HTML", "CSS", "JavaScript"],
    subject: "Web Development",
    cost: "Free"
  },
  {
    title: "freeCodeCamp — Responsive Web Design",
    platform: "freeCodeCamp",
    img: "https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.jpg",
    url: "https://www.freecodecamp.org/learn/",
    skills: ["HTML", "CSS", "JavaScript"],
    subject: "Web Development",
    cost: "Free"
  },
  {
    title: "Traversy Media — YouTube Tutorials",
    platform: "YouTube",
    img: "https://i.ytimg.com/vi/3PHXvlpOkf4/maxresdefault.jpg",
    url: "https://www.youtube.com/c/TraversyMedia",
    skills: ["JavaScript", "React", "Web"],
    subject: "Web Development",
    cost: "Free"
  },
  {
    title: "React - The Complete Guide",
    platform: "Udemy",
    img: "https://img-c.udemycdn.com/course/750x422/705264_caa9_13.jpg",
    url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    skills: ["React", "JavaScript"],
    subject: "Web Development",
    cost: "Paid"
  },
  {
    title: "Coursera — Python for Data Science, AI & Development",
    platform: "Coursera",
    img: "https://www.accuwebhosting.com/blog/wp-content/uploads/2023/06/pythom-data-science.jpg",
    url: "https://www.coursera.org/learn/python-for-applied-data-science-ai",
    skills: ["Python", "Data Science", "ML"],
    subject: "Data Science",
    cost: "Mixed"
  },
  {
    title: "Kaggle Learn — Micro-courses",
    platform: "Kaggle",
    img: "https://www.kaggle.com/static/images/education/km/landing-header-light.svg",
    url: "https://www.kaggle.com/learn",
    skills: ["Python", "Data Science"],
    subject: "Data Science",
    cost: "Free"
  },
  {
    title: "Microsoft Excel Training",
    platform: "Microsoft",
    img: "https://wtm-assets-1.imgix.net/uploads/images/url/2025-10-27-8292015f27824564ac56f84fedad73f7?auto=format&fit=crop&crop=entropy&fm=jpg&q=75&w=1024&h=768&s=ae4772228dbda6c1771693871f8abd8d",
    url: "https://support.microsoft.com/en-us/excel",
    skills: ["Excel", "Data"],
    subject: "Data Science",
    cost: "Free"
  },
  {
    title: "From Excel to Power BI",
    platform: "Coursera",
    img: "https://kdd-public-files.s3.amazonaws.com/large_BLOG_Conectando_o_Excel_ao_Power_BI_67299a901a.png",
    url: "https://www.coursera.org/learn/from-excel-to-power-bi",
    skills: ["Excel", "Power BI", "Data Visualization"],
    subject: "Data Science",
    cost: "Free Trial"
  },
  {
    title: "Interaction Design Foundation",
    platform: "IDF",
    img: "https://th.bing.com/th/id/OIP.AX4iiqOrcXtwZl5nnt5gMQHaE8?w=298&h=199&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",
    url: "https://www.interaction-design.org/",
    skills: ["Design", "UI/UX"],
    subject: "Design",
    cost: "Paid"
  },
  {
    title: "Google Digital Garage — Communication Skills",
    platform: "Google",
    img: "https://image.slidesharecdn.com/googlegarage-160831114244/85/Google-Digital-Garage-1-320.jpg",
    url: "https://learndigital.withgoogle.com/digitalunlocked",
    skills: ["Communication", "Career Skills"],
    subject: "Business Skills",
    cost: "Free"
  },
  {
    title: "Google UX Design Professional Certificate",
    platform: "Coursera",
    img: "https://th.bing.com/th/id/OIP.xepyPINqzTrzz3L3W-P_ZwHaHa?w=159&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",
    url: "https://www.coursera.org/professional-certificates/google-ux-design",
    skills: ["UX", "UI Design", "Prototyping"],
    subject: "Design",
    cost: "Free Trial"
  },
  {
    title: "Figma for Beginners — YouTube",
    platform: "Figma",
    img: "https://th.bing.com/th/id/OIP.J81l2c2aMcCldtWSBkQBsgHaEK?w=307&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",
    url: "https://www.youtube.com/playlist?list=PLXDU_eVOJTx6ZQswH9cck0D0L6xmk3fZp",
    skills: ["Figma", "Prototyping", "UI Design"],
    subject: "Design",
    cost: "Free"
  },
  {
    title: "Adobe XD Crash Course",
    platform: "Envato Tuts+",
    img: "https://th.bing.com/th/id/OIP.zsXnJJcAezqOoIqS-cGUggHaEK?w=273&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",
    url: "https://design.tutsplus.com/series/adobe-xd-for-beginners--cms-1231",
    skills: ["Adobe XD", "Wireframing", "Design"],
    subject: "Design",
    cost: "Free"
  },
  {
    title: "LinkedIn Learning — Business Communication",
    platform: "LinkedIn Learning",
    img: "https://th.bing.com/th/id/OIP.seq2TtkmY6j0fhcng8VeyQHaEa?w=245&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",
    url: "https://www.linkedin.com/learning/topics/business-communication",
    skills: ["Communication", "Leadership"],
    subject: "Business Skills",
    cost: "Paid"
  },
  {
    title: "Coursera — Project Management Principles",
    platform: "Coursera",
    img: "https://th.bing.com/th/id/OIP.HoXEpmU8Oy8d2VyM-hsJAwHaEK?w=270&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",
    url: "https://www.coursera.org/learn/project-management-principles",
    skills: ["Project Management", "Leadership"],
    subject: "Business Skills",
    cost: "Free Trial"
  },
  {
    title: "edX — Entrepreneurship in Emerging Economies",
    platform: "edX / Harvard",
    img: "https://th.bing.com/th/id/OIP.QIAsPI9quayBWht3KZyX0gHaEK?w=289&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",
    url: "https://www.edx.org/course/entrepreneurship-in-emerging-economies",
    skills: ["Entrepreneurship", "Business Strategy"],
    subject: "Business Skills",
    cost: "Free"
  },
  {
    title: "TED Talks — Public Speaking Inspiration",
    platform: "TED",
    img: "https://th.bing.com/th/id/OIP.dQEZXw9tioWbBIntyNl-sgHaHa?w=163&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3",
    url: "https://www.ted.com/playlists/226/the_most_popular_talks_of_all",
    skills: ["Communication", "Public Speaking"],
    subject: "Business Skills",
    cost: "Free"
  },
  {
    title: "CS50x — Introduction to Computer Science",
    platform: "edX",
    img: "https://www.learncomputerscienceonline.com/wp-content/uploads/2022/07/Introduction-To-Computer-Science-Beginners-Guide-To-Computer-Science-CS-CS-Major-Computer-Science.jpg",
    url: "https://cs50.harvard.edu/x/",
    skills: ["Computer Science", "C", "Python"],
    subject: "Web Development",
    cost: "Free"
  },
  {
    title: "Codecademy — Learn SQL",
    platform: "Codecademy",
    img: "https://miro.medium.com/v2/resize:fit:1200/1*SFwbmiOTKTuUGER1gVXX5A.jpeg",
    url: "https://www.codecademy.com/learn/learn-sql",
    skills: ["SQL", "Databases"],
    subject: "Web Development",
    cost: "Free"
  }
];

function Resources() {
  const [search, setSearch] = useState("");
  const [skill, setSkill] = useState("all");
  const [subject, setSubject] = useState("all");

  const filtered = resources.filter((r) => {
    const titleMatch = r.title.toLowerCase().includes(search.toLowerCase());
    const skillMatch =
      skill === "all" ||
      r.skills.some((s) => s.toLowerCase() === skill.toLowerCase());
    const subjectMatch =
      subject === "all" || r.subject.toLowerCase() === subject.toLowerCase();
    return titleMatch && skillMatch && subjectMatch;
  });

  return (
    <div className="resources-page">
      <header>
        <h1>Learning Resources</h1>
        <p>Curated courses and tutorials mapped to common tech & career skills.</p>
        <div className="controls">
          <input
            type="text"
            placeholder="Search title or skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>

          <select value={skill} onChange={(e) => setSkill(e.target.value)}>
            <option value="all">All skills</option>
            <option>HTML</option>
            <option>CSS</option>
            <option>JavaScript</option>
            <option>React</option>
            <option>Python</option>
            <option>Data Science</option>
            <option>Excel</option>
            <option>SQL</option>
            <option>Design</option>
            <option>UI/UX</option>
            <option>Communication</option>
          </select>

          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="all">All subjects</option>
            <option>Web Development</option>
            <option>Data Science</option>
            <option>Design</option>
            <option>Business Skills</option>
          </select>
        </div>
      </header>

       <div className="resources-grid">
        {filtered.map((r, i) => (
          <div key={i} className="card">
            <a href={r.url} target="_blank" rel="noopener noreferrer">
              <img src={r.img} alt={r.title} />
              <div className="card-content">
                <h3>{r.title}</h3>
                <p>
                  <strong>{r.platform}</strong> • {r.cost}
                </p>
                <p>
                  {r.skills.map((s, j) => (
                    <span key={j} className="skill">
                      {s}
                    </span>
                  ))}
                </p>
                <p style={{ fontSize: "0.8rem", color: "#64748b" }}>
                  <strong>Subject:</strong> {r.subject}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
