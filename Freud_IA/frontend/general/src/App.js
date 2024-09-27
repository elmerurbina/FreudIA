import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './interfaces/Dashboard/Dashboard';
import './App.css'; // Optional: Global styles for the app

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Dashboard /> {/* Render the Dashboard component */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
