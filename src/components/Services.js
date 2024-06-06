import React from 'react';
import DevIcon from "devicon-react-svg";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">Some of the technologies I use</h1>
      <div className="container">

        {/* Programming Languages */}
        <h2>Programming Languages</h2>
        <div className="row">

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><DevIcon className="icon" icon="java"/></div>
              <h3>Java</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><DevIcon className="icon" icon="python"/></div>
              <h3>Python</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><DevIcon className="icon" icon="cplusplus"/></div>
              <h3>C++</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><DevIcon className="icon" icon="javascript"/></div>
              <h3>JavaScript</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><DevIcon className="icon" icon="matlab"/></div>
              <h3>MATLAB</h3>
            </div>
          </div>
        </div>

        {/* Web Development */}
        <h2>Web Development</h2>
        <div className="row">

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><DevIcon className="icon" icon="html5"/></div>
              <h3>HTML5</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><DevIcon className="icon" icon="css3"/></div>
              <h3>CSS3</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><DevIcon className="icon" icon="react"/></div>
              <h3>React</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><DevIcon className="icon" icon="nextjs"/></div>
              <h3>Next.JS</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><DevIcon className="icon" icon="bootstrap"/></div>
              <h3>Bootstrap</h3>
            </div>
          </div>
        </div>

        {/* BI/ETL Tools */}
        <h2>Business Intelligence & ETL Tools</h2>
        <div className="row">

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><DevIcon className="icon" icon="powerbi"/></div>
              <h3>Power BI</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><DevIcon className="icon" icon="tableau"/></div>
              <h3>Tableau</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><DevIcon className="icon" icon="gooddata"/></div>
              <h3>GoodData BI</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><DevIcon className="icon" icon="azure"/></div>
              <h3>Azure Data Factory</h3>
            </div>
          </div>
        </div>

        {/* Databases */}
        <h2>Databases</h2>
        <div className="row">

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><DevIcon className="icon" icon="postgresql"/></div>
              <h3>PostgreSQL</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><DevIcon className="icon" icon="microsoftsqlserver"/></div>
              <h3>Microsoft SQL Server</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><DevIcon className="icon" icon="azure"/></div>
              <h3>Azure SQL Database</h3>
            </div>
          </div>

        </div>

      </div>
      <h5 className="moreP">and more...</h5>
    </div>
  )
}

export default Services;
