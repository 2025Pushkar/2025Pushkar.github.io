import React, { useState } from "react";

const professionalExperience = [
  {
    company: "Regeneron",
    role: "Graduate Intern - Software Engineer (AI Systems)",
    date: "May 2025 - Dec 2025",
    location: "Sleepy Hollow, NY, USA",
    bullets: [
      "Built multi-agent analytics systems using Snowflake Cortex, enabling automated insights, forecasting, and anomaly detection over governed enterprise data.",
      "Designed and implemented LLM-powered analytics workflows, supporting natural-language querying and AI-driven insight generation in production.",
      "Developed backend services and REST APIs to orchestrate AI agents, including request validation, retries, and production monitoring.",
      "Designed and optimized SQL queries and semantic models consumed by APIs and AI agents to ensure accurate, performant data retrieval.",
      "Improved system reliability by implementing robust service orchestration logic with structured error handling and fault tolerance.",
      "Strengthened production stability by adding API guardrails and schema validation, reducing invalid requests and runtime failures.",
      "Built internal self-service tools backed by APIs, enabling non-technical users to securely access analytics workflows.",
      "Collaborated cross-functionally with product managers and engineers to deliver production-ready AI systems.",
    ],
  },
  {
    company: "Binghamton University",
    role: "Graduate Software Developer",
    date: "Aug 2024 - Dec 2025",
    location: "Binghamton, NY, USA",
    bullets: [
      "Built a full-stack micro-internship platform connecting students and employers using Next.js, React, and PostgreSQL.",
      "Designed and implemented backend services and REST APIs to support job discovery, applications, and role-based access control.",
      "Modeled relational schemas and wrote complex SQL queries to power workflow-driven features across students, sponsors, projects, and applications.",
      "Implemented secure authentication and authorization, enforcing access control for student, sponsor, and admin roles.",
      "Built server-side authorization middleware, deriving user identity from secure tokens to protect all API routes.",
      "Improved frontend accessibility and reduced UI load times by 38% through targeted performance optimizations.",
      "Productionized the platform using Docker, GitHub Actions, and PM2, enabling automated deployments and zero-downtime restarts.",
    ],
  },
  {
    company: "KrtrimaIQ Cognitive Solutions",
    role: "Software Engineer",
    date: "Dec 2021 - Dec 2023",
    location: "Bangalore, KA, India",
    bullets: [
      "Developed and maintained the company's public website and internal intranet, building modern web applications using Next.js, Python, Tailwind CSS, and AWS.",
      "Implemented frontend components and backend integrations, contributing to scalable, maintainable application architecture.",
      "Built and integrated a secure authentication and authorization module, enabling protected access and role-based workflows across applications.",
      "Developed dynamic UI components and templates using JavaScript and React to render data-driven narratives, dashboards, and charts.",
      "Built and supported CI/CD pipelines on AWS, improving deployment reliability and reducing manual release effort.",
      "Containerized services using Docker and deployed them to a Kubernetes cluster, supporting microservice-style deployments.",
      "Authored Kubernetes Deployment and Service YAMLs to deploy and scale a two-tier web + MongoDB system with service discovery.",
      "Implemented persistent storage for stateful MongoDB workloads using Kubernetes volume mounts, ensuring data durability across pod restarts.",
      "Contributed to the development of Automate P&L, an automated publication platform, by implementing core frontend features and backend integrations.",
      "Developed a full-stack application using React, Tailwind CSS, MongoDB, and AWS, supporting content ingestion and publishing workflows.",
      "Worked closely with senior engineers and leadership to translate requirements into production-ready software.",
      "Participated in an Agile development process, contributing code, testing, and production support across releases.",
    ],
  },
];

const education = [
  {
    school: "Binghamton University, State University of New York (SUNY)",
    degree: "Master of Science (MS), Computer Science",
    gpa: "GPA: 3.8",
    date: "Jan 2024 - Dec 2025",
    location: "Binghamton, New York",
    coursework:
      "Data Structures & Algorithms, Distributed Systems, Cloud Computing, Artificial Intelligence, Machine Learning",
  },
  {
    school: "PES Institute of Technology, Bangalore, India",
    degree: "Bachelor of Engineering (BE), Electronics and Communication",
    gpa: "GPA: 3.9",
    date: "Aug 2017 - Aug 2021",
    location: "Bangalore, India",
    coursework: "Data Structures & Algorithms, Object-Oriented Programming",
  },
];

const leadershipAchievements = [
  "Grace Hopper Celebration 2025: Student Scholarship (Watson College).",
  "1st Place: IEEE SSCS Global Circuit Video Contest (2020) - Outperformed 50+ international teams; showcased strong technical communication skills.",
  "Practicing advanced algorithms through CodePath and LeetCode, strengthening DSA and SQL proficiency.",
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("professional");

  return (
    <section id="experience" className="experience-section py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h1 className="experience-title">Experience</h1>
          <p className="experience-subtitle">
            Professional experience, education, and leadership highlights.
          </p>
        </div>

        <div className="experience-tabs" role="tablist" aria-label="Experience sections">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "professional"}
            aria-controls="experience-professional"
            className={`experience-tab ${activeTab === "professional" ? "is-active" : ""}`}
            onClick={() => setActiveTab("professional")}
          >
            Professional
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "education"}
            aria-controls="experience-education"
            className={`experience-tab ${activeTab === "education" ? "is-active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "leadership"}
            aria-controls="experience-leadership"
            className={`experience-tab ${activeTab === "leadership" ? "is-active" : ""}`}
            onClick={() => setActiveTab("leadership")}
          >
            Leadership & Achievements
          </button>
        </div>

        <div
          id="experience-professional"
          role="tabpanel"
          aria-hidden={activeTab !== "professional"}
          className={`experience-panel ${activeTab === "professional" ? "is-active" : ""}`}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {professionalExperience.map((item) => (
              <article className="experience-card" key={`${item.company}-${item.role}`}>
                <div className="experience-card-header">
                  <h3 className="experience-card-title">{item.company}</h3>
                  <div className="experience-card-role">{item.role}</div>
                  <div className="experience-card-meta">
                    <span className="experience-pill">{item.date}</span>
                    <span className="experience-pill">{item.location}</span>
                  </div>
                </div>
                <ul className="experience-list">
                  {item.bullets.map((bullet, index) => (
                    <li key={`${item.company}-${index}`}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div
          id="experience-education"
          role="tabpanel"
          aria-hidden={activeTab !== "education"}
          className={`experience-panel ${activeTab === "education" ? "is-active" : ""}`}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((item) => (
              <article className="experience-card" key={item.school}>
                <div className="experience-card-header">
                  <h3 className="experience-card-title">{item.school}</h3>
                  <div className="experience-card-role">{item.degree}</div>
                  <div className="experience-card-meta">
                    <span className="experience-pill">{item.date}</span>
                    <span className="experience-pill">{item.location}</span>
                    <span className="experience-pill">{item.gpa}</span>
                  </div>
                </div>
                <p className="experience-card-text">
                  <strong>Coursework:</strong> {item.coursework}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div
          id="experience-leadership"
          role="tabpanel"
          aria-hidden={activeTab !== "leadership"}
          className={`experience-panel ${activeTab === "leadership" ? "is-active" : ""}`}
        >
          <article className="experience-card">
            <h3 className="experience-card-title">Leadership & Achievements</h3>
            <ul className="experience-list">
              {leadershipAchievements.map((item, index) => (
                <li key={`leadership-${index}`}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
