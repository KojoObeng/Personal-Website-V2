import { Link } from "react-router-dom";

const ResumeButton = () => {
  return (
    <div className="relative mt-10 group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-500 blur rounded-lg opacity-75 group-hover:opacity-100 transition duration-200"></div>
      <Link to="/static/Kojo Obeng-Arhin - Resume.pdf" target="_blank">
        <button className="px-7 py-3 rounded-lg bg-my-gray leading-none flex relative">
          <div className="text-white lg:text-lg md:text-lg sm:text-md text-md font-source">
            Resume
          </div>
        </button>
      </Link>
    </div>
  );
};

export default ResumeButton;
