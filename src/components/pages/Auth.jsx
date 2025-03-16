import React from 'react';
import { AuthFormProvider } from '../../contexts/AuthFormContext';
import AuthToggle from '../elements/AuthToggle';
import AuthForm from '../elements/AuthForm';

/**
 * This is a login/registration component that allows users to:Create a new account, login, switch between registration and login modes
 */
const Auth = () => {
  return (
    <AuthFormProvider>
      <div id="auth" className="auth-container">
        <div className="auth-row">
          <div className="auth-col">
            <AuthToggle />
            <AuthForm />
          </div>
        </div>
      </div>
    </AuthFormProvider>
  );
};

export default Auth;
