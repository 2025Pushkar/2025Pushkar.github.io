import React, { useState } from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaCloud } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiNextdotjs, SiMicrosoftaccess, SiPostgresql, SiMysql, SiPowerbi, SiTableau, SiMicrosoftazure, SiTailwindcss, SiAmazonaws, SiMongodb } from 'react-icons/si';
import { MdDataUsage } from 'react-icons/md';
import { DiMaterializecss } from 'react-icons/di';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = {
  languages: [
    { name: 'Java', icon: <FaJava className="icon" /> },
    { name: 'Python', icon: <FaPython className="icon" /> },
    { name: 'C++', icon: <SiCplusplus className="icon" /> },
    { name: 'JavaScript', icon: <SiJavascript className="icon" /> },
  ],
  webdev: [
    { name: 'HTML5', icon: <FaHtml5 className="icon" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="icon" /> },
    { name: 'React.JS', icon: <FaReact className="icon" /> },
    { name: 'Next.JS', icon: <SiNextdotjs className="icon" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="icon" /> },
    { name: 'Material-UI', icon: <DiMaterializecss className="icon" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="icon" /> },
  ],
  cloud: [
    { name: 'AWS', icon: <SiAmazonaws className="icon" /> },
    { name: 'Azure', icon: <SiMicrosoftazure className="icon" /> },
    { name: 'GCP', icon: <FaCloud className="icon" /> },
  ],
  bi: [
    { name: 'Power BI', icon: <SiPowerbi className="icon" /> },
    { name: 'Tableau', icon: <SiTableau className="icon" /> },
    { name: 'GoodData BI', icon: <MdDataUsage className="icon" /> },
    { name: 'ADF', icon: <SiMicrosoftazure className="icon" /> },
  ],
  databases: [
    { name: 'PostgreSQL', icon: <SiPostgresql className="icon" /> },
    { name: 'MySQL', icon: <SiMysql className="icon" /> },
    { name: 'Azure SQL DB', icon: <SiMicrosoftaccess className="icon" /> },
    { name: 'MongoDB', icon: <SiMongodb className="icon" /> },
  ],
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const renderContent = (category) => {
    return data[category].map((item, index) => (
      <div key={index} className="col-md-3 col-sm-6 col-12 mb-4">
        <div className="box">
          <div className="circle">{item.icon}</div>
          <h3>{item.name}</h3>
        </div>
      </div>
    ));
  };

  return (
    <div id="services" className="services">
      <h1 className="py-5">Some of the technologies I use</h1>
      <div className="container">
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <button className={`nav-link ${activeTab === 'languages' ? 'active' : ''}`} onClick={() => setActiveTab('languages')}>Programming Languages</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === 'webdev' ? 'active' : ''}`} onClick={() => setActiveTab('webdev')}>Web Development</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === 'cloud' ? 'active' : ''}`} onClick={() => setActiveTab('cloud')}>Cloud Technologies</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === 'bi' ? 'active' : ''}`} onClick={() => setActiveTab('bi')}>BI/ETL Tools</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === 'databases' ? 'active' : ''}`} onClick={() => setActiveTab('databases')}>Databases</button>
          </li>
        </ul>
        <div className="py-4">
          <div className="row d-flex justify-content-around">
            {renderContent(activeTab)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
