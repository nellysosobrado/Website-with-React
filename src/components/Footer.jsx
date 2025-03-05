import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        © {new Date().getFullYear()} Silicon Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 