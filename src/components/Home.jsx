import { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typed from "typed.js";
import web from "../assets/web.jpg";
import android from "../assets/android.jpg";
import python from "../assets/python.jpg";
import videoBackground from "../assets/video.mp4";
import logoImage from "../assets/logo.png";
import harishImage from "../assets/harish.jpg";
import shauryaImage from "../assets/shauryasingh.jpg";
import alishImage from "../assets/AlishSirohi.jpg";
import aadeshImage from "../assets/Aadesh.jpg";
import sahilKumarImage from "../assets/Sahilkumar.jpg";
import sahilVermaImage from "../assets/sahilverma.jpg";
import hietlogo from "../assets/hietlogo.png";
import video from "../assets/video1.mp4";
import tanu from "../assets/tanu.jpg";
const Home = () => {
  const typedRef = useRef(null);
  const [modalContent, setModalContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Where Ideas Meet Technology", "Dreams Take Flight!"],
      typeSpeed: 100,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

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
      linkedin: "https://www.linkedin.com/in/shaurya-singh-9a13b9277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
    },
    { 
      id: 3, 
      name: "Alish Sirohi", 
      designation: "Vice President", 
      image: alishImage, 
      linkedin: "https://www.linkedin.com/in/alish-sirohi-5a591b299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
    },
    { 
      id: 4, 
      name: "Aadesh Kumar", 
      designation: "Member", 
      image: aadeshImage, 
      linkedin: "https://www.linkedin.com/in/aadesh-kumar-60a311304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
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
      image: tanu, 
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
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const whatWeDoData = [
    {
      id: 1,
      title: "Seminar",
      description: "We build dynamic and responsive websites tailored to your needs.",
      fullText: "Our web development services include creating highly interactive and user-friendly websites using the latest technologies and best practices.",
      image: web,
    },
    {
      id: 2,
      title: "Classes",
      description: "Custom mobile apps for Android and iOS platforms.",
      fullText: "We specialize in developing mobile applications that deliver seamless user experiences and meet business requirements.",
      image: android,
    },
    {
      id: 3,
      title: "Mentor Session",
      description: "Python is a versatile, high-level programming language .",
      fullText: "Python is a versatile,It is widely used across various fields, including web development, data analysis, artificial intelligence, machine learning, and scientific computing.",
      image: python,
    },
  ];

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  return (
    <div className="home relative overflow-hidden">
    {/* Video Background */}
    <video
      className="absolute top-0 left-0 w-full h-full  object-cover z-[-1]"
      src={videoBackground}
      autoPlay
      loop
      muted
      playsInline
    ></video>
  
    {/* Main Hero Section */}
    <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center px-2 space-y-8 md:space-y-0 md:space-x-8 py-44">
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white whitespace-nowrap animate-fadeIn hover:scale-105 hover:tracking-wide transition-all duration-300 hover:text-cyan-400">
          Welcome To
          <span className="text-yellow-500 hover:text-purple-600 transition-colors duration-300">
            {" "}
            Tech Fusion
          </span>
        </h2>
        <p className="text-green-600 py-4 max-w-md text-center md:text-left">
          <span
            ref={typedRef}
            className="text-sm sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-bold"
          ></span>
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-6 md:space-y-0">
          <a
            href="https://www.linkedin.com/in/amangupta9454/"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={logoImage}
          alt="Tech Fusion Logo"
          className="w-40 md:w-60 lg:w-72 hover:scale-110 transition-transform duration-300 bg-transparent object-contain rotate-axis"
        />
      </div>
    </div>
  
    {/* What We Do Section */}
    <div className="relative py-12 px-4">
      <video
      className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      src={videoBackground}
      autoPlay
      loop
      muted
      playsInline
    ></video>
      <h2 className="text-center text-white text-5xl font-bold mb-8 underline hover:text-orange-400">
        What We Do
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {whatWeDoData.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-95 border-8 border-cyan-600 border-solid"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-white mb-4">{item.description}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
              onClick={() => openModal(item.fullText)}
            >
              Know More
            </button>
          </div>
        ))}
      </div>
    </div>
{/* Meet Our Team Section */}
<div className="relative slider py-12">
   <video
      className="absolute top-0 left-0 w-full h-full  object-cover z-[-1]"
      src={video}
      autoPlay
      loop
      muted
      playsInline
    ></video>
    <h2 className="text-center text-white text-5xl font-bold mb-8 object-cover underline hover:text-orange-400 hover:animate-bounce">
    Meet Our Team
  </h2>
  <Slider {...sliderSettings} className="max-w-5xl mx-auto px-4">
    {teamMembers.map((member) => (
      <div key={member.id} className="p-4">
        <div className="bg-transparent rounded-lg shadow-lg overflow-hidden">
          <img src={member.image} alt={member.name} className="w-40 h-40 object-cover rounded-full mx-auto"/>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-white">{member.name}</h3>
            <p className="text-white text-xl mb-4">{member.designation}</p>
            <a href={member.linkedin} className="bg-gradient-to-r from-cyan-600 to-violet-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              Connect
            </a>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <p className="text-black text-lg mb-4">{modalContent}</p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
       {/* Social Links Section*/}
     <div className="fixed right-4 top-1/3 flex flex-col space-y-8 z-50">
        <a href="https://www.linkedin.com/in/amangupta9454/" className="social-icon group">
        <FaLinkedin size={30} className="text-white group-hover:text-blue-500 transition-colors duration-300" />
          <span className="text-white opacity-0 group-hover:opacity-100 absolute top-0 left-14 transition-opacity duration-300">LinkedIn</span>
        </a>
        <a href="https://www.instagram.com/" className="social-icon group">
        <FaInstagram size={30} className="text-white group-hover:text-pink-500 transition-colors duration-300" />
          <span className="text-white opacity-0 group-hover:opacity-100 absolute top-0 left-14 transition-opacity duration-300">Instagram</span>
        </a>
        <a  href="https://www.youtube.com/" target="_blank" className="social-icon group">
        <FaYoutube size={30} className="text-white group-hover:text-red-500 transition-colors duration-300" />
          <span className="text-white opacity-0 group-hover:opacity-100 absolute top-0 left-14 transition-opacity duration-300">YouTube</span>
        </a>
      </div>
      {/* contact to us section */}
      <div className="py-12 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto bg-slate-800 shadow-lg rounded-full py-6 px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 border border-cyan-500">
        <div className="text-center md:text-left">
          <h3 className="text-white text-3xl font-bold">
            Ready to get Started?{" "}
            <br />
            <span className="text-yellow-400">Collab with Us</span>
          </h3>
        </div>
        <div>
          <a  href="mailto:techfusion@hietgroup.org" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md relative overflow-hidden">
            <span className="z-10 relative">Connect with Us</span>
            <div className="absolute top-0 left-0 w-full h-full bg-cyan-400 opacity-0 hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
          </a>
        </div>
      </div>
    </div>
    
      {/* Footer */}
      <footer className="bg-gradient-to-r from-cyan-950 to-violet-950 text-white py-4 px-2 md:px-16 h-full ">
  <div className="flex flex-wrap justify-between items-center gap-0">
    <div className="flex-1 text-center md:text-left">
      <a href="/about" className="text-2xl font-semibold mb-4 text-white hover:text-pink-400 block">
        Back to
      </a>
      <ul className="space-y-2 font-bold text-xl">
        <li>
          <a href="/" className="hover:text-green-600">Home</a>
        </li>
        <li>
          <a href="/about" className="hover:text-red-600">About</a>
        </li>
        <li>
          <a href="/contact" className="hover:text-violet-600">Contact us</a>
        </li>
      </ul>
    </div>
    <div className="flex-1 text-center md:text-left">
      <a href="/about" className="text-2xl font-semibold mb-4 text-white hover:text-pink-400 block">
        Explore
      </a>
      <ul className="space-y-2 font-bold text-xl">
        <li>
          <a href="/gallery" className="hover:text-green-600">Gallery</a>
        </li>
        <li>
          <a href="/review" className="hover:text-red-600">Feedback</a>
        </li>
        <li>
          <a href="" className="hover:text-violet-600">Events</a>
        </li>
      </ul>
    </div>
    <div className="flex-1 text-center md:text-left">
      <h2 className="font-bold text-xl text-white hover:text-violet-600 mb-10">
        Tech Fusion
      </h2>
      <img src= {hietlogo} alt="Logo not available"className="bg-white rounded-lg shadow-lg w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain mx-auto md:mx-0"/>
    </div>
  </div>
  <div className="text-center mt-8">
    <p className="text-lg font-semibold text-white hover:text-green-600">
      Built with dedication by Team-<span className="text-cyan-400 hover:text-violet-700">Tech Fusion</span>
    </p>
    <p className="text-xl text-white mt-2">
      <a href="mailto:techfusion@yourdomain.com" className="hover:text-blue-400">
        techfusion@hietgroup.org
      </a>
    </p>
  </div>
</footer>
    </div>
  );
};

export default Home;



