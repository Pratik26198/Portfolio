// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = ({ theme, toggleTheme }) => {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img src="/assets/profile.jpg" alt="Pratik Shahane" />
        <h3 className="mt-2">Pratik Shahane</h3>
        <p>Full Stack Developer</p>
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {theme === 'day' ? 'Night 🌙' : 'Day 🌞'}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
