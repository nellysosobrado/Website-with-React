import React from 'react';
import { AppProvider } from './context/AppContext';
import HomePage from './pages/HomePage';
import "./index.css";

const App = () => {
  return (
    <AppProvider>
      <div className="app">
        <HomePage />
      </div>
    </AppProvider>
  );
};

export default App;
