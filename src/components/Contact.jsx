import starsImage from "../background/bg26.jpeg"
const Contact = () => {
    return (
      <div
        name="contact"
        className="w-full bg-cover text-white py-24"
        style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${starsImage})`,
                }}
      >

        <div className="max-w-screen-lg px-4 mx-auto">
          {/* Header */}
          <div className="mb-6 text-center">
            <p className="text-white font-bold text-center text-4xl underline hover:box-border hover:text-pink-500 animate-bounce">
              Contact Me
            </p>
          </div>
  
          {/* Contact Information */}
          <div className="mb-6 text-center">
            <p className="text-xl">Feel free to get in touch with me:</p>
            <ul className="text-lg mt-4 space-y-3">
              <li>
                Email:{" "}
                <a
                  href="mailto:ag0567688@gmail.com"
                  className="text-green-600 hover:underline"
                >
                  ag0567688@gmail.com
                </a>
              </li>
              <li>
                Mobile:{" "}
                <a
                  href="tel:+919560472926"
                  className="text-green-600 hover:underline"
                >
                  +91 9560472926
                </a>
              </li>
              <li>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/919560472926"
                  className="text-green-600 hover:underline"
                >
                  +91 9560472926
                </a>
              </li>
            </ul>
          </div>
  
          {/* Form Section */}
          <div className="flex justify-center">
            <form
              action="https://getform.io/f/amddkgwb"
              method="POST"
              className="w-full max-w-md p-6 bg-transparent rounded-lg shadow-md relative overflow-hidden bg-opacity-20"
            >
             
              {/* Input Fields */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="your name"
                  className="w-full px-4 py-2 mt-2 bg-gray-100 text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="your email"
                  className="w-full px-4 py-2 mt-2 bg-gray-100 text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-lg font-medium">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  required
                  placeholder="your mobile no"
                  className="w-full px-4 py-2 mt-2 bg-gray-100 text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="gender" className="block text-lg font-medium">
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  required
                  className="w-full px-4 py-2 mt-2 bg-gray-100 text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
  
              <div className="mb-4">
                <label htmlFor="gender" className="block text-lg font-medium">
                  Course/Branch
                </label>
                <select
                  name="gender"
                  id="gender"
                  required
                  className="w-full px-4 py-2 mt-2 bg-gray-100 text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select Your COURSE</option>
                  <option value="male">B.TECH/C.S.E</option>
                  <option value="female">B.TECH/IT</option>
                  <option value="other">B.TECH/C.S.E.(AI &ML)</option>
                  <option value="male">BCA</option>
                  <option value="male">POLYTECHNIC</option>
                  <option value="male">BBA</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="gender" className="block text-lg font-medium">
                  YEAR
                </label>
                <select
                  name="year"
                  id="year"
                  required
                  className="w-full px-4 py-2 mt-2 bg-gray-100 text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select Your Year</option>
                  <option value="male">1st year</option>
                  <option value="female">2nd year</option>
                  <option value="other">3rd year</option>
                  <option value="male">4th year</option>
                  
                </select>
              </div>
  
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  placeholder="enter your message"
                  rows="4"
                  className="w-full px-4 py-2 mt-2 bg-gray-100 text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md shadow-lg hover:scale-105 transition-all duration-200"
              >
                Connect Me
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  