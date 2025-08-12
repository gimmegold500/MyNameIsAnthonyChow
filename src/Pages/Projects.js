import React from 'react';
import Topbar from '../Topbar.js';

export default function Projects() {
    const projects = [
        {
            title: "Project 1",
            description: "A full-stack web application built with React and Node.js that helps users manage their daily tasks and schedules.",
            technologies: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            title: "Project 2",
            description: "An AI-powered image recognition system that can identify and classify different types of objects in real-time.",
            technologies: ["Python", "TensorFlow", "OpenCV"],
            link: "#"
        },
        {
            title: "Project 3",
            description: "A mobile app that helps users track their fitness goals and provides personalized workout recommendations.",
            technologies: ["React Native", "Firebase", "Redux"],
            link: "#"
        }
    ];

    return (
        <div>
            <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#333' }}>My Projects</h1>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <div key={index} style={{
                            padding: '1.5rem',
                            backgroundColor: '#f5f5f5',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>{project.title}</h2>
                            <p style={{ color: '#666', marginBottom: '1rem' }}>{project.description}</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} style={{
                                        backgroundColor: '#e0e0e0',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '15px',
                                        fontSize: '0.875rem'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} style={{
                                display: 'inline-block',
                                padding: '0.5rem 1rem',
                                backgroundColor: '#696055',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '4px',
                                transition: 'background-color 0.3s'
                            }}>
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
} 