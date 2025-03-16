import React from 'react';
import { AuthFormProvider } from '../../contexts/AuthFormContext';
import AuthToggle from '../elements/AuthToggle';
import AuthForm from '../elements/AuthForm';
// Auth component to handle login/registration

const Auth = () => {
  return (
    <AuthFormProvider> {/* calls the aut form provider*/}
      <div id="auth" className="auth-container">
        <div className="auth-row">
          <div className="auth-col">
            <AuthToggle /> {/* this is the auth toggle component, a.k.a the toggle for the auth form */}
            <AuthForm /> {/* this is the auth form component, the form for the auth */}
          </div>
        </div>
      </div>
    </AuthFormProvider>
  );
};

export default Auth;
