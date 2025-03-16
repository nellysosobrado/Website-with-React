import React from 'react';
import { useAuthForm } from '../../contexts/AuthFormContext';
// this is the toggle button for the auth form when you are registering or logging in
const AuthToggle = () => {
  const { isRegistering, handleToggleMode } = useAuthForm();

  return (
    <div className="auth-header">
      <h2>{isRegistering ? 'Create Account' : 'Welcome Back'}</h2>
      <div className="auth-toggle">
        <button 
          onClick={() => handleToggleMode(true)} 
          className={`auth-btn ${isRegistering ? 'active' : 'outline'}`}
        >
          Register
        </button>
        <button 
          onClick={() => handleToggleMode(false)} 
          className={`auth-btn ${!isRegistering ? 'active' : 'outline'}`}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AuthToggle; 