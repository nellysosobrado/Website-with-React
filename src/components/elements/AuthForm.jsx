import React from 'react';
import { useAuthForm } from '../../contexts/AuthFormContext';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import LinkButton from './LinkButton';
// AuthForm component
const AuthForm = () => {
  const { 
    isRegistering, 
    formData, 
    errors, 
    submitStatus,
    setSubmitStatus,
    validateForm,
    handleChange 
  } = useAuthForm();
// useAuth is used to login
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('');

    if (validateForm()) {
      setSubmitStatus('processing');
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        login();
        setSubmitStatus('success');
        setTimeout(() => {
          navigate('/welcome');
        }, 1500);
      } catch (error) {
        setSubmitStatus('error');
      }
    }
  };
// return the form with the form data and the errors
  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {isRegistering && (
        <div className="form-group">
          <input 
            type="text"
            name="name"
            className={`form-input ${errors.name ? 'invalid' : ''}`}
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
      )}

      <div className="form-group">
        <input 
          type="email"
          name="email"
          className={`form-input ${errors.email ? 'invalid' : ''}`}
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="error-message">{errors.email}</div>}
      </div>

      <div className="form-group">
        <input 
          type="password"
          name="password"
          className={`form-input ${errors.password ? 'invalid' : ''}`}
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <div className="error-message">{errors.password}</div>}
      </div>

      {isRegistering && (
        <div className="form-group">
          <div className={`terms-check ${errors.terms ? 'invalid' : ''}`}>
            <input 
              type="checkbox"
              name="terms"
              className="terms-input"
              checked={formData.terms}
              onChange={handleChange}
              id="terms"
            />
            <label className="terms-label" htmlFor="terms">
              I agree to the <LinkButton to="/terms" text="Terms" color="transparent" minimal={true} />
            </label>
            {errors.terms && <div className="error-message">{errors.terms}</div>}
          </div>
        </div>
      )}

      <button 
        type="submit" 
        className={`submit-btn ${submitStatus === 'processing' ? 'processing' : ''}`}
        disabled={submitStatus === 'processing'}
      >
        {submitStatus === 'processing' ? (
          <>
            <span className="spinner"></span>
            Processing...
          </>
        ) : (
          <>
            <i className={`bi ${isRegistering ? 'bi-person-plus' : 'bi-box-arrow-in-right'}`}></i>
            {isRegistering ? 'Create Account' : 'Login'}
          </>
        )}
      </button>

      {submitStatus === 'success' && (
        <div className="status-message success">
          {isRegistering ? 'Registration successful!' : 'Login successful!'}
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="status-message error">
          An error occurred. Please try again.
        </div>
      )}
    </form>
  );
};

export default AuthForm; 