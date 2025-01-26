import HeroImage from "../assets/ourachiever.jpg";
import AchieverImage from "../assets/logo.png";
import web from "../assets/web.jpg";
import android from "../assets/android.jpg";
import python from "../assets/python.jpg";
import iot from "../assets/iot.jpg";
import web3 from "../assets/web3.jpg"; 

const About = () => {
  const handleButtonClick = (id) => {
    const element = document.getElementById(id);
    element.classList.toggle('hidden');
  };

  return (
    <div className="bg-gray-950">
      {/* About Section */}
      <div  name="about"  className="w-full  text-white py-12 ">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
          <div className="flex justify-center pb-8">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold inline border-b-4 border-gray-500 pt-12 hover:text-fuchsia-500 hover:animate-pulse">
              About
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center w-full space-y-8 sm:space-y-0">
            <div className="flex flex-col justify-center w-full sm:w-1/2 space-y-6 text-center sm:text-left">
              <h5 className="text-xl sm:text-2xl">
                <span className="text-cyan-400 text-2xl">Tech Fusion</span> is a
                dynamic platform that brings together the brightest minds from
                both faculty and students to create a thriving ecosystem of
                innovation and technical excellence. Our mission is to bridge
                the gap between academic learning and real-world application,
                empowering students to expand their knowledge and enhance their
                skills in diverse technological domains.
              </h5>
            </div>
            <div className="flex justify-center sm:justify-end items-center sm:w-1/2">
              <img src={AchieverImage} alt="Profile" className="rounded-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5"/>
            </div>
          </div>
        </div>
      </div>

      {/* Our Achiever Section */}
      <div  name="achiever"  className="w-full bg-transparent text-white py-12 ">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="flex justify-center pb-8">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold inline border-b-4 border-cyan-400 hover:text-fuchsia-500 hover:animate-pulse">
              Our Achiever
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center w-full space-y-8 sm:space-y-0">
            <div className="flex flex-col justify-center w-full sm:w-1/2 space-y-6 text-center sm:text-left">
              <h5 className="text-xl sm:text-2xl">
                One of our brilliant B.Tech 4th-year students recently achieved
                a remarkable milestone by winning the prestigious Hackathon at
                Innovortex 2.0, held at the Microsoft Office in Gurgaon.
                Competing against some of the brightest minds from across the
                country, their innovative solution and technical expertise stood
                out, earning them the top spot in this highly competitive event.
                This achievement reflects not only their dedication and hard
                work but also the quality of talent and learning fostered within
                our institution. We are immensely proud of their success and are
                confident they will continue to excel in their future endeavors.
              </h5>
            </div>
            <div className="flex justify-center sm:justify-end items-center sm:w-1/2">
              <img src={HeroImage} alt="Achiever" className="rounded-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5"/>  
            </div>
          </div>
        </div>
      </div>

      {/* Discover Our Digital Realms Section */}
      <div name="discover" className="w-full bg-cover text-white py-12  ">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="flex justify-center pb-8">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold inline border-b-4 border-cyan-400 hover:text-fuchsia-500 hover:animate-pulse">
              Discover Our Digital Realms
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:border-8 hover:border-violet-500 border-8 border-solid border-cyan-500">
              <img src={web} alt="Web Development" className="rounded-2xl w-full h-80 object-cover mb-4"/>
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className="mb-4">
                Learn the fundamentals of building websites, user interfaces,
                and web applications. Master HTML, CSS, JavaScript, and modern
                frameworks.
              </p>
              <button onClick={() => handleButtonClick("webDevDetails")}className="bg-cyan-400 text-white py-2 px-4 rounded">
                Know More
              </button>
              <p id="webDevDetails" className="hidden mt-4">
                Our web development services include creating highly interactive
                and user-friendly websites using the latest technologies and
                best practices.
              </p>
            </div>
            <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:border-8 hover:border-pink-600 border-8 border-solid border-cyan-500">
              <img src={android}alt="Android Development"className="rounded-2xl w-full h-80 object-cover mb-4"/>
              <h3 className="text-2xl font-bold mb-4">Android Development</h3>
              <p className="mb-4">
                Build mobile applications for Android devices using Java or
                Kotlin, and deploy them on the Google Play Store.
              </p>
              <button onClick={() => handleButtonClick("androidDevDetails")}className="bg-cyan-400 text-white py-2 px-4 rounded">
                 Know More
              </button>
              <p id="androidDevDetails" className="hidden mt-4">
                Learn how to create high-performance Android apps, from
                designing the user interface to integrating databases and
                services.
              </p>
            </div>
            <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:border-8 hover:border-green-700 border-8 border-solid border-cyan-500">
              <img src={python} alt="Machine Learning"className="rounded-2xl w-full h-80 object-cover mb-4"/>
              <h3 className="text-2xl font-bold mb-4">Python Programming</h3>
              <p className="mb-4">
                Python is a versatile, high-level programming language .
              </p>
              <button  onClick={() => handleButtonClick("mlDetails")} className="bg-cyan-400 text-white py-2 px-4 rounded">
                 Know More
              </button>
              <p id="mlDetails" className="hidden mt-4">
                Python is a versatile,It is widely used across various fields,
                including web development, data analysis, artificial
                intelligence, machine learning, and scientific computing.
              </p>
            </div>
            <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:border-8 hover:border-green-700 border-8 border-solid border-cyan-500">
              <img src={web3} alt="Web3" className="rounded-2xl w-full h-80 object-cover mb-4" />
              <h3 className="text-2xl font-bold mb-4">Web3</h3>
              <p className="mb-4">
              Web3, or the decentralized web, represents the next evolution of the internet.
              </p>
              <button  onClick={() => handleButtonClick("web3Details")} className="bg-cyan-400 text-white py-2 px-4 rounded">
                Know More
              </button>
              <p id="web3Details" className="hidden mt-4">
              It aims to create a transparent, secure, and user-controlled digital environment by enabling peer-to-peer interactions without intermediaries. Core components of Web3 include decentralized applications (dApps), smart contracts, and digital assets like cryptocurrencies and NFTs.
              </p>
            </div>
            <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:border-8 hover:border-green-700 border-8 border-solid border-cyan-500">
              <img src={iot} alt="Training"  className="rounded-2xl w-full h-80 object-cover mb-4"/>
              <h3 className="text-2xl font-bold mb-4">IOT</h3>
              <p className="mb-4">
              The Internet of Things (IoT) refers to the network of interconnected physical devices embedded with sensors, software.
              </p>
              <button onClick={() => handleButtonClick("trainingDetails")} className="bg-cyan-400 text-white py-2 px-4 rounded">
                Know More
              </button>
              <p id="trainingDetails" className="hidden mt-4">
              These devices range from everyday household items like smart thermostats and wearables to industrial machinery and healthcare monitoring systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
