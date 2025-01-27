import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleLinkClick = () => {
    setIsMobile(false);
  };

  return (
    <div className="text-xl flex justify-between items-center w-full h-20 px-2 bg-transparent text-white fixed z-10 shadow-lg transform transition-all duration-500 ease-in-out hover:shadow-2xl">
      {/* Heading */}
      <div>
      <h1 className="text-2xl font-bold ml-6 text-white font-serif transform scale-110 hover:scale-125 transition-all duration-500 ease-in-out hover:text-cyan-400 animate-tada  hover:animate-none bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
      TECH FUSION
      </h1>
      </div>
      {/* Toggle button */}
      <div className="md:hidden" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <FaTimes size={30} className="text-white hover:rotate-180 transition-transform duration-500 ease-in-out"/>) : (
          <FaBars size={30}className="text-white ml-2 cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"/>
        )}
      </div>
      <ul className={`md:flex ${isMobile ? "flex-col space-y-2 absolute top-16 left-1/2 transform -translate-x-1/2 cursor-pointer bg-gradient-to-r from-blue-600 to-teal-700 text-white p-4 w-4/5 md:w-auto shadow-lg rounded-lg animate-fade-in": "hidden"} md:space-x-12 capitalize`}>
        <li
          className="cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 hover:underline hover:text-pink-600 hover:translate-x-2 transition-all ease-in-out"onClick={handleLinkClick}>
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 hover:underline hover:text-pink-600 hover:translate-x-2 transition-all ease-in-out" onClick={handleLinkClick}>
          <Link to="/about">About</Link>
        </li>
        <li className="cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 hover:underline hover:text-pink-600 hover:translate-x-2 transition-all ease-in-out"onClick={handleLinkClick}>
          <Link to="/review">Feedback</Link>
        </li>
        <li className="cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 hover:underline hover:text-pink-600 hover:translate-x-2 transition-all ease-in-out"onClick={handleLinkClick} >
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 hover:underline hover:text-pink-600 hover:translate-x-2 transition-all ease-in-out" onClick={handleLinkClick}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
