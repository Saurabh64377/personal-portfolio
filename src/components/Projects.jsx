import React from 'react';

const projects = [
    {
        id: 1,
        name: "Tic-Tac-Toe Game",
        technologies: "ReactJS",
        description: "A classic tic-tac-toe game built using ReactJS, featuring a dynamic and responsive user interface.",
        github: "https://github.com/Saurabh64377?tab=projects"
    },
    {
        id: 2,
        name: "My Blog Like, Dislike, and Comment",
        technologies: "MERN Stack",
        description: "A full-stack blogging platform allowing users to like, dislike, and comment on posts, with features for user interaction and content management.",
        github: "https://github.com/Saurabh64377?tab=projects"
    },
    {
        id: 3,
        name: "Weather App",
        technologies: "ReactJS",
        description: "A weather forecasting application that displays real-time weather data using an external API integration.",
        github: "https://github.com/Saurabh64377?tab=projects"
    },
    {
        id: 4,
        name: "CRUD Operation",
        technologies: "ReactJS + Axios",
        description: "A CRUD (Create, Read, Update, Delete) web application demonstrating data manipulation with Axios and ReactJS.",
        github: "https://github.com/Saurabh64377?tab=projects"
    },
    {
        id: 5,
        name: "Notes App",
        technologies: "MERN Stack",
        description: "A full-stack application for creating, editing, and managing notes, built using the MERN stack.",
        github: "https://github.com/Saurabh64377?tab=projects"
    }
];

const Projects = () => {
    return (
        <div className="bg-black text-white py-10" id="projects">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map(project => (
                        <div 
                            key={project.id} 
                            className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
                        >
                            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                            <h5 className="text-gray-400 mb-4">{project.technologies}</h5>
                            <p className="mb-4">{project.description}</p>
                            <a 
                                className="inline-block bg-gradient-to-r from-green-300 to-blue-400 text-white px-4 py-2 rounded-full"
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.name} on GitHub`}
                            >
                                GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
