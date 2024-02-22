import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="text-sm">© 2024 All Rights Reserved by Aira Jena</p>
        <div className="flex gap-6 mt-4">
          <Link to="https://github.com/airajena" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-400" />
          </Link>
          <Link to="https://www.linkedin.com/in/airajena/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-gray-400" />
          </Link>
          <Link to="https://twitter.com/airajena" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-gray-400" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
