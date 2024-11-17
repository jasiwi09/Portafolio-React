import './App.css';
import Navbar from './components/Navbar';
import Personal from './components/Personal';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Newsletter from './pages/Newsletter';

import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";

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
