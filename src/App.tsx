// src/App.tsx
import React from 'react';
import './App.css';
import Navbar from './components/core/Navbar/Navbar';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default App;
