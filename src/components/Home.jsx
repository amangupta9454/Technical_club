import React, { useEffect, useRef, useState } from "react";
import { FaYoutube, FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope, FaArrowUp  } from 'react-icons/fa';
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
import android from "../assets/android.jpg";
import web3 from "../assets/web3.jpg";
import web from "../assets/web.jpg";
import iot from "../assets/iot.jpg";
import python from "../assets/python.jpg";

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
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);
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
     <div className="flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-gray-800 to-gray-900 text-white overflow-hidden px-8 md:px-24 py-16 relative" onMouseMove={handleMouseMove}>
  <div className="absolute inset-0 pointer-events-none">
    {Array.from({ length: 70 }).map((_, index) => (
      <div key={index} className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-ping"
        style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)` }}></div>
    ))}
  </div>
  <div className="relative w-full md:w-1/2 p-52 px-10 text-center flex flex-col items-center md:mr-24 transform transition-transform hover:scale-110 duration-700">
    <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-300 animate-pulse tracking-wide space-x-6 shadow-lg">
      WELCOME TO  
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 animate-bounce tracking-wide">
        TECH  FUSION
      </span>
    </h2>
    <p ref={typedRef} className="text-2xl mt-6 font-semibold italic text-green-300 animate-fadeIn transition-opacity duration-500 hover:text-cyan-400">
      Innovating Tomorrow, Today
    </p>
    <div className="flex gap-6 mt-10">
      <a href="https://www.linkedin.com" className="px-12 py-6 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold rounded-full shadow-2xl transition-transform duration-500 hover:scale-125 hover:shadow-indigo-400">
        LinkedIn
      </a>
      <a href="/" className="px-12 py-6 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold rounded-full shadow-2xl transition-transform duration-500 hover:scale-125 hover:shadow-teal-400">
        Explore
      </a>
    </div>
  </div>
  <div className="w-64 md:w-96 h-68 md:h-96 transition-transform duration-500 mt-10 md:mt-0 md:ml-40 hover:scale-125 animate-spin-slow" style={{ filter: `drop-shadow(0px 0px ${Math.abs(mousePosition.x) / 25}px cyan)` }}>
    <img src={logo} alt="Tech Fusion Logo" className="w-full h-full object-contain drop-shadow-4xl hover:rotate-12 transition-transform duration-700" />
  </div>
</div>
{/* meet our team section with bg effetcs starts from here */}
      <section className="relative w-full py-16 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden" onMouseMove={handleMouseMove}>
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, index) => (
            <div key={index} className="absolute text-white opacity-75 text-xs animate-pulse"
              style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`, }}>
              ✦
            </div>
          ))}
        </div>
        <h2 className="text-4xl font-extrabold text-center text-white mb-12 relative z-5 underline animate-float transition duration-300 transform hover:scale-110 hover:text-cyan-600">
    Meet Our Team
  </h2>
  <div className="relative w-full max-w-6xl mx-auto px-4 z-5">
    <Slider {...sliderSettings}>
      {teamMembers.map((member) => (
        <div key={member.id} className="p-4">
          <div className="relative group bg-gradient-to-bl from-gray-800 via-gray-700 to-black rounded-3xl shadow-2xl p-6 text-center transform transition-all duration-500 hover:rotate-6 hover:scale-105 hover:shadow-blue-500/60 border border-cyan-500 overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-gradient-radial from-cyan-500 to-transparent blur-2xl"></div>
            <div className="relative w-36 h-36 mx-auto rounded-full border-4 border-indigo-400 overflow-hidden transform transition-transform duration-700 group-hover:translate-y-[-10px] group-hover:scale-110">
              <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
            </div>
            <h3 className="mt-4 text-3xl font-extrabold text-white tracking-widest drop-shadow-lg animate-pulse hover:text-emerald-600">{member.name} </h3>
            <p className="text-base text-gray-300 italic opacity-95 animate-fadeInUp"> {member.designation} </p>
            <a href={member.linkedin} className="relative inline-block mt-5 px-7 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-800 transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-300">
             LinkedIn
              <span className="absolute inset-0 rounded-full bg-white opacity-10 scale-0 transition-all duration-300"></span>
            </a>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  {/* collab wala section hai yh */}
        <section className="flex justify-between items-center py-10 px-6 bg-gray-800 rounded-[50px] mx-auto mt-12 w-full max-w-4xl shadow-lg transform hover:scale-105 transition duration-300 hover:ring-4 hover:ring-blue-500 animate-fade-in">
          <div className="text-center flex-1 animate-slide-in">
            <h2 className="text-3xl font-bold text-blue-500 hover:animate-pulse hover:text-cyan-500">Ready to get Started</h2>
            <p className="text-white text-lg mt-2 animate-fade-in delay-200">Collab with Us</p>
          </div>
          <div className="flex-1 flex justify-end">
            <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-xl hover:scale-110">
              <a href="tel:+919876543210">Connect With us</a>
            </button>
          </div>
        </section>
        {/* what we do section */}
        <div name="discover" className="w-full bg-transparent text-white py-12 relative z-5">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="flex justify-center pb-8">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold inline border-b-4 border-cyan-400 hover:text-cyan-500 hover:animate-pulse animate-slide-in">
              What We Do :
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { img: web, title: 'Web Development', description: 'Master HTML, CSS, JavaScript, and modern frameworks to build interactive websites.', id: 'webDevDetails' },
              { img: android, title: 'Android Development', description: 'Create mobile applications for Android devices using Java or Kotlin.', id: 'androidDevDetails' },
              { img: python, title: 'Python Programming', description: 'Explore Python, a versatile programming language used in various domains.', id: 'mlDetails' },
              { img: web3, title: 'Web3', description: 'Dive into the decentralized web, representing the next evolution of the internet.', id: 'web3Details' },
              { img: iot, title: 'IoT', description: 'Understand the network of interconnected physical devices embedded with sensors and software.', id: 'trainingDetails' },
            ].map((card, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center border-4 border-solid border-cyan-500 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative">
                  <img src={card.img} alt={card.title} className="rounded-2xl w-full h-64 object-cover mb-4 transition-transform duration-300 hover:scale-110" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-4">
                    <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                    <p className="mb-4">{card.description}</p>
                    <p id={card.id} className="mt-4">{card.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* question answer section yha se start hai */}
        <h2 className="text-4xl font-extrabold text-center pt-10 text-white mb-12 relative z-5 underline animate-float transition duration-300 transform hover:scale-110 hover:text-violet-600">
      Frequently Asked Questions
    </h2>
    <div className="relative w-full max-w-6xl mx-auto px-4 z-5">
      <div className="bg-gray-800 rounded-3xl shadow-2xl p-6 text-left transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/60">
        <details className="mb-4">
          <summary className="text-xl font-bold text-white hover:text-blue-400 cursor-pointer">What is Tech Fusion?</summary>
          <p className="text-xl text-gray-300 mt-2">Tech Fusion is a student-driven technical club dedicated to enhancing coding, development, and soft skills through hands-on projects, workshops, and competitions.</p>
        </details>
        <details className="mb-4">
          <summary className="text-xl font-bold text-white hover:text-blue-400 cursor-pointer">Is the club compulsory?</summary>
          <p className="text-xl text-gray-300 mt-2">No, If you need a club then join. Tech Fusion is a club  and we encourage programmers to work together. You may have minimum skill required for starting your programming journey.</p>
        </details>
        <details className="mb-4">
          <summary className="text-xl font-bold text-white hover:text-blue-400 cursor-pointer">How can I join Tech Fusion?</summary>
          <p className="text-xl text-gray-300 mt-2">You can join Tech Fusion by contacting us through our social media channels or by meeting with our club member during college timing.</p>
        </details>
        <details className="mb-4">
          <summary className="text-xl font-bold text-white hover:text-blue-400 cursor-pointer">What kind of projects does Tech Fusion undertake?</summary>
          <p className="text-xl text-gray-300 mt-2">We undertake a variety of projects ranging from web development, AI and ML projects, and more............</p>
        </details>
        <details className="mb-4">
          <summary className="text-xl font-bold text-white hover:text-blue-400 cursor-pointer">Are there any membership fees?</summary>
          <p className="text-xl text-gray-300 mt-2">No, there are no membership fees to join Tech Fusion. It's completely free.</p>
        </details>
        <details className="mb-4">
          <summary className="text-xl font-bold text-white hover:text-blue-400 cursor-pointer">How often do you conduct workshops?</summary>
          <p className="text-xl text-gray-300 mt-2">We conduct workshops every month, covering a wide range of topics from basic to advanced levels.</p>
        </details>
        <details className="mb-4">
          <summary className="text-xl font-bold text-white hover:text-blue-400 cursor-pointer">Who can join Tech Fusion?</summary>
          <p className="text-xl text-gray-300 mt-2">Any student from 2nd year in C.S.E/IT/C.S.E(AI & ML) branch who is interested in technology, coding, or development can join Tech Fusion.</p>
        </details>
        <details className="mb-4">
          <summary className="text-xl font-bold text-white hover:text-blue-400 cursor-pointer">How often do you conduct workshops?</summary>
          <p className="text-xl text-gray-300 mt-2">We conduct workshops every month, covering a wide range of topics from basic to advanced levels.</p>
        </details>
        <details className="mb-4">
          <summary className="text-xl font-bold text-white hover:text-blue-400 cursor-pointer">Do I need prior coding experience to join?</summary>
          <p className="text-xl text-gray-300 mt-2">No, prior experience is not required. We welcome beginners and help them learn through various activities and mentorship.</p>
        </details>
        <details className="mb-4">
          <summary className="text-xl font-bold text-white hover:text-blue-400 cursor-pointer">What tools and technologies does Tech Fusion focus on?</summary>
          <p className="text-xl text-gray-300 mt-2">We focus on a variety of tools and technologies including HTML, CSS, JavaScript, React, Tailwind CSS, Python, C, C++,Node.js,Java and more.</p>
        </details>
        <details className="mb-4">
          <summary className="text-xl font-bold text-white hover:text-blue-400 cursor-pointer">Can I showcase my projects through Tech Fusion?</summary>
          <p className="text-xl text-gray-300 mt-2">Absolutely! Members are encouraged to showcase their projects and receive feedback from peers and mentors.</p>
        </details>
        <details className="mb-4">
          <summary className="text-xl font-bold text-white hover:text-blue-400 cursor-pointer">What are the benefits of joining Tech Fusion?</summary>
          <p className="text-xl text-gray-300 mt-2">Benefits include hands-on experience, networking with like-minded peers, improving technical skills, and enhancing your resume with real-world projects.</p>
        </details>
      </div>
    </div>
      </section>
      {/* footer yha se start hai */}
      <footer className="relative bg-center text-white py-6 px-4 md:px-16 h-full bg-gradient-to-r from-black via-gray-800 to-black">
  <div className="flex flex-wrap justify-between items-center gap-6">
    <div className="flex-1 text-center md:text-left">
      <a href="/" className="text-2xl font-semibold mb-4 text-white hover:text-pink-400 block transition duration-300 transform hover:scale-105">
        Back to
      </a>
      <ul className="space-y-2 font-bold text-xl">
        <li>
          <a href="/" className="hover:text-cyan-600 hover-underline">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-cyan-600 hover-underline">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-cyan-600 hover-underline">
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
          <a href="/review" className="hover:text-green-600 hover-underline">
            Feedback
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-600 hover-underline">
            Events
          </a>
        </li>
      </ul>
    </div>
    <div className="flex-1 text-center md:text-left">
      <h2 className="font-bold text-xl text-white hover:text-violet-600 mb-10 transition duration-300 transform hover:scale-110 cursor-pointer" onClick={() => setIsOpen(true)}>
        Tech Fusion
      </h2>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg max-w-md text-center text-white">
            <h3 className="text-2xl font-semibold mb-4">About Tech Fusion</h3>
            <p className="text-lg">
              Tech Fusion is a student-driven technical club dedicated to enhancing coding, development, and soft skills through hands-on projects, workshops, and competitions.
            </p>
            <button className="mt-5 px-4 py-2 bg-violet-600 hover:bg-violet-800 text-white font-semibold rounded-lg transition duration-300" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
      <a href="https://www.hiet.org">
        <img src={hietlogo} className="bg-white rounded-lg shadow-lg w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain mx-auto md:mx-0 transition-transform duration-300 hover:rotate-12 glow" />
      </a>
    </div>
  </div>
  <div>
    <div className="flex justify-center items-center space-x-6 mt-8 hover:underline">
      <a href="https://www.youtube.com/@HiTechCollege" className="hover:text-red-500 transition duration-300 transform hover:scale-105">
        <FaYoutube size={30} />
      </a>
      <a href="https://wa.me/9651585712" className="hover:text-green-500 transition duration-300 transform hover:scale-105">
        <FaWhatsapp size={30} />
      </a>
      <a href="https://www.linkedin.com/amangupta9454" className="hover:text-blue-500 transition duration-300 transform hover:scale-105">
        <FaLinkedin size={30} />
      </a>
      <a href="https://www.instagram.com/gupta_aman_9161" className="hover:text-pink-500 transition duration-300 transform hover:scale-105">
        <FaInstagram size={30} />
      </a>
      <a href="mailto:ag0567688@gmail.com" className="hover:text-red-500 transition duration-300 transform hover:scale-105">
        <FaEnvelope size={30} />
      </a>
    </div>
  </div>
  <div className="text-center mt-8">
    <p className="text-lg font-semibold text-white hover:text-green-600 transition duration-300 transform hover:scale-105">
      This website is created by-
      <span className="text-cyan-400 hover:text-violet-700">
        <a href="https://www.instagram.com/gupta_aman_9161">Aman Gupta</a>
      </span>
    </p>
    <p className="text-lg font-semibold text-white hover:text-green-600 transition duration-300 transform hover:scale-105">
      This website belongs to-
      <span className="text-cyan-400 hover:text-violet-700">
        <a href="https://www.hiet.org">HIET-GHAZIABAD</a>
      </span>
    </p>
  </div>
  <div className="absolute bottom-4 left-4 md:right-4">
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
      <FaArrowUp size={30} />
    </button>
  </div>
</footer>
    </div>
  );
};

export default Home;
