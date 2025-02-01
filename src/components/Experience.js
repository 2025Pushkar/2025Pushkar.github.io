import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1 className="font-weight-bold text-dark">Experience</h1>
      </div>
      <div className="container">
        {/* Professional Experience */}
        <h2 className="text-center mb-4 font-weight-bold text-dark">Professional Experience</h2>
        <div className="timeline experience-wrapper mb-4">
          <div className="row">
            <div className="col-md-6 timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="font-weight-bold text-dark">AUG 2024 - PRESENT</h3>
                <p>
                  <span className="font-weight-bold text-dark">Software Web Developer Graduate Intern</span><br />
                  <em>SUNY Binghamton University - Watson Career and Alumni Connections Office</em>
                </p>
                <ul>
                  <li>Develop a scalable micro-internship platform for computer science students, implementing a full-stack solution using Next.js and TypeScript.</li>
                  <li>Optimize relational database models with PostgreSQL, enhancing data storage efficiency and workflow scalability.</li>
                  <li>Integrate Binghamton University's two-factor authentication (2FA) system to ensure robust user security.</li>
                  <li>Deploy machine learning models in Python to power candidate ranking algorithms, streamlining the shortlisting process and improving recruiter efficiency.</li>
                </ul>

              </div>
            </div>
            <div className="col-md-6 offset-md-6 timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="font-weight-bold text-dark">DEC 2021 - DEC 2023</h3>
                <p>
                  <span className="font-weight-bold text-dark">Software Data Engineer</span><br />
                  <em>KrtrimaIQ Cognitive Solutions</em>
                </p>
                <ul>
                  <li>Developed and optimized the company’s website using Next.js, reducing latency and improving load times by 20% through server-side processing.</li>
                  <li>Designed and deployed digital assistants, including FAQ and Business Intelligence chatbots, leveraging Generative AI and Next.js to enhance customer engagement by 25%.</li>
                  <li>Created interactive business intelligence dashboards using React.js and Power BI, delivering actionable insights for decision-making.</li>
                  <li>Implemented SEO best practices in Next.js by optimizing metadata and integrating Google Analytics, increasing website traffic by 15%.</li>
                  <li>Developed ETL pipelines in Azure Data Factory and integrated Azure Machine Learning for Type 2 Slowly Changing Dimensions (SCD) and sales forecasting.</li>
                </ul>
              </div>
            </div>


            <div className="col-md-6 timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="font-weight-bold text-dark">SEP 2021 - DEC 2021</h3>
                <p>
                  <span className="font-weight-bold text-dark">Implementation Consultant</span><br />
                  <em>Alvaria Inc.</em>
                </p>
                <ul>
                  <li>Worked on Workforce Management Systems, implementing and optimizing cloud-based web services.</li>
                  <li>Developed and executed complex SQL queries for data analysis, ensuring data integrity and performance optimization in traditional DBMS environments.</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 offset-md-6 timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="font-weight-bold text-dark">MAR 2021 - APR 2021</h3>
                <p>
                  <span className="font-weight-bold text-dark">
                    Software Developer Intern
                  </span><br />
                  <em>Spookfish Innovations</em>
                </p>
                <ul>
                  <li>Designed and implemented sorting algorithms in C++ to categorize coins based on size and weight with 95% accuracy.</li>
                  <li>Developed machine learning models with cross-validation, achieving 95% prediction accuracy for coin classification.</li>
                  <li>Enhanced operational efficiency by integrating data-driven machine learning solutions into coin-sorting systems.</li>
                </ul>
              </div>
            </div>


          </div>
        </div>


        {/* Academic Experience */}
        <h2 className="text-center mb-4 font-weight-bold text-dark">Academic Experience</h2>
        <div className="timeline experience-wrapper mb-4">
          <div className="row">

            <div className="col-md-6 timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="font-weight-bold text-dark">JAN 2024 - EXPECTED DEC 2025</h3>
                <p>
                  <span className="font-weight-bold text-dark">Master of Science in Computer Science</span><br />
                  <em>Binghamton University, State University of New York (SUNY)</em>
                </p>
                <ul>
                  <li>Cumulative GPA: 3.76/4.00</li>
                  <li>Relevant Coursework:
                    <ul>
                      <li><strong>Artificial Intelligence & Machine Learning:</strong>
                        <ul>
                          <li>Intro to Artificial Intelligence</li>
                          <li>Intro to Machine Learning</li>
                          <li>Introduction To Data Mining</li>
                        </ul>
                      </li>
                      <li><strong>Cloud & Distributed Systems:</strong>
                        <ul>
                          <li>Intro to Cloud Computing</li>
                          <li>Intro To Distributed Systems</li>
                        </ul>
                      </li>
                      <li><strong>Software Engineering & Programming:</strong>
                        <ul>
                          <li>Design Patterns</li>
                          <li>Systems Programming</li>
                          <li>Programming Languages</li>
                          <li>Programming Systems and Tools</li>
                        </ul>
                      </li>
                      <li><strong>Algorithms & Theoretical CS:</strong>
                        <ul>
                          <li>Design & Analysis of Computer Algorithms</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 offset-md-6 timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="font-weight-bold text-dark">AUG 2017 - AUG 2021</h3>
                <p>
                  <span className="font-weight-bold text-dark">Bachelor of Engineering in Electronics and Communication</span><br />
                  <em>PES Institute of Technology, Bangalore, India</em>
                </p>
                <ul>
                  <li>Cumulative GPA: 3.27/4.00</li>
                  <li>Relevant Coursework: Data Structures and Algorithms, Computer Networks, Object-Oriented Programming using C++, Python Programming.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        {/* Leadership Experience */}
        <h2 className="text-center mb-4 font-weight-bold text-dark">Leadership Experience</h2>
        <div className="timeline experience-wrapper mb-4">
          <div className="row">
            <div className="col-md-6 timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="font-weight-bold text-dark">MAY 2019 - APR 2020</h3>
                <p>
                  <span className="font-weight-bold text-dark">Publicity Head</span><br />
                  <em>IEEE Solid States and Photonics Society</em><br />
                  <span>PES Institute of Technology, Bangalore, India</span>
                </p>
                <ul>
                  <li>Developed and executed marketing strategies, including social media campaigns and promotional materials.</li>
                  <li>Collaborated with other IEEE board members to plan and organize successful technical and non-technical events.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
