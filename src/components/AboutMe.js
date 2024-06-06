import React from 'react';
import author from '../image/me.png'

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..."/>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About me</h1>
          <p>
           I'm Pushkar Wani, a graduate student from PES South Campus, Bangalore. I am currently employed as a Data Engineer/Analyst/Developer for KrtrimaiQ.ai.
          </p>
          <p>
          Welcome to my website!
          </p>
          <p>
          This website houses my personal and academic projects, which are a collection of ideas, experiences, and visions from the twisted mind of a Data Science enthusiast.
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default AboutMe
