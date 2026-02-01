import React, { useState } from "react";

const professionalExperience = [
  {
    company: "Regeneron Pharmaceuticals",
    role: "Data & ML Engineering Intern",
    date: "May 2025 - Dec 2025",
    location: "Sleepy Hollow, NY",
    bullets: [
      "Built Snowflake ingestion pipelines from S3 (Parquet), Redshift, and SFTP, enforcing schema alignment, source-to-target mappings, and reject handling to publish analytics-ready tables for commercial data marts.",
      "Implemented automated data quality and observability with Snowpark plus Streamlit, including schema drift detection, null and distribution checks, and KPI anomaly flags via scheduled runs, cutting downstream query latency by about 70%.",
      "Designed a governed semantic layer using YAML-based semantic modeling with entities, relationships, metrics, and join rules, and integrated Cortex Analyst with Cortex Search in Snowflake Intelligence to deliver traceable text-to-SQL, cohort analysis, and KPI diagnostics.",
      "Implemented Snowpark stored procedures for statistical profiling, Holt-Winters forecasting, anomaly detection, and decision-tree based top insights, integrating outputs into Snowflake Intelligence to support alerts and planning workflows.",
    ],
  },
  {
    company: "Binghamton University, Watson Career Services & School of Computing",
    role: "Graduate Software Developer",
    date: "Aug 2024 - Dec 2025",
    location: "Binghamton, NY",
    bullets: [
      "Developed a micro-internship platform using Next.js, React, and PostgreSQL that streamlined job posting, student application, and employer review workflows, resulting in faster matching of candidates to opportunities.",
      "Designed a relational schema in PostgreSQL and built SQL reporting views for applicant tracking system matching, including indexing and query tuning to improve admin analytics performance.",
      "Built Python REST APIs with authentication, RBAC, and request validation, and set up automated deployments via GitHub Actions and Docker, reducing deployment time and ensuring consistent environment provisioning.",
    ],
  },
  {
    company: "KrtrimaIQ Cognitive Solutions",
    role: "Data Engineer",
    date: "Dec 2021 - Dec 2023",
    location: "Bangalore, India",
    bullets: [
      "Designed Azure Data Factory ELT pipelines with SCD Type 2, validation, deduplication, and lineage logging, publishing dimension and fact tables for dashboards used by 5+ teams.",
      "Built Databricks PySpark batch jobs for ingestion and transformations, adding schema and null checks plus alerting to prevent bad data from reaching reporting tables.",
      "Standardized dbt SQL models and partnered with stakeholders to define KPIs and star schemas, publishing curated datasets for PowerBI dashboards.",
      "Delivered BI-focused assistants using Rasa rule-based NLP to generate smart narratives from tabular KPIs, reducing reliance on manual SQL and improving reporting adoption across business teams.",
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
