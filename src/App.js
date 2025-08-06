import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Homepage from './pages/Homepage';
import About from './pages/About';
import DonateBooks from './pages/DonateBooks';
import RequestBooks from './pages/RequestBooks';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App min-h-screen relative">
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<DonateBooks />} />
            <Route path="/request" element={<RequestBooks />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;