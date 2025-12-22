import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Publications from './components/Publications';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import './App.css';

function App() {
  const HomePage = () => (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );

  return (
    <Router basename="/nirschl-lab-website">
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 