import React from "react";
import bestSeller from "../image/bestseller.png";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>AUG 2021</h3>
            <p>
              Created a Udemy course which has been best seller for 3 months in
              a row{" "}
              <a
                href="https://www.udemy.com/course/build-a-portfolio-with-reactjs/"
                target="_blank"
                rel="noreferrer"
                title="https://www.udemy.com/course/build-a-portfolio-with-reactjs/"
              >
                Check it out here
              </a>
              <img src={bestSeller} alt="preview of course" style={{maxWidth: '100%'}}/>
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>FEB-PRESENT 2021</h3>
            <p>
              started my first job as a Full stack developer at Totally Inview
              Inc. (bowery lightning)
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>DEC-JAN 2020-2021</h3>
            <p>
              started side projects and finished Advanced CSS and Sass course
              (50 hours)
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>NOV-DEC 2020</h3>
            <p>
              Finished taking Advanced Javascript course and React course (110
              hours)
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>DEC 2021- PRESENT</h3>
            <p>
              Working as a Data Engineer(Azure)/Analyst(PowerBI,GoodData)/Software developer(reactjs) in KrtrimaiQ Cognitive Solutions.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>AUG 2021-DEC 2021</h3>
            <p>
              Worked as Implementation consultant in Alvaria Softwares, My work was mainly around dealing with Relational DataBase of our clients (Callcenters across globe).
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>MARCH 2021 - MAY 2021</h3>
            <p>
              During this 2 month period, I did my internship in Spookfish Innovations(Software developer) & Exposys Data Labs(ML Engineer).
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>AUG 2017 - AUG 2021</h3>
            <p>
              Graduated from PES SOUTH CAMPUS, BANGALORE with majors Electronics and Telecommunication Engineering. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
