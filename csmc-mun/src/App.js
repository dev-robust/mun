import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Partners from './pages/Partners';
import PreparationResources from './pages/Preparation-resources';
import Committees from './pages/Committees';
import ContactUs from './pages/ContactUs';
import Resolutions from './pages/Resolutions';
import Registration from './pages/Registration';
import IndividualDelegate from "./pages/IndividualDelegate";
import SchoolDelegate from "./pages/SchoolDelegate";
function App() {
  return (
    <Router>
      <>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/preparation" element={<PreparationResources />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/resolutions" element={<Resolutions />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/individual-delegate" element={<IndividualDelegate />} />
          <Route path="/school-delegation" element={<SchoolDelegate />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
