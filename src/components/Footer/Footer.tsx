"use client";
import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

// Define the Footer component
const Footer = () => {
  return (
    <>
    <div className='footer shadow text-white bg-gray-950 py-16 rounded-t-sm flex flex-col lg:justify-around items-center lg:flex-row gap-y-7'>

      <div className='flex flex-col justify-center items-center lg:items-start gap-y-3'>

        <div className='font-bold text-xl'>Cold Messager</div>
        <div className='opacity-75 text-center'>We Help you optimize your <span className='text-[#ffcc4b] font-bold'> cold outreach</span> campaigns on Linkedin.</div>
     <Link href="/"> <div className='hidden lg:block hover:text-[#ffcc4b] hover:cursor-pointer'>&copy; Cold Messager</div></Link>  
      </div>
        <div className='flex flex-col justify-center items-center'>
          
        <div className='flex gap-x-10 font-bold pb-5'>
          <Link href='/'>
            <div className='hover:text-[#ffcc4b] hover:cursor-pointer transform transition-transform duration-300 hover:-translate-y-2'>Home</div>
          </Link>
          <Link href='/pricing'>
            <div className='hover:text-[#ffcc4b] hover:cursor-pointer transform transition-transform duration-300 hover:-translate-y-2'>Pricing</div>
          </Link>
        </div>

        <div className='flex gap-x-10 font-bold'>
          <Link href='/contact'>
            <div className='hover:text-[#ffcc4b] hover:cursor-pointer transform transition-transform duration-300 hover:-translate-y-2'>Contact Us</div>
          </Link>
          <Link href='/blog'>
            <div className='hover:text-[#ffcc4b] hover:cursor-pointer transform transition-transform duration-300 hover:-translate-y-2'>Blog</div>
          </Link>
        </div>
        
        
        </div>
        <div className='flex flex-col justify-center items-center'>
        <div className='flex gap-x-10 font-bold'>
          <Link href='/about'>
            <div className='hover:text-[#ffcc4b] hover:cursor-pointer transform transition-transform duration-300 hover:-translate-y-2'>About Us</div>
          </Link>
        </div>
        <div className='flex gap-x-10 font-bold pt-5'>
          <Link href='/terms'>
            <div className='hover:text-[#ffcc4b] hover:cursor-pointer transform transition-transform duration-300 hover:-translate-y-2'>Terms And Conditions</div>
          </Link>
          <Link href='/privacy'>
            <div className='hover:text-[#ffcc4b] hover:cursor-pointer transform transition-transform duration-300 hover:-translate-y-2'>Privacy Policy</div>
          </Link>
        </div>

       
        
        
        </div>

      <div className='flex justify-center items-center gap-x-3'>
        {/* LinkedIn Icon */}
        <a
          href='https://www.linkedin.com/company/cold-messager/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BXVyiHlHhQL%2BQNt7Mz9jsEQ%3D%3D'
          className='social-icon linkedin transform transition-transform duration-300 hover:-translate-y-2 hover:text-yellow-500'
        >
          <FaLinkedin className='text-4xl m-2' />
        </a>

        {/* Twitter Icon */}
        <a
          href='https://twitter.com/ColdM13955'
          className='social-icon twitter transform transition-transform duration-300 hover:-translate-y-2 hover:text-yellow-500'
        >
          <FaTwitter className='text-4xl m-2' />
        </a>

        {/* Instagram Icon */}
        <a
          href='https://www.instagram.com/coldmessager/'
          className='social-icon instagram transform transition-transform duration-300 hover:-translate-y-2 hover:text-yellow-500'
        >
          <FaInstagram className='text-4xl m-2' />
        </a>
      </div>
      <div className='lg:hidden block hover:text-[#ffcc4b] hover:cursor-pointer'>&copy; Cold Messager</div>
    </div>
    </>
  );
};

export default Footer;
