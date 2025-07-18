import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import './App.css'; // Import your main CSS file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        {/* <Link smooth={true} to="home" offset={-50} className="navbar-brand" href="#">Pushkar Wani</Link> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item active">
              <Link smooth={true} to="home" offset={-50} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li> */}
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-50} className="nav-link" href="#">About me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="featuredProjects" offset={-50} className="nav-link" href="#">Featured Projects</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="services" offset={-50} className="nav-link" href="#">Technologies</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="experience" offset={-50} className="nav-link" href="#">Experience</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" offset={-50} className="nav-link" href="#">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="certifications" offset={-50} className="nav-link" href="#">Achievements</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
