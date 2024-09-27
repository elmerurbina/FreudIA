// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './interfaces/Dashboard/Dashboard';
import AgentesIA from './interfaces/AgentesIA/AgentesIA'; // Import AgentesIA component
import './App.css'; // Optional: Global styles for the app

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} /> {/* Home route */}
            <Route path="/agentes-ia" element={<AgentesIA />} /> {/* Route for AgentesIA */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;