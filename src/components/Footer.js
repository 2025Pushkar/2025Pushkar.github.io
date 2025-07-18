import React from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Footer = () => {
  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="footer" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>SUNY Binghamton, NY, USA</p>
            </div>
            <div className="d-flex">
              <a href="tel:+16072979920">+1 (607) 297-9920</a>
            </div>
            <div className="d-flex">
              <p>pwani@binghamton.edu</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                {/* <Link smooth={true} to="home" className="footer-nav">Home</Link>
                <br /> */}
                <Link smooth={true} to="about" className="footer-nav">About me</Link>
                <br />
                <Link smooth={true} to="featuredProjects" className="footer-nav">Featured Projects</Link>
                <br />
                <Link smooth={true} to="services" className="footer-nav">Technologies</Link>
                <br />
              </div>
              <div className="col">
                <Link smooth={true} to="experience" className="footer-nav">Experience</Link>
                <br />
                <Link smooth={true} to="portfolio" className="footer-nav">Portfolio</Link>
                <br />
                <Link smooth={true} to="certifications" className="footer-nav">Achievements</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FaLinkedin
                size={36}
                onClick={() => handleIconClick('https://www.linkedin.com/in/pushkar-wani-44bb10190/')}
                style={{ cursor: 'pointer', color: '#0077b5', margin: '0 10px' }}
              />
              <FaGithub
                size={36}
                onClick={() => handleIconClick('https://github.com/2015pushkar')}
                style={{ cursor: 'pointer', color: '#ffff', margin: '0 10px' }}
              />
              <SiGeeksforgeeks
                size={36}
                onClick={() => handleIconClick('https://www.geeksforgeeks.org/user/pushkarwani2015/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user')}
                style={{ cursor: 'pointer', color: '#28a745', margin: '0 10px' }}
              />
              <SiLeetcode
                size={36}
                onClick={() => handleIconClick('https://leetcode.com/u/pushkarwani/')}
                style={{ cursor: 'pointer', color: '#FFA116', margin: '0 10px' }}
              />
              <FaInstagram
                size={36}
                onClick={() => handleIconClick('https://www.instagram.com/pushkar_4o4/')}
                style={{ cursor: 'pointer', color: '#E1306C', margin: '0 10px' }}
              />
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp; All rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
