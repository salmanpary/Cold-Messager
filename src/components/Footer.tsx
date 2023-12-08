"use client";
import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

// Define the Footer component
const Footer = () => {
  return (
    <div className='flex  justify-center items-center my-10'>
      {/* LinkedIn Icon */}
      <a
        href='https://www.linkedin.com/company/cold-messager/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BXVyiHlHhQL%2BQNt7Mz9jsEQ%3D%3D'  // Add your LinkedIn profile link here
        className='social-icon linkedin transform transition-transform duration-300 hover:-translate-y-2 hover:text-yellow-500'
      >
        <FaLinkedin className='text-4xl m-2' />
      </a>

      {/* Twitter Icon */}
      <a
        href='https://twitter.com/ColdM13955'  // Add your Twitter profile link here
        className='social-icon twitter transform transition-transform duration-300 hover:-translate-y-2 hover:text-yellow-500'
      >
        <FaTwitter className='text-4xl m-2' />
      </a>

      {/* Instagram Icon */}
      <a
        href='#'  // Add your Instagram profile link here
        className='social-icon instagram transform transition-transform duration-300 hover:-translate-y-2 hover:text-yellow-500'
      >
        <FaInstagram className='text-4xl m-2' />
      </a>
    </div>
  );
};

export default Footer;