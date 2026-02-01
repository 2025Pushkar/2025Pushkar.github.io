import React, { useState, useContext, useRef, useEffect } from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaCloud } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiNextdotjs, SiPostgresql, SiMysql, SiTableau, SiTailwindcss, SiMongodb, SiSinglestore } from 'react-icons/si';
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { MdDataUsage } from 'react-icons/md';
import { DiMaterializecss } from 'react-icons/di';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RefContext } from './RefContext';
import { BackButtonContext } from './BackButtonContext';


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
    { name: 'AWS', icon: <FaAws className="icon" /> },
    { name: 'Azure', icon: <VscAzure className="icon" /> },
    { name: 'GCP', icon: <FaCloud className="icon" /> },
    { name: 'Singlestore', icon: <SiSinglestore className="icon" /> },

  ],
  bi: [
    { name: 'Power BI', icon: <MdDataUsage className="icon" /> },
    { name: 'Tableau', icon: <SiTableau className="icon" /> },
    { name: 'GoodData', icon: <MdDataUsage className="icon" /> },
    { name: 'Azure DF', icon: <VscAzure className="icon" /> },
  ],
  databases: [
    { name: 'PostgreSQL', icon: <SiPostgresql className="icon" /> },
    { name: 'MySQL', icon: <SiMysql className="icon" /> },
    { name: 'Azure DB', icon: <MdDataUsage className="icon" /> },
    { name: 'MongoDB', icon: <SiMongodb className="icon" /> },
  ],
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('languages');
  const { languagesRef, webdevRef, cloudRef, biRef, databasesRef } = useContext(RefContext);
  const { setShowBackButton } = useContext(BackButtonContext);
  const servicesRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const currentRef = servicesRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBackButton(false);
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [setShowBackButton]);


  const handleClick = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setShowBackButton(true);
    }
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderButton = () => {
    let buttonText = '';
    let buttonRef = null;
    switch (activeTab) {
      case 'languages':
        buttonText = 'Discover my Software Development Projects';
        buttonRef = languagesRef;
        break;
      case 'webdev':
        buttonText = 'Explore my Web Development Projects';
        buttonRef = webdevRef;
        break;
      case 'cloud':
        buttonText = 'Check Out My Cloud Technology Projects';
        buttonRef = cloudRef;
        break;
      case 'bi':
        buttonText = 'Dive into My BI/ETL Projects';
        buttonRef = biRef;
        break;
      case 'databases':
        buttonText = 'Learn About My Database Projects';
        buttonRef = databasesRef;
        break;
      default:
        break;
    }

    return (
      <div className="d-flex justify-content-center mt-4">
        <button className={`btn btn-dark btn-circle ${isHovered ? 'hovered' : ''}`} onClick={() => handleClick(buttonRef)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <span className="small">{buttonText}</span>
        </button>
      </div>
    );
  };

  const renderContent = (category) => {
    return (
      <div className="row g-4">
        {data[category].map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="box">
              <div className="circle">{item.icon}</div>
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
        <div className="col-12 d-flex justify-content-center">
          {renderButton()}
        </div>
      </div>
    );
  };


  return (
    <div id="services" className="services py-5" ref={servicesRef}>
      <h1 className="text-center mb-5">Technical Skills</h1>
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
