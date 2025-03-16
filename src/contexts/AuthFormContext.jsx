import React, { createContext, useContext, useState } from 'react';

const AuthFormContext = createContext(null);

export const AuthFormProvider = ({ children }) => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    terms: false
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    const newErrors = {};

    if (isRegistering) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      if (!formData.terms) {
        newErrors.terms = 'You must accept the terms';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleToggleMode = (mode) => {
    setIsRegistering(mode);
    setErrors({});
    setFormData({
      name: '',
      email: '',
      password: '',
      terms: false
    });
  };

  return (
    <AuthFormContext.Provider value={{
      isRegistering,
      formData,
      errors,
      submitStatus,
      setSubmitStatus,
      validateForm,
      handleChange,
      handleToggleMode
    }}>
      {children}
    </AuthFormContext.Provider>
  );
};

export const useAuthForm = () => {
  const context = useContext(AuthFormContext);
  if (!context) {
    throw new Error('useAuthForm must be used within an AuthFormProvider');
  }
  return context;
}; 