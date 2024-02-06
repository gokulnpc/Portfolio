import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import ProgressBar from "./components/ProgressBar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import MyExperience from './components/MyExperience';
import LicensesAndCertifications from './components/LicensesAndCertifications';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      <ProgressBar />
      <Introduction />
      <About />
      <Skills />
      <MyExperience />
      <LicensesAndCertifications />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
