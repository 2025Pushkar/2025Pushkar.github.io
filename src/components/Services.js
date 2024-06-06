import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaDatabase } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiNextdotjs, SiMicrosoftsqlserver, SiPostgresql, SiPowerbi, SiTableau, SiAzuredevops, SiMaterialui, SiTailwindcss, SiBootstrap } from 'react-icons/si';
import { MdDataUsage, MdEngineering } from 'react-icons/md'; // Using generic icons for MATLAB and GoodData
import { DiMaterializecss } from 'react-icons/di';

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">Some of the technologies I use</h1>
      <div className="container">

        {/* Programming Languages */}
        <h2>Programming Languages</h2>
        <div className="row d-flex justify-content-around">

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FaJava className="icon" /></div>
              <h3>Java</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FaPython className="icon" /></div>
              <h3>Python</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><SiCplusplus className="icon" /></div>
              <h3>C++</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><SiJavascript className="icon" /></div>
              <h3>JavaScript</h3>
            </div>
          </div>
        </div>

        {/* Web Development */}
        <h2>Web Development</h2>
        <div className="row d-flex justify-content-around">

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FaHtml5 className="icon" /></div>
              <h3>HTML5</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FaCss3Alt className="icon" /></div>
              <h3>CSS3</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FaReact className="icon" /></div>
              <h3>React</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><SiNextdotjs className="icon" /></div>
              <h3>Next.JS</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FaBootstrap className="icon" /></div>
              <h3>Bootstrap</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><DiMaterializecss className="icon" /></div>
              <h3>Material-UI</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><SiTailwindcss className="icon" /></div>
              <h3>Tailwind CSS</h3>
            </div>
          </div>
        </div>


        {/* BI/ETL Tools */}
        <h2>Business Intelligence & ETL Tools</h2>
        <div className="row d-flex justify-content-around">

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><SiPowerbi className="icon" /></div>
              <h3>Power BI</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><SiTableau className="icon" /></div>
              <h3>Tableau</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><MdDataUsage className="icon" /></div>
              <h3>GoodData BI</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><SiAzuredevops className="icon" /></div>
              <h3>Azure Data Factory</h3>
            </div>
          </div>
        </div>

        {/* Databases */}
        <h2>Databases</h2>
        <div className="row d-flex justify-content-around">

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><SiPostgresql className="icon" /></div>
              <h3>PostgreSQL</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><SiMicrosoftsqlserver className="icon" /></div>
              <h3>Microsoft SQL Server</h3>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><SiAzuredevops className="icon" /></div>
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
