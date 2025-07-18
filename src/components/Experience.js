import React from "react";

const Experience = () => (
  <section id="experience" className="experience py-5">
    <div className="d-flex justify-content-center mb-5">
      <h1 className="font-weight-bold text-dark">Experience</h1>
    </div>
    <div className="container">
      {/* ───────────── PROFESSIONAL ───────────── */}
      <h2 className="text-center mb-4 font-weight-bold text-dark">Professional Experience</h2>
      <div className="timeline experience-wrapper mb-4">
        <div className="row">

          {/* Regeneron */}
          <div className="col-md-6 timeline-block timeline-block-left">
            <div className="marker" />
            <div className="timeline-content">
              <h3 className="font-weight-bold text-dark">MAY 2025 – PRESENT</h3>
              <p>
                <span className="font-weight-bold text-dark">Graduate Software Developer Intern</span><br />
                <em>Regeneron Pharmaceuticals – Sleepy Hollow, NY</em>
              </p>
              <ul>
                <li>Cut query latency ≈70 % by building a Snowflake Snowpark + data-skipping “smart-narratives” pipeline.</li>
                <li>Integrated Snowflake Cortex LLM to auto-generate KPI narratives (Forecast, Key Drivers, Anomalies).</li>
                <li>Prototyped a semantic-aware BI chatbot (Streamlit) so business users can ask natural-language questions.</li>
                <li>Authored a YAML-driven schema interpreter & modular LLM-prompt engine for rapid domain onboarding.</li>
                <li>Ensured full compliance with Regeneron’s security / data-protection policies for sensitive commercial data.</li>
              </ul>
            </div>
          </div>

          {/* Binghamton University */}
          <div className="col-md-6 offset-md-6 timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content">
              <h3 className="font-weight-bold text-dark">AUG 2024 – PRESENT</h3>
              <p>
                <span className="font-weight-bold text-dark">Graduate Software Developer Intern</span><br />
                <em>Binghamton University – Watson Career & Alumni Connections</em>
              </p>
              <ul>
                <li>Architected and built a micro-internship platform (Next.js + TypeScript, PostgreSQL, Docker).</li>
                <li>Implemented secure 2-factor auth with OAuth2 + JWT for multi-role (students, sponsors, admins).</li>
                <li>Containerised deployment on university VMs (Apache + PM2) and set up CI/CD for fast iteration.</li>
                <li>Introduced API logging & profiling, mentored contributors, and enforced accessibility/performance guidelines.</li>
              </ul>
            </div>
          </div>

          {/* KrtrimaIQ */}
          <div className="col-md-6 timeline-block timeline-block-left">
            <div className="marker" />
            <div className="timeline-content">
              <h3 className="font-weight-bold text-dark">DEC 2021 – DEC 2023</h3>
              <p>
                <span className="font-weight-bold text-dark">Data Engineer</span><br />
                <em>KrtrimaIQ Cognitive Solutions – Bengaluru, India</em>
              </p>
              <ul>
                <li>Built the company website with Next.js & Python, improving load time 20 % and SEO 95+.</li>
                <li>Developed AI-powered chatbots & BI dashboards, raising customer engagement 25 %.</li>
                <li>Created ETL pipelines in Azure Data Factory (Type 2 SCD) and integrated Azure ML for sales forecasting.</li>
                <li>Deployed serverless micro-services on AWS Amplify (S3, Lambda, API Gateway).</li>
              </ul>
            </div>
          </div>

          {/* Alvaria */}
          <div className="col-md-6 offset-md-6 timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content">
              <h3 className="font-weight-bold text-dark">SEP 2021 – DEC 2021</h3>
              <p>
                <span className="font-weight-bold text-dark">Implementation Consultant</span><br />
                <em>Alvaria Inc. – Bengaluru, India</em>
              </p>
              <ul>
                <li>Implemented cloud Workforce-Management solutions for enterprise clients (Atlassian, Microsoft).</li>
                <li>Migrated customer data & wrote advanced SQL scripts, ensuring seamless go-lives.</li>
              </ul>
            </div>
          </div>

          {/* Spookfish */}
          <div className="col-md-6 timeline-block timeline-block-left">
            <div className="marker" />
            <div className="timeline-content">
              <h3 className="font-weight-bold text-dark">MAR 2021 – APR 2021</h3>
              <p>
                <span className="font-weight-bold text-dark">Software Developer Intern</span><br />
                <em>Spookfish Innovations – Bengaluru, India</em>
              </p>
              <ul>
                <li>Designed C++ sorting algorithms & ML models for coin classification with 95 % accuracy.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ───────────── ACADEMIC ───────────── */}
      <h2 className="text-center mb-4 font-weight-bold text-dark">Academic Experience</h2>
      <div className="timeline experience-wrapper mb-4">
        <div className="row">
          {/* MS */}
          <div className="col-md-6 timeline-block timeline-block-left">
            <div className="marker" />
            <div className="timeline-content">
              <h3 className="font-weight-bold text-dark">JAN 2024 – EXPECTED AUG 2025</h3>
              <p>
                <span className="font-weight-bold text-dark">M.S. Computer Science (GPA 3.73)</span><br />
                <em>Binghamton University, SUNY</em>
              </p>
              <p><strong>Key coursework:</strong> AI, ML, Data Mining, Cloud & Distributed Systems, Design Patterns, Algorithms.</p>
            </div>
          </div>
          {/* BE */}
          <div className="col-md-6 offset-md-6 timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content">
              <h3 className="font-weight-bold text-dark">AUG 2017 – AUG 2021</h3>
              <p>
                <span className="font-weight-bold text-dark">B.E. Electronics & Communication (GPA 3.3)</span><br />
                <em>PES Institute of Technology, Bangalore</em>
              </p>
              <p><strong>Core courses:</strong> Data Structures, OOP C++, Python Programming, Computer Networks.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ───────────── LEADERSHIP ───────────── */}
      <h2 className="text-center mb-4 font-weight-bold text-dark">Leadership Experience</h2>
      <div className="timeline experience-wrapper">
        <div className="row">
          <div className="col-md-6 timeline-block timeline-block-left">
            <div className="marker" />
            <div className="timeline-content">
              <h3 className="font-weight-bold text-dark">MAY 2019 – APR 2020</h3>
              <p>
                <span className="font-weight-bold text-dark">Publicity Head</span><br />
                <em>IEEE Solid-State Circuits & Photonics Society – PESIT</em>
              </p>
              <ul>
                <li>Devised social-media strategy and promo collateral, boosting event attendance.</li>
                <li>Partnered with fellow board members to deliver technical & non-technical events.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
