import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../elements/LinkButton';

const Welcome = () => {
// this is the welcome page for the user after they have logged in
  const userName = "User"; // Placeholder, replace with actual username

  return (
    <div id="welcome" className="welcome-container">
      <div className="welcome-row">
        <div className="welcome-col">
          <div className="welcome-card">
            <div className="welcome-icon">
              <i className="bi bi-person-check-fill"></i>
            </div>
            
            <h1 className="welcome-title">Welcome back, {userName}!</h1>
            
            <div className="welcome-message">
              <div className="welcome-message-inner">
                <p className="welcome-text">
                  We're glad to see you again. Your account is now active and ready to use.
                </p>
              </div>
            </div>

            <div className="welcome-buttons">
              <LinkButton 
                to="/dashboard" 
                text="Go to Dashboard" 
                color="purple" 
                icon="bi bi-columns-gap"
              />
              
              <LinkButton 
                to="/profile" 
                text="View Profile" 
                color="transparent" 
                icon="bi bi-person"
              />
            </div>
          </div>

          <div className="stats-container">
            <div className="stats-item">
              <div className="stats-card">
                <i className="bi bi-calendar3"></i>
                <h3>Last Login</h3>
                <p>Today at 10:30 AM</p>
              </div>
            </div>
            <div className="stats-item">
              <div className="stats-card">
                <i className="bi bi-bell"></i>
                <h3>Notifications</h3>
                <p>3 unread messages</p>
              </div>
            </div>
            <div className="stats-item">
              <div className="stats-card">
                <i className="bi bi-gear"></i>
                <h3>Settings</h3>
                <p>Account up to date</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome; 