import React, { useState } from 'react';

const Projects = () => {
  const [modalData, setModalData] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'EcoMart',
      description:
        'An eco-friendly online platform for sustainable products. Built with modern web technologies.',
      image: '/assets/ecomart.jpg',
      link: 'https://github.com/Pratik26198/MERN-Projects/tree/main/Mini%20Project%20(Sustainable%20Product%20Marketplace)',
    },

    {
      id: 2,
      title: 'Elegant using Springboot',
      description:
        'An E-Commerce Platform for Jewellary Products Built using React for Front End, MySQL for Database & SpringBoot for Backend.',
      image: '/assets/springbootproject.jpg',
      link: 'https://github.com/Pratik26198/SpringBoot-Project',
    },

    {
      id: 3,
      title: 'Elegant using .Net Core Web API',
      description:
        'An E-Commerce Platform for Jewellary Products Built using React for Front End, MySQL for Database & .Net Core Web API for Backend.',
      image: '/assets/dotnetproject.jpg',
      link: 'https://github.com/Pratik26198/DotNet-Project',
    },

    // I will add additional projects here after.

  ];

  const openModal = (project) => {
    setModalData(project);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 mb-4">
              <div className="card h-100">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mt-auto">
                    <button className="btn btn-outline-primary me-2" onClick={() => openModal(project)}>
                      Details
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {modalData && (
          <>
            <div className="modal show fade" style={{ display: 'block' }} tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{modalData.title}</h5>
                    <button type="button" className="btn-close" onClick={closeModal}></button>
                  </div>
                  <div className="modal-body">
                    <p>{modalData.description}</p>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={closeModal}>
                      Close
                    </button>
                    <a
                      href={modalData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Visit Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-backdrop fade show" onClick={closeModal}></div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
