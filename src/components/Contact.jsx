import starsImage from "../background/bg26.jpeg";
const Contact = () => {
  return (
    <div name="contact"className="w-full bg-cover text-white py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${starsImage})`,}}>
      <div className="max-w-screen-lg px-4 mx-auto">
        {/* Heading Section */}
        <div className="mb-6 text-center">
          <p className="text-white font-bold text-4xl underline hover:text-pink-500 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-1s">
            Contact Me
          </p>
        </div>
        <div className="mb-8 text-center animate__animated animate__fadeIn animate__delay-2s">
  <p className="text-xl mb-4 animate__animated animate__fadeInUp animate__delay-1s">
    Feel free to get in touch with me:
  </p>
  <ul className="text-lg mt-4 space-y-3 animate__animated animate__fadeIn animate__delay-2s">
    <li className="animate__animated animate__fadeIn animate__delay-3s">
      Email:{" "}
      <a href="mailto:ag0567688@gmail.com"className="text-green-600 hover:underline hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
        ag0567688@gmail.com
      </a>
    </li>
    <li className="animate__animated animate__fadeIn animate__delay-4s">
      Mobile:{" "}
      <a href="tel:+919560472926"className="text-green-600 hover:underline hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
        +91 9560472926
      </a>
    </li>
    <li className="animate__animated animate__fadeIn animate__delay-5s">
      WhatsApp:{" "}
      <a href="https://wa.me/919560472926"className="text-green-600 hover:underline hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
        +91 9560472926
      </a>
    </li>
  </ul>
</div>
        {/* Contact Form Section */}
        <div className="flex justify-center">
          <form
            action="https://getform.io/f/amddkgwb"
            method="POST"
            className="w-full max-w-md p-6 bg-transparent backdrop-blur-md rounded-xl shadow-2xl relative overflow-hidden transform animate__animated animate__fadeInUp animate__delay-3s"
            style={{  backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
            }}>
            <div className="absolute inset-0 bg-opacity-20 blur-3xl -z-10 animate__animated animate__fadeIn animate__delay-4s"></div>
            {[
              { label: "Name", type: "text", name: "name", placeholder: "Your name" },
              { label: "Email", type: "email", name: "email", placeholder: "Your email" },
              { label: "Mobile Number", type: "tel", name: "mobile", placeholder: "Your mobile number",  pattern: "^[7-9][0-9]{9}$", title: "Enter a valid Indian mobile number starting with 7, 8, or 9" },
            ].map(({ label, type, name, placeholder, pattern }) => (
              <div className="mb-6 group animate__animated animate__fadeIn animate__delay-5s" key={name}>
                <label htmlFor={name} className="block text-lg font-semibold text-gray-200">
                  {label}
                </label>
                <input type={type} name={name} id={name} required placeholder={placeholder}pattern={pattern}
                  className="w-full px-4 py-3 mt-2 bg-gray-100 text-gray-800 rounded-lg focus:ring-4 focus:ring-blue-400 focus:outline-none transition-transform duration-300 transform group-hover:scale-105 hover:shadow-lg animate__animated animate__pulse animate__infinite"/>
              </div>
            ))}
            {[
              {
                label: "Gender",
                name: "gender",
                options: [
                  { value: "", label: "Select Gender" },
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "other", label: "Other" },
                ],
              },
              {
                label: "Course/Branch",
                name: "course",
                options: [
                  { value: "", label: "Select Your Course" },
                  { value: "btech-cse", label: "B.TECH/C.S.E" },
                  { value: "btech-it", label: "B.TECH/IT" },
                  { value: "btech-aiml", label: "B.TECH/C.S.E.(AI & ML)" },
                  { value: "bca", label: "BCA" },
                  { value: "polytechnic", label: "POLYTECHNIC" },
                  { value: "bba", label: "BBA" },
                ],
              },
              {
                label: "Year",name: "year",
                options: [
                  { value: "", label: "Select Your Year" },
                  { value: "1st-year", label: "1st Year" },
                  { value: "2nd-year", label: "2nd Year" },
                  { value: "3rd-year", label: "3rd Year" },
                  { value: "4th-year", label: "4th Year" },
                ],
              },
            ].map(({ label, name, options }) => (
              <div className="mb-6 group animate__animated animate__fadeIn animate__delay-6s" key={name}>
                <label htmlFor={name} className="block text-lg font-semibold text-gray-200">{label} </label>
                <select name={name}id={name}required className="w-full px-4 py-3 mt-2 bg-gray-100 text-gray-800 rounded-lg focus:ring-4 focus:ring-blue-400 focus:outline-none transition-transform duration-300 transform group-hover:scale-105 hover:shadow-lg animate__animated animate__pulse animate__infinite">
                  {options.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>))}
                </select>
              </div>
            ))}
            <div className="mb-6 group animate__animated animate__fadeIn animate__delay-7s">
              <label htmlFor="message" className="block text-lg font-semibold text-gray-200">
                Message
              </label>
              <textarea name="message"id="message"required placeholder="Enter your message"rows="4"className="w-full px-4 py-3 mt-2 bg-gray-100 text-gray-800 rounded-lg focus:ring-4 focus:ring-blue-400 focus:outline-none transition-transform duration-300 transform group-hover:scale-105 hover:shadow-lg animate__animated animate__pulse animate__infinite"></textarea>
            </div>
            <button type="submit"className="w-full py-3 mt-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white font-bold text-lg rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 animate__animated animate__bounceInUp animate__delay-1s hover:animate__pulse hover:animate__infinite hover:ring-4 hover:ring-blue-400">
            Connect Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
