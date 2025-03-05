import React, { useState } from 'react';

const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementera registreringslogik här
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Register Account</h2>
        <form id="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={(e) => setFormData({...formData, fullname: e.target.value})}
              required
            />
          </div>
          {/* Lägg till resten av formulärfälten */}
          <button type="submit" className="btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal; 