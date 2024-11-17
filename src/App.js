import './App.css';
import Navbar from './components/Navbar.js';
import Personal from './components/Personal.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
import Newsletter from './pages/Newsletter.js';

import Footer from './components/Footer.js';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <Navbar/>
      <div>
      <Routes>        
        <Route path="/"  element={<Personal />} />
        <Route path="/projects"  element={<Projects />}/>
        <Route path="/contact"  element={<Contact />}/>
        <Route path="/newsletter"  element={<Newsletter />}/>
      </Routes>
    </div>
    <Footer />
    </>
  );
}


export default App;
