import React from 'react';
import { useApp } from '../../context/AppContext';

const TermsModal = () => {
  const { isTermsModalOpen, setIsTermsModalOpen } = useApp();

  const toggleTermsModal = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsTermsModalOpen(false);
  };

  if (!isTermsModalOpen) return null;

  return (
    <div id="terms-modal" className="modal">
      <div className="modal-content terms-content">
        <span className="close-button" onClick={toggleTermsModal}>&times;</span>
        <h2>Allmänna Avtalsvillkor</h2>
        <div className="terms-text">
          <h3>1. Introduktion</h3>
          <p>Välkommen till våra allmänna avtalsvillkor. Genom att använda vår tjänst godkänner du dessa villkor.</p>
          
          <h3>2. Användarvillkor</h3>
          <p>Du måste vara minst 18 år för att använda tjänsten. Du ansvarar för att hålla dina inloggningsuppgifter säkra.</p>
          
          <h3>3. Integritet</h3>
          <p>Vi värnar om din integritet och behandlar dina personuppgifter i enlighet med GDPR.</p>
          
          <h3>4. Ändringar i villkoren</h3>
          <p>Vi förbehåller oss rätten att ändra dessa villkor när som helst. Större ändringar kommer att meddelas i förväg.</p>
        </div>
        <button className="btn" onClick={toggleTermsModal}>Stäng</button>
      </div>
    </div>
  );
};

export default TermsModal; 