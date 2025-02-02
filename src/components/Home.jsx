// src/components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1 className="display-4">Hello, I'm Pratik</h1>
        <p className="lead">I am a Full Stack Developer who can build modern, responsive & scalable web applications  using various tech  stacks like ReactJS, NodeJS (MERN), SpringBoot, .Net Core Web API.</p>
        <a href="#projects" className="btn btn-primary btn-lg">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
