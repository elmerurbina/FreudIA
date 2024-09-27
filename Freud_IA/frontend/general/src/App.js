import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './interfaces/Dashboard/Dashboard';
import AgentesIA from './interfaces/AgentesIA/AgentesIA'; // Import AgentesIA component
import SignIn from './interfaces/Authentication/SignIn'; // Import SignIn component
import SignUp from './interfaces/Authentication/SignUp'; // Correctly import SignUp component
import SupportForm from "./interfaces/SupportForm/SupportForm";
import RecoverAccount from './interfaces/Authentication/RecoverAccount'; // Import RecoverAccount component
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
            <Route path="/sign-in" element={<SignIn />} /> {/* Route for Sign In */}
            <Route path="/sign-up" element={<SignUp />} /> {/* Route for Sign Up */}
            <Route path="/recover-account" element={<RecoverAccount />} /> {/* Route for Recover Account */}
            <Route path="/red-de-apoyo" element={<SupportForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
