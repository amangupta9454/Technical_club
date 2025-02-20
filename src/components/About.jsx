import HeroImage from "../assets/ourachiever.jpg";
import AchieverImage from "../assets/logo.png";
import web from "../assets/web.jpg";
import android from "../assets/android.jpg";
import python from "../assets/python.jpg";
import iot from "../assets/iot.jpg";
import web3 from "../assets/web3.jpg"; 
const About = () => {
  return (
    <div className="relative bg-black">
      <div name="about" className="w-full text-white py-12 animate-slide-in relative z-5">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="flex justify-center pb-8">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold inline border-b-4 border-gray-500 pt-12 hover:text-fuchsia-500 hover:animate-float">
              About
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center w-full space-y-8 sm:space-y-0">
            <div className="flex flex-col justify-center w-full sm:w-1/2 space-y-6 text-center sm:text-left">
              <h5 className="text-xl sm:text-2xl text-justify">
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
      <div name="achiever" className="w-full bg-transparent text-white py-12 animate-slide-in relative z-5">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="flex justify-center pb-8">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold inline border-b-4 border-cyan-400 hover:text-fuchsia-500 hover:animate-pulse">
              Our Achiever
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center w-full space-y-8 sm:space-y-0">
            <div className="flex flex-col justify-center w-full sm:w-1/2 space-y-6 text-center sm:text-left">
              <h5 className="text-xl sm:text-2xl text-justify">
                One of our brilliant B.Tech 4th-year students recently achieved
                a remarkable milestone by <span className="text-yellow-500 text-2xl hover:text-cyan-600 hover:animate-pulse"> winning the prestigious Hackathon at
                Innovortex 2.0, held at the Microsoft Office in Gurgaon.</span>
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
      <div name="discover" className="w-full bg-black text-white py-12 relative z-5">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="flex justify-center pb-8">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold inline border-b-4 border-cyan-400 hover:text-fuchsia-500 hover:animate-pulse animate-slide-in">
              Discover Our Digital Realms
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
    </div>
  );
};

export default About;
