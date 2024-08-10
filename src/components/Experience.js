import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1 className="font-weight-bold text-dark">Experience</h1>
      </div>
      <div className="container">

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
                  <em>Binghamton University, State University of New York</em>
                </p>
                <ul>
                  <li>Cumulative GPA: 3.76/4.00</li>
                  <li>Relevant Coursework: Data Structures and Algorithms, programming languages, Machine Learning, Programming Systems and Tools, Web Development.</li>
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
                  <em>Binghamton University - Watson Career and Alumni Connections Office</em>
                </p>
                <ul>
                  <li>Building a micro internship website for the university, using Next.js and PostgreSQL DB.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 offset-md-6 timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="font-weight-bold text-dark">DEC 2021 - DEC 2023</h3>
                <p>
                  <span className="font-weight-bold text-dark">Data Engineer</span><br />
                  <em>KrtrimaIQ Cognitive Solutions</em>
                </p>
                <ul>
                  <li>Developed Business Intelligence solutions and Digital Assistants using Next.JS.</li>
                  <li>Built the company’s website from scratch using Next.js, implementing SEO best practices and integrating Google Analytics.</li>
                  <li>Specialized in React.JS for effective data visualization and Python for data handling and analysis.</li>
                  <li>Handled data with Python for analysis and building in-house authentication modules for proprietary products.</li>
                  <li>Managed ETL processes in Azure Data Factory, ensuring best practices and data integrity.</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="font-weight-bold text-dark">SEP 2021 - DEC 2021</h3>
                <p>
                  <span className="font-weight-bold text-dark">Implementation Consultant</span><br />
                  <em>Alvaria INC</em>
                </p>
                <ul>
                  <li>Worked on Workforce Management Systems and cloud-based web services.</li>
                  <li>Wrote complex SQL and NoSQL scripts for data analysis in traditional DBMS environments.</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 offset-md-6 timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="font-weight-bold text-dark">MAR 2021 - APR 2021</h3>
                <p>
                  <span className="font-weight-bold text-dark">
                  Software Developer Intern</span><br />
                  <em>Spookfish Innovations</em>
                </p>
                <ul>
                  <li>Automated a coin sorting machine using C++, showcasing proficiency in programming and software automation.</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="font-weight-bold text-dark">MAR 2021 - APR 2021</h3>
                <p>
                  <span className="font-weight-bold text-dark">Machine Learning Intern</span><br />
                  <em>Exposys Data Labs</em>
                </p>
                <ul>
                  <li>Deployed machine learning models and contributed to data-driven solutions.</li>
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
