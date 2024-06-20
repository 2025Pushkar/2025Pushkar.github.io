import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from 'react-particles-js';
import { RefProvider } from "./components/RefContext";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
// import DigitalAssistant from "./components/DigitalAssistant";

function App() {
  return (
    <>
      <RefProvider>
        <Navbar />
        <Header />
        <AboutMe />
        <Services />
        <Experience />
        <Portfolio />
        <Footer />
      </RefProvider>
    </>
  );
}

export default App;
