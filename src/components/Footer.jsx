// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Pratik Shahane. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
