import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RefProvider } from "./components/RefContext";
import { BackButtonProvider } from "./components/BackButtonContext";
import Navbar from "./components/Navbar";
// import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import AwardsCertifications from "./components/AwardsCertification";
// import AboutPage from "./components/AboutPage";
import FeaturedProjects from "./components/FeaturedProjects";
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <RefProvider>
        <BackButtonProvider>
          <Navbar />
          {/* <Header /> */}
          <AboutMe />
          <FeaturedProjects />
          <Services />
          <Experience />
          <Portfolio /> 
          <AwardsCertifications/> 
          <Footer /> 
        </BackButtonProvider>
      </RefProvider>
    </>
  );
}

export default App;
