import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Topbar from './Topbar';
import Home from './Home';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import './App.css';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
