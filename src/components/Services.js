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
    { name: 'Tailwind', icon: <SiTailwindcss className="icon" /> },
  ],
  cloud: [
    { name: 'AWS', icon: <SiAmazonaws className="icon" /> },
    { name: 'Azure', icon: <SiMicrosoftazure className="icon" /> },
    { name: 'GCP', icon: <FaCloud className="icon" /> },
  ],
  bi: [
    { name: 'Power BI', icon: <SiPowerbi className="icon" /> },
    { name: 'Tableau', icon: <SiTableau className="icon" /> },
    { name: 'GoodData', icon: <MdDataUsage className="icon" /> },
    { name: 'Azure DF', icon: <SiMicrosoftazure className="icon" /> },
  ],
  databases: [
    { name: 'PostgreSQL', icon: <SiPostgresql className="icon" /> },
    { name: 'MySQL', icon: <SiMysql className="icon" /> },
    { name: 'Azure DB', icon: <SiMicrosoftaccess className="icon" /> },
    { name: 'MongoDB', icon: <SiMongodb className="icon" /> },
  ],
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const renderContent = (category) => {
    return data[category].map((item, index) => (
      <div key={index} className="col-md-6 col-lg-4 col-xl-3 col-sm-6 col-12 mb-4">
        <div className="box">
          <div className="circle">{item.icon}</div>
          <h3>{item.name}</h3>
        </div>
      </div>
    ));
  };

  return (
    <div id="services" className="services py-5">
      <h1 className="text-center mb-5">Some of the technologies I use</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
            <div className="d-none d-md-block">
              <ul className="nav flex-column custom-nav-pills">
                <li className="nav-item mb-2">
                  <button
                    className={`btn btn-light btn-circle ${activeTab === 'languages' ? 'active px-2' : ''}`}
                    onClick={() => setActiveTab('languages')}
                  >
                    Programming Languages
                  </button>
                </li>
                <li className="nav-item mb-2">
                  <button
                    className={`btn btn-light btn-circle ${activeTab === 'webdev' ? 'active px-2' : ''}`}
                    onClick={() => setActiveTab('webdev')}
                  >
                    Web Development
                  </button>
                </li>
                <li className="nav-item mb-2">
                  <button
                    className={`btn btn-light btn-circle ${activeTab === 'cloud' ? 'active px-2' : ''}`}
                    onClick={() => setActiveTab('cloud')}
                  >
                    Cloud Technologies
                  </button>
                </li>
                <li className="nav-item mb-2">
                  <button
                    className={`btn btn-light btn-circle ${activeTab === 'bi' ? 'active px-2' : ''}`}
                    onClick={() => setActiveTab('bi')}
                  >
                    BI/ETL Tools
                  </button>
                </li>
                <li className="nav-item mb-2">
                  <button
                    className={`btn btn-light btn-circle ${activeTab === 'databases' ? 'active px-2' : ''}`}
                    onClick={() => setActiveTab('databases')}
                  >
                    Databases
                  </button>
                </li>
              </ul>
            </div>
            {/* Horizontal tabs for mobile view */}
            <ul className="nav nav-pills d-flex d-md-none justify-content-around custom-nav-pills-mobile mb-4">
              <li className="nav-item">
                <button
                  className={`btn btn-light btn-circle ${activeTab === 'languages' ? 'active p-2' : ''}`}
                  onClick={() => setActiveTab('languages')}
                >
                  Languages
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`btn btn-light btn-circle ${activeTab === 'webdev' ? 'active p-2' : ''}`}
                  onClick={() => setActiveTab('webdev')}
                >
                  Web Dev
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`btn btn-light btn-circle ${activeTab === 'cloud' ? 'active p-2' : ''}`}
                  onClick={() => setActiveTab('cloud')}
                >
                  Cloud
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`btn btn-light btn-circle ${activeTab === 'bi' ? 'active p-2' : ''}`}
                  onClick={() => setActiveTab('bi')}
                >
                  BI/ETL
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`btn btn-light btn-circle ${activeTab === 'databases' ? 'active p-2' : ''}`}
                  onClick={() => setActiveTab('databases')}
                >
                  DataBase
                </button>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="row">
              {renderContent(activeTab)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
