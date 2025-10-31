import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

const About = () => (
  <div className="page">
    <h2>About This Dashboard</h2>
    <p>This is a responsive user dashboard built with React Router and styled using CSS.</p>
  </div>
);

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h1>User Dashboard</h1>
        <div>
          <Link to="/">Dashboard</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
