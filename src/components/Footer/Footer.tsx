"use client";
import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

// Define the Footer component
const Footer = () => {
  return (
    <>
      <div className="footer shadow text-white bg-gray-950 py-16 rounded-t-sm flex flex-col lg:justify-around items-center lg:flex-row gap-y-7">
        <div className="flex flex-col justify-center items-center lg:items-start gap-y-3">
          <Link href="/">
            <div className="font-bold text-xl">Cold Messager</div>
          </Link>
          <div className="opacity-75 text-center">
            We help you optimize your
            <span className="text-[#ffcc4b] font-bold"> cold outreach</span>{" "}
            campaigns on Linkedin.
          </div>
          <div className="hidden lg:block">
            &copy; Cold Messager
          </div>
        </div>

        <div className="flex justify-around w-full md:w-fit md:gap-12">
          <div className="flex flex-col gap-3 font-bold">
            <Link href="/">
              <div className="hover:text-[#ffcc4b] cursor-pointer">Home</div>
            </Link>
            <Link href="/pricing">
              <div className="hover:text-[#ffcc4b] cursor-pointer">Pricing</div>
            </Link>
            <Link href="/contact">
              <div className="hover:text-[#ffcc4b] cursor-pointer">
                Contact Us
              </div>
            </Link>
            <Link href="/blog">
              <div className="hover:text-[#ffcc4b] cursor-pointer">Blog</div>
            </Link>
          </div>
          <div className="flex flex-col font-bold gap-3">
            <Link href="/about">
              <div className="hover:text-[#ffcc4b] cursor-pointer">About Us</div>
            </Link>
            <Link href="/terms">
              <div className="hover:text-[#ffcc4b] cursor-pointer">
                Terms And Conditions
              </div>
            </Link>
            <Link href="/privacy">
              <div className="hover:text-[#ffcc4b] cursor-pointer">
                Privacy Policy
              </div>
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center gap-x-3">
          {/* LinkedIn Icon */}
          <Link
            href="https://www.linkedin.com/company/cold-messager/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BXVyiHlHhQL%2BQNt7Mz9jsEQ%3D%3D"
            className="social-icon linkedin transform transition-transform duration-300 hover:-translate-y-2 hover:text-yellow-500"
          >
            <FaLinkedin className="text-4xl m-2" />
          </Link>

          {/* Twitter Icon */}
          <Link
            href="https://twitter.com/ColdM13955"
            className="social-icon twitter transform transition-transform duration-300 hover:-translate-y-2 hover:text-yellow-500"
          >
            <FaTwitter className="text-4xl m-2" />
          </Link>

          {/* Instagram Icon */}
          <Link
            href="https://www.instagram.com/coldmessager/"
            className="social-icon instagram transform transition-transform duration-300 hover:-translate-y-2 hover:text-yellow-500"
          >
            <FaInstagram className="text-4xl m-2" />
          </Link>
        </div>
        <div className="lg:hidden block">
          &copy; Cold Messager
        </div>
      </div>
    </>
  );
};

export default Footer;
