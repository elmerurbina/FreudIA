import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import Dashboard from './interfaces/Dashboard'; // Import your Dashboard component
import Dashboard from './interfaces/Dashboard/Dashboard'; // Import your Dashboard component
//import UserProfile from './interfaces/UserProfile/UserProfile'; // Import your UserProfile component
//import Settings from './interfaces/Settings/Settings'; // Import your Settings component

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard Route */}

      {/* You can add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
