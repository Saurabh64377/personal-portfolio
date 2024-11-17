import React from 'react';

const Navbar = () => {
   
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Saurabh Agrahari</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400" aria-label="Go to Home section">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400" aria-label="Go to About Me section">
            About Me
          </a>
          <a href="#services" className="hover:text-gray-400" aria-label="Go to Services section">
            Services
          </a>
          <a href="#projects" className="hover:text-gray-400" aria-label="Go to Projects section">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400" aria-label="Go to Contact section">
            Contact
          </a>
        </div>
        <div>
          <a href="#contact">
          <button  className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Contact
          </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
