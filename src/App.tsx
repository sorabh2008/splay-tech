// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import {Home} from './components/Home';
import {ContactUs} from './components/ContactUs';
import {AboutUs} from './components/AboutUs';
import {OurValues} from './components/OurValues';
import {OurTeam} from './components/OurTeam';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/values" element={<OurValues />} />
        <Route path="/team" element={<OurTeam />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
