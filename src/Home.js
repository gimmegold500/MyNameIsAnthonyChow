import React from 'react';
import './Home.css';

function Home() {
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://via.placeholder.com/300x200/667eea/ffffff?text=E-Commerce"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      image: "https://via.placeholder.com/300x200/764ba2/ffffff?text=Task+App"
    },
    {
      title: "AI Image Recognition",
      description: "Machine learning application for image classification using TensorFlow and Python.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
      image: "https://via.placeholder.com/300x200/667eea/ffffff?text=AI+App"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Anthony Chow</h1>
              <p className="hero-subtitle">Full Stack Software Engineer</p>
              <p className="hero-description">
                I build innovative web applications and solve complex technical challenges. 
                Currently working at Starbucks, I specialize in creating scalable solutions 
                that make a real impact.
              </p>
              <div className="hero-buttons">
                <a href="/projects" className="btn">View My Work</a>
                <a href="/resume" className="btn btn-secondary">Download Resume</a>
              </div>
            </div>
            <div className="hero-image">
              <img src="/src/Files/AnthonyHead.png" alt="Anthony Chow" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Technologies</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <div key={index} className="project-card card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href="/projects" className="btn">View Project</a>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-projects">
            <a href="/projects" className="btn btn-secondary">View All Projects</a>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="section skills-preview">
        <div className="container">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="skills-preview-grid">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <p>React, JavaScript, TypeScript, HTML5, CSS3</p>
            </div>
            <div className="skill-category">
              <h3>Backend Development</h3>
              <p>Node.js, Python, Java, Express.js, Django</p>
            </div>
            <div className="skill-category">
              <h3>Database & DevOps</h3>
              <p>MongoDB, PostgreSQL, Docker, AWS, Git</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to work together?</h2>
            <p>Let's discuss your next project and how I can help bring your ideas to life.</p>
            <div className="cta-buttons">
              <a href="/resume" className="btn">Download Resume</a>
              <a href="mailto:your.email@example.com" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
