import React from 'react';
import Dashboard from './components/Dashboard';
import './styles/App.css'; 
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="App">
    <ToastContainer />
      <Dashboard />
    </div>
  );
};

export default App;
