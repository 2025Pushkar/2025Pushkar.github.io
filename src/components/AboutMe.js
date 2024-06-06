import React from 'react';
import author from '../image/me.png'
import SectionTitle from './vanilla/SectionTitle';

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <section id="about">
        <div>
          <SectionTitle title="About" />
          <div className="flex w-full gap-10 items-center sm:flex-col">
            <div className="about-text flex flex-col gap-5" id="outer-div">
              <p className="text-fourth font-mono">
                <i className="ri-play-line"></i>
                Hi, I'm{" "}
                <span className="text-highlight-main font-mono">
                  Pushkar Pramod Wani,
                  a tech enthusiast
                </span>
                {" "}I create versatile software solutions that combine cutting-edge technology with practical functionality.
              </p>

              <p className="text-fourth font-mono">
                <i className="ri-play-line"></i>
                I have a deep passion for Data Science and Software Development, always eager to explore new possibilities in these fields. I believe that a great data scientist is also a fantastic software developer, capable of solving complex problems and engineering innovative solutions.
              </p>

              <p className="text-fourth font-mono">
                <i className="ri-play-line"></i>
                I am currently pursuing a Master's degree in Computer Science at{" "}
                <a href="https://www.binghamton.edu/">
                  <span className="text-highlight font-mono">
                    Binghamton University, NY
                  </span>
                </a>{" "}
                with a cumulative GPA of 3.76/4.00.
              </p>
              <p className="text-fourth font-mono">
                <i className="ri-play-line"></i>
                I'm from{" "}
                <a href="https://www.google.com/maps/place/Bangalore,+Karnataka,+India/@12.9539975,77.6309395,11z/data=!3m1!4b1!4m6!3m5!1s0x3bae1670cba3ed5d:0x4b8d58bcbfa372b6!8m2!3d12.9715987!4d77.5945627!16zL20vMDMwczA?entry=ttu">
                  <span className="text-highlight font-mono">Bangalore, India,</span>
                </a>{" "}
                where I earned my Bachelor's degree in Electronics and Communication from{" "}
                <a href="https://pes.edu/">
                  <span className="text-highlight font-mono">
                    PES Institute of Technology
                  </span>
                </a>{" "}
                with a cumulative GPA of 7.72/10.
              </p>
              <p className="text-fourth font-mono">
                <i className="ri-play-line"></i>
                I have extensive experience in software development and data engineering. I worked as a Data Engineer at KrtrimaIQ Cognitive Solutions, and as an Implementation Consultant at Alvaria INC.
              </p>
              <p className="text-fourth font-mono">
                <i className="ri-play-line"></i>
                My technical skills include Java, Python, C++, JavaScript, React.JS, Next.JS, MATLAB, Power BI, Tableau, GoodData BI, Azure Data Factory, PostgreSQL, Azure SQL Database, and Microsoft SQL Server.
              </p>
              <p className="text-fourth font-mono">
                <i className="ri-play-line"></i>
                I also served as the Publicity Head for the IEEE Solid States and Photonics Society during my undergraduate studies at PES Institute of Technology, where I developed and executed marketing strategies and organized events.
              </p>

            </div>
            <div className="about-me rounded-full border border-fourth">
              <img
                src={author}
                alt="Pushkar's Portrait"
                className="rounded-full"
                style={{
                  minWidth: "100px",
                  minHeight: "100px",
                  maxWidth: "300px",
                  maxHeight: "300px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutMe
