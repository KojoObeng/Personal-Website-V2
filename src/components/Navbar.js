import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-20 bg-my-gray shadow-2xl z-50 left-0 right-0"
      role="navigation"
    >
      <Link to="/" className="pl-8 text-white font-roboto">
        <div>Kojo Obeng-Arhin|</div>
        <div className="font-source text-green-400 hidden md:block">
          Software Engineer
        </div>
        <div className="font-source text-green-400 md:hidden">SWE</div>
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6 stroke-green-400"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <ul className="flex">
          <li className="ml-16">
            <Link
              className="p-4 text-white hover:text-green-400 font-roboto"
              to="/about"
            >
              <div className="flex items-center justify-end">
                <div className="w-10 border-b border-solid border-white"></div>
                <h1 className="ml-3 text-xl font-bold">1.</h1>
              </div>
              <div className="text-right">About</div>
            </Link>
          </li>
          <li className="ml-16">
            <Link
              className="p-4 text-white hover:text-green-400 font-roboto"
              to="/projects"
            >
              <div className="flex items-center justify-end">
                <div className="w-10 border-b border-solid border-white"></div>
                <h1 className="ml-3 text-xl font-bold">2.</h1>
              </div>
              <div className="text-right">Projects</div>
            </Link>
          </li>

          <li className="ml-16">
            <Link
              className="p-4 text-white hover:text-green-400 font-roboto"
              to="/contact"
            >
              <div className="flex items-center justify-end">
                <div className="w-10 border-b border-solid border-white"></div>
                <h1 className="ml-3 text-xl font-bold">3.</h1>
              </div>
              <div className="text-right">Contact</div>
            </Link>
          </li>
          {/* <li className="ml-16">
            <Link
              className="p-4 text-white hover:text-green-400 font-roboto"
              to="/blog"
            >
              <div className="flex items-center justify-end">
                <div className="w-10 border-b border-solid border-white"></div>
                <h1 className="ml-3 text-xl font-bold">4.</h1>
              </div>
              <div className="text-right">Blog</div>
            </Link>
          </li> */}
          <li className="ml-12 mt-4">
            <div className="flex items-center justify-end">
              <Link
                className="p-4"
                to="/static/Kojo Obeng-Arhin Resume.pdf"
                target="_blank"
              >
                <button className="bg-gray-800 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 rounded-lg px-4 py-2 text-center">
                  <div className="text-white font-roboto">Resume</div>
                </button>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
