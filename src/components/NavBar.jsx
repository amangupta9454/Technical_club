import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
// yh code toggle button ke liye hai array declaration 
const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
// yh code yh dekehege ki agar toggle button on hai to off kr de i mean ki horizontal line to cress symbol and vice versa
  const handleLinkClick = () => {
    setIsMobile(false);
  };
// yha se nav bar ka designing suru hota hai
  return (
    // yh main div hai overall
    <div className="text-xl flex justify-between items-center w-full h-20 px-2 bg-gradient-to-r from-gray-900 to-slate-950 text-white fixed z-10">
      {/* heading ki div hai */}
      <div>
        <h1 className="text-2xl font-bold ml-6 text-white font-serif transform scale-110 hover:scale-110 transition duration-300 ease-in-out hover:text-cyan-400   animate-bounce">
          TECH FUSION
        </h1>
      </div>
      {/* yh div toggle auto close ki working ke code ke liye hai */}
      <div className="md:hidden" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes size={30} className="text-white" /> : <FaBars size={30} className="text-white ml-2 cursor-pointer" />}
      </div>
      {/* yh se main nav element ki suruwat ho rhi hai */}
      <ul
        className={`md:flex ${isMobile ? 'flex-col space-y-2 absolute top-16 left-1/2 transform -translate-x-1/2  cursor-pointer bg-gradient-to-r from-blue-600 to-teal-700 text-white p-4 w-4/5 md:w-auto' : 'hidden'} md:space-x-12 capitalize`}
      >
        <li className="cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 hover:underline hover:text-pink-600" onClick={handleLinkClick}>
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 hover:underline hover:text-pink-600" onClick={handleLinkClick}>
          <Link to="/about">About</Link>
        </li>
        {/* <li className="cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 hover:underline hover:text-pink-600" onClick={handleLinkClick}>
          <Link to="/specialty">Events</Link>
        </li> */}
        <li className="cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 hover:underline hover:text-pink-600" onClick={handleLinkClick}>
          <Link to="/review">Feedback</Link>
        </li>
        <li className="cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 hover:underline hover:text-pink-600" onClick={handleLinkClick}>
          <Link to="/gallery">Gallery</Link>
        </li>
        {/* <li className="cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 hover:underline hover:text-pink-600" onClick={handleLinkClick}>
          <Link to="/ai">AI</Link>
        </li> */}
        <li className="cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 hover:underline hover:text-pink-600" onClick={handleLinkClick}>
          <Link to="/contact">Contact</Link>
        </li>
        {/* <li className="cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 hover:underline hover:text-pink-600" onClick={handleLinkClick}>
          <Link to="/login">Login</Link>
        </li> */}
      </ul>
    </div>
  );
};
export default NavBar;
