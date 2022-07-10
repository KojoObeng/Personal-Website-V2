import { Link } from "react-router-dom";

const Custom404 = () => {
  return (
    <div className="min-h-screen bg-my-gray flex justify-center items-center p-14">
      <div className="text-green-400 md:text-9xl text-6xl font-extrabold border-r-2 border-green-400 pr-4">
        404
      </div>
      <div className="flex items-center md:text-lg text-md text-white font-roboto font-semibold">
        <div className="ml-4">Wrong way! Take me</div>
        <Link to="/">
          <button className="bg-green-400 hover:bg-green-300 px-4 py-2 m-4 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
