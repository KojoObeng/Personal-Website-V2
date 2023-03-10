import { Link } from "react-router-dom";

const NavDropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-5 text-center items-center bg-my-gray"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link
        className="p-4 text-white hover:text-green-400 font-roboto"
        to="/about"
      >
        <span className="text-green-400">1. </span>
        About
      </Link>
      <Link
        className="p-4 text-white hover:text-green-400 font-roboto"
        to="/projects"
      >
        <span className="text-green-400">2. </span>
        Projects
      </Link>

      <Link
        className="p-4 text-white hover:text-green-400 font-roboto"
        to="/contact"
      >
        <span className="text-green-400">3. </span>
        Contact
      </Link>
      {/* <Link
        className="p-4 text-white hover:text-green-400 font-roboto"
        to="/blog"
      >
        <span className="text-green-400">4. </span>
        Blog
      </Link> */}
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
  );
};

export default NavDropdown;
