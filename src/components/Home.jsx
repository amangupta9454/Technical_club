import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import logo from "../assets/logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import harishImage from "../assets/harish.jpg";
import shauryaImage from "../assets/shauryasingh.jpg";
import alishImage from "../assets/AlishSirohi.jpg";
import aadeshImage from "../assets/Aadesh.jpg";
import sahilKumarImage from "../assets/Sahilkumar.jpg";
import sahilVermaImage from "../assets/sahilverma.jpg";
import tanuImage from "../assets/tanu.jpg";
import hietlogo from "../assets/hietlogo.png";
const Home = () => {
  const typedRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Innovate, Learn, Succeed!", "Empowering Coders for Tomorrow!", "Where Ideas Meet Execution!"],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
// yh code mouse effects ke liye hai jo hero section me bubbles uth rha hai uske liye
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX - window.innerWidth / 2, y: clientY - window.innerHeight / 2 });
  };
  const teamMembers = [
    { 
      id: 1, 
      name: "Hareesh Jaiveer Singh", 
      designation: "Member", 
      image: harishImage, 
      linkedin: "https://www.linkedin.com/in/hareesh-jaiveer-singh-317aa4328/" 
    },
    { 
      id: 2, 
      name: "Shaurya Singh", 
      designation: "Secretary", 
      image: shauryaImage, 
      linkedin: "https://www.linkedin.com/in/shaurya-singh-9a13b9277" 
    },
    { 
      id: 3, 
      name: "Alish Sirohi", 
      designation: "Vice President", 
      image: alishImage, 
      linkedin: "https://www.linkedin.com/in/alish-sirohi-5a591b299" 
    },
    { 
      id: 4, 
      name: "Aadesh Kumar", 
      designation: "Member", 
      image: aadeshImage, 
      linkedin: "https://www.linkedin.com/in/aadesh-kumar-60a311304" 
    },
    { 
      id: 5, 
      name: "Sahil Kumar", 
      designation: "Member", 
      image: sahilKumarImage, 
      linkedin: "https://www.linkedin.com/in/sahil-kumar-a93439301" 
    },
    { 
      id: 6, 
      name: "Sahil Verma", 
      designation: "President", 
      image: sahilVermaImage, 
      linkedin: "https://www.linkedin.com/in/sahil-verma-957528310" 
    },
    { 
      id: 7, 
      name: "Tanu Jha", 
      designation: "Member", 
      image: tanuImage, 
      linkedin: "https://www.linkedin.com/in/tanu-jha-78029a347" 
    },
  ];
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
  return (
    <div>
    <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-gray-900 text-white overflow-hidden px-4 md:px-16 relative"onMouseMove={handleMouseMove}>
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, index) => (
          <div key={index}className="absolute w-2 h-2 bg-white rounded-full opacity-50 animate-pulse"
            style={{top: `${Math.random() * 100}%`,left: `${Math.random() * 100}%`, transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`, }}></div>
        ))}
      </div>
      <div className="relative w-full md:w-1/2 p-8 px-4 text-center flex flex-col items-center md:mr-12 transform hover:scale-105 transition duration-500 overflow-x-visible">
  <h1 className="text-4xl sm:text-4xl font-bold relative text-center w-full flex flex-wrap justify-center gap-2 sm:gap-4">
    <span className="text-blue-300 hover:text-blue-500 transition-colors duration-500">WELCOME</span>
    <span className="text-white hover:text-gray-300 transition-colors duration-500">TO</span>
    <span className="text-purple-400 hover:text-purple-600 transition-colors duration-500">TECH</span>
    <span className="text-pink-500 hover:text-red-500 transition-colors duration-500">FUSION</span>
  </h1>
  <p ref={typedRef} className="text-lg mt-3 font-semibold text-blue-400 animate-fade-in"></p>
  <a href="https://www.linkedin.com" className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg transition-all hover:shadow-blue-500/50 hover:scale-110 relative overflow-hidden">
    LinkedIn
    <span className="absolute inset-0 bg-white opacity-10 blur-lg" />
  </a>
</div>
      <div className="w-40 md:w-60 h-40 md:h-60 transition-transform duration-500 mt-6 md:mt-0 md:ml-28 hover:scale-110 animate-bounce" style={{ filter: `drop-shadow(0px 0px ${Math.abs(mousePosition.x) / 50}px blue)` }} >
        <img src={logo} alt="Tech Fusion Logo" className="w-full h-full object-contain drop-shadow-2xl hover:rotate-6 transition-transform duration-300" />
      </div>
    </div>
    <section className="relative w-full py-16 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden"  onMouseMove={handleMouseMove}>
  <div className="absolute inset-0 pointer-events-none">
    {Array.from({ length: 30 }).map((_, index) => (
      <div key={index} className="absolute text-white opacity-75 text-xs animate-pulse"
        style={{  top: `${Math.random() * 100}%`,  left: `${Math.random() * 100}%`, transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,}} >
        ✦
      </div>
    ))}
  </div>
  <h2 className="text-4xl font-extrabold text-center text-white mb-12 relative z-10 underline animate-float transition duration-300 transform hover:scale-110 hover:text-cyan-600 ">
    Meet Our Team
  </h2>
  <div className="relative w-full max-w-6xl mx-auto px-4 z-10">
    <Slider {...sliderSettings}>
      {teamMembers.map((member) => (
        <div key={member.id} className="p-4">
          <div className="bg-gray-800 rounded-xl shadow-2xl p-6 text-center transform transition-transform duration-500 hover:scale-110 hover:rotate-2 hover:shadow-blue-500/50 animate-fadeInUp">
            <img  src={member.image}  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500 transition-all duration-500 hover:border-white hover:rotate-3 hover:scale-105 animate-zoomIn"/>
            <h3 className="text-xl font-semibold text-white mt-4 animate-slideUp">{member.name}</h3>
            <p className="text-gray-400 animate-slideUp">{member.designation}</p>
            <a href={member.linkedin}  className="inline-block mt-4 px-4 py-2 bg-gradient-to-l from-cyan-600 to-violet-800 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:bg-blue-600 hover:-rotate-2 animate-pulse">
              LinkedIn
            </a>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  <section className="flex justify-between items-center py-10 px-6 bg-gray-800 rounded-[50px] mx-auto mt-12 w-full max-w-4xl shadow-lg transform hover:scale-105 transition duration-300 hover:ring-4 hover:ring-blue-500 animate-fade-in">
        <div className="text-center flex-1 animate-slide-in">
          <h2 className="text-3xl font-bold text-blue-500 hover:animate-pulse hover:text-cyan-500">Ready to get Started</h2>
          <p className="text-white text-lg mt-2 animate-fade-in delay-200">Collab with Us</p>
        </div>
        <div className="flex-1 flex justify-end">
          <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-xl hover:scale-110">Contact with Us</button>
        </div>
      </section>
      </section>
 <footer className="relative bg-center text-white py-6 px-4 md:px-16 h-full bg-gradient-to-r from-black via-gray-800 to-black">
      <div className="flex flex-wrap justify-between items-center gap-6">
        <div className="flex-1 text-center md:text-left">
          <a href="/" className="text-2xl font-semibold mb-4 text-white hover:text-pink-400 block transition duration-300 transform hover:scale-105">
            Back to
          </a>
          <ul className="space-y-2 font-bold text-xl">
            <li>
              <a href="/" className="hover:text-green-600 hover-underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-red-600 hover-underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-violet-600 hover-underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 text-center md:text-left">
          <a href="/" className="text-2xl font-semibold mb-4 text-white hover:text-pink-400 block transition duration-300 transform hover:scale-105">
            Explore
          </a>
          <ul className="space-y-2 font-bold text-xl">
            <li>
              <a href="/gallery" className="hover:text-green-600 hover-underline">
                Gallery
              </a>
            </li>
            <li>
              <a href="/review" className="hover:text-red-600 hover-underline">
                Feedback
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-600 hover-underline">
                Events
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 text-center md:text-left">
        <h2 className="font-bold text-xl text-white hover:text-violet-600 mb-10 transition duration-300 transform hover:scale-110 cursor-pointer"onClick={() => setIsOpen(true)}>
        Tech Fusion
      </h2>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg max-w-md text-center text-white">
            <h3 className="text-2xl font-semibold mb-4">About Tech Fusion</h3>
            <p className="text-lg">
              Tech Fusion is a student-driven technical club dedicated to enhancing coding, development, and soft skills through hands-on projects, workshops, and competitions.
            </p>
            <button className="mt-5 px-4 py-2 bg-violet-600 hover:bg-violet-800 text-white font-semibold rounded-lg transition duration-300"onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
          <a href="https://www.hiet.org" target="_blank" rel="noopener noreferrer">
          <img  src={hietlogo} className="bg-white rounded-lg shadow-lg w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain mx-auto md:mx-0 transition-transform duration-300 hover:rotate-12 glow" />
          </a>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-lg font-semibold text-white hover:text-green-600 transition duration-300 transform hover:scale-105">
          This website is created by-{" "}
          <span className="text-cyan-400 hover:text-violet-700">
            <a href="https://www.instagram.com/gupta_aman_9161">Aman Gupta</a>
          </span>
        </p>
        <p className="text-lg font-semibold text-white hover:text-green-600 transition duration-300 transform hover:scale-105">
          This website belongs to-{" "}
          <span className="text-cyan-400 hover:text-violet-700">HIET-GHAZIABAD</span>
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-3 h-3 bg-white opacity-50 rounded-full animate-float1"></div>
        <div className="absolute w-4 h-4 bg-blue-400 opacity-50 rounded-full animate-float2"></div>
        <div className="absolute w-2 h-2 bg-green-400 opacity-50 rounded-full animate-float3"></div>
      </div>
    </footer>
   </div>
  );
};

export default Home;
