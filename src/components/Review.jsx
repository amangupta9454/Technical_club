import cheshta from "../assets/cheshta.jpg";
import aman from "../assets/heroImage.png";
import sanjeev from "../assets/sanjeev.jpg";
import himanshu from "../assets/himanshu.jpg";
import sachin from "../assets/sac.jpg";
import video from "../assets/video1.mp4";

const data = [
  {
    name: "Cheshta Sharma",
    img: cheshta,
    review:
      "The song competition was a delightful experience for all. Participants sang with great emotion and skill, creating an atmosphere of harmony and rhythm. The performances were diverse, ranging from soulful ballads to energetic beats, making it a memorable event.",
  },
  {
    name: "Aman Gupta",
    img: aman,
    review:
      "The project exhibition was a remarkable showcase of creativity, innovation, and talent. It provided an excellent platform for students to present their ideas and solutions to real-world problems. The diversity of projects on display, ranging from technical innovations to creative designs, demonstrated the participants' dedication and deep understanding of their respective fields.",
  },
  {
    name: "Sanjeev Kumar",
    img: sanjeev,
    review:
      "The project exhibition was an excellent platform for showcasing innovative ideas. The projects presented by students were both practical and visionary, highlighting their hard work and dedication. It was inspiring to see how technology is being applied creatively in various fields.",
  },
  {
    name: "Himanshu Gupta",
    img: himanshu,
    review:
      "The Robo Race was a thrilling competition that combined technology with excitement. It was fascinating to watch robots maneuver through obstacles and race to the finish line. The event demonstrated the cutting-edge robotics skills of the participants and kept the audience on the edge of their seats.",
  },
  {
    name: "Sachchidanad Yadav",
    img: sachin,
    review:
      "The event was well-organized and executed, with clear communication and timely management of activities. The seamless flow of the schedule ensured that all participants had a great time, and the audience remained engaged throughout the event.",
  },
];

const Review = () => {
  return (
    <div className="relative bg-cover min-h-screen py-12 px-4 overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Main Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white py-10 underline hover:text-yellow-300">
          Students Reviews
        </h1>
        <p className="text-lg text-white">
          See what our students have to say about their experience with us.
        </p>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-full md:w-11/12 lg:w-10/12">
        {data.map((d, index) => (
          <div
            key={index}
            className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-center items-center">
              <img
                src={d.img}
                alt={d.name}
                className="border-4 border-black w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow-md"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{d.name}</h3>
              <p className="text-gray-700 mt-2 text-sm">{d.review}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 bg-transparent p-8 rounded-lg shadow-lg max-w-4xl mx-auto transform transition-transform hover:scale-105 hover:rotate-1 duration-700">
  <h2 className="text-2xl font-bold text-center mb-6 text-white underline hover:text-pink-600 cursor-pointer animate-bounce">
    Submit Your Feedback
  </h2>
  <form action="https://getform.io/f/amddkgwb"method="POST"className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-in-bottom">
    <input type="hidden" name="access_key" value="b15ea15e-5423-4693-8120-87cb738d255a" />
    <input  type="text" name="name"placeholder="Enter your name"required className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transform transition-transform hover:scale-105 duration-300"/>
    <input type="text"name="name"placeholder="Enter your team name"required className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transform transition-transform hover:scale-105 duration-300"/>
    <select name="gender" required  className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transform transition-transform hover:scale-105 duration-300">
      <option value="">Select your gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
  
    <input type="tel" name="mobile" placeholder="Enter your mobile number"  required pattern="[0-9]{10}" title="Mobile number must be exactly 10 digits" maxLength="10" className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transform transition-transform hover:scale-105 duration-300"/>
    <input type="email"name="email"placeholder="Enter your email ID"required className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transform transition-transform hover:scale-105 duration-300"/>
    <select name="branch" required className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transform transition-transform hover:scale-105 duration-300">
      <option value="">Select your Branch</option>
      <option value="CSE">Computer Science & Engineering</option>
      <option value="IT">Information Technology </option>
      <option value="AI">Computer Science & Artificial Intelligence & Machine Learning </option>
      <option value="CSE">High School Student</option>
      <option value="CSE">Inter College Student</option>
    </select>
    <select  name="field" required className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transform transition-transform hover:scale-105 duration-300">
      <option value="">Select your field</option>
      <option value="Male">ROBO RACE</option>
      <option value="Female">PROJECT EXHIBITION</option>
      <option value="Female">CULTURAL EVENT</option>
      <option value="Female">RANGOLI COMPETITION</option>
      <option value="Female">DANCE COMPETITION</option>
      <option value="Female">CODE PUZZLE</option>
      <option value="Female">NUKKAD NATAK</option>
      <option value="Female">SINGING COMPETITION</option>
      <option value="Female">AD-MAD SHOW</option>
    </select>
  <select id="college-select" placeholder="Select your school/college" className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transform transition-transform hover:scale-105 duration-300">
    <option value="" disabled selected>Select your college or school</option>
    <option value="abes-engineering-college">ABES Engineering College</option>
    <option value="krishna-engineering-college">Krishna Institute of Engineering College (KIET)</option>
    <option value="ajay-kumar-garg-engineering-college">Ajay Kumar Garg Engineering College (AKGEC)</option>
    <option value="imt-ghaziabad">Institute of Management Technology (IMT) Ghaziabad</option>
    <option value="hiet-ghaziabad">Hi-Tech Institute of Engineering and Technology (HIET)</option>
    <option value="srmgpc-ghaziabad">IMS Engineering College</option>
    <option value="rd">RD Engineering College</option>
    <option value="sunder">Sunder Deep Engineering College</option>
    <option value="srmgpc-ghaziabad">Raj Kumar Goel Institute of Technology </option>
    <option value="hr-ghaziabad">HR Institute of Engineering and Technology (HIET)</option>
    <option value="dps-ghaziabad">Delhi Public School (DPS), Ghaziabad</option>
    <option value="st-marys-school">St. Marys Convent School</option>
    <option value="sanjay-gandhi-school">Sanjay Gandhi Memorial Public School</option>
    <option value="kendriya-vidyalaya-ghaziabad">Kendriya Vidyalaya, Ghaziabad</option>
    <option value="modern-school-ghaziabad">Modern School, Ghaziabad</option>
    <option value="neptune-college-of-engineering">Neptune College of Engineering</option>
    <option value="rawal-international-school">Rawal International School</option>
    <option value="ghaziabad-public-school">Ghaziabad Public School</option>
  </select>
    <textarea name="message" placeholder="Enter your feedback" required className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 md:col-span-2 transform transition-transform hover:scale-105 duration-300"></textarea>
    <button  type="submit" className="md:col-span-2 bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-110 duration-500 hover:shadow-xl">
      Submit Feedback
    </button>
  </form>
</div>
    </div>
  );
};

export default Review;
