// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <p>
          If you'd like to connect, feel free to reach out via email or follow me on social media.
        </p>
        <div className="d-flex gap-3">
          <a href="mailto:pratik26198@gmail.com" className="btn btn-outline-dark">
            <img
              src="/assets/email.png"
              alt="Email"
              style={{ width: '24px', marginRight: '8px' }}
            />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/pratik-shahane-b3a9a51b9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
          >
            <img
              src="/assets/linkedin.png"
              alt="LinkedIn"
              style={{ width: '24px', marginRight: '8px' }}
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/pratik26198"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
          >
            <img
              src="/assets/github.png"
              alt="GitHub"
              style={{ width: '24px', marginRight: '8px' }}
            />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
