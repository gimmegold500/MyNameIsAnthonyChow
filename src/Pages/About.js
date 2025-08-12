import React from 'react';
import './About.css';

export default function About() {
  const skills = [
    { category: "Frontend", technologies: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Material-UI"] },
    { category: "Backend", technologies: ["Node.js", "Python", "Java", "Express.js", "Django", "Spring Boot"] },
    { category: "Database", technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"] },
    { category: "DevOps & Tools", technologies: ["Docker", "AWS", "Git", "CI/CD", "Jenkins", "Kubernetes"] },
    { category: "Other", technologies: ["REST APIs", "GraphQL", "Microservices", "Agile/Scrum", "JUnit", "Jest"] }
  ];

  const experiences = [
    {
      company: "Starbucks",
      position: "Full Stack Software Engineer",
      duration: "2023 - Present",
      description: "Developing and maintaining web applications, working with cross-functional teams to deliver high-quality software solutions."
    },
    {
      company: "Previous Company",
      position: "Software Developer Intern",
      duration: "2022 - 2023",
      description: "Contributed to various projects using modern web technologies and gained experience in agile development practices."
    }
  ];

  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Hi, I'm Anthony Chow</h1>
              <p className="hero-subtitle">
                Full Stack Software Engineer passionate about creating innovative solutions and building scalable applications
              </p>
              <p className="hero-description">
                I'm a dedicated software engineer with a strong foundation in both frontend and backend development. 
                Currently working at Starbucks, I specialize in building robust web applications and solving complex technical challenges.
              </p>
              <div className="hero-buttons">
                <a href="/resume" className="btn">View Resume</a>
                <a href="/projects" className="btn btn-secondary">See My Work</a>
              </div>
            </div>
            <div className="hero-image">
              <img src="/src/Files/AnthonyHead.png" alt="Anthony Chow" />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="education-card card">
            <div className="education-header">
              <h3>Bachelor of Applied Science in Engineering Physics</h3>
              <p className="institution">The University of British Columbia</p>
              <p className="graduation">Graduated with Distinction</p>
            </div>
            <p className="education-description">
              My engineering physics background has given me a strong analytical mindset and problem-solving skills 
              that I apply to software development. I learned to approach complex problems systematically and 
              work with interdisciplinary teams.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section">
          <h2 className="section-title">Professional Experience</h2>
          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card card">
                <div className="experience-header">
                  <h3>{exp.position}</h3>
                  <p className="company">{exp.company}</p>
                  <p className="duration">{exp.duration}</p>
                </div>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-category card">
                <h3 className="skill-category-title">{skillGroup.category}</h3>
                <div className="skill-tags">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Section */}
        <section className="section">
          <h2 className="section-title">About Me</h2>
          <div className="personal-card card">
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date 
              with the latest industry trends and best practices.
            </p>
            <p>
              I'm passionate about clean code, user experience, and building applications that make a real impact. 
              Whether it's optimizing performance, improving accessibility, or implementing new features, I approach 
              every challenge with enthusiasm and attention to detail.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-card card">
            <p className="contact-text">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-buttons">
              <a href="mailto:your.email@example.com" className="btn">Email Me</a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
