import React, { useState } from "react";
import axios from "axios";
import BtnPrimary from "../../components/BtnPrimary";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 sm:px-8 py-12 mt-12 min-h-screen bg-white font-montserrat">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-[#004080] shadow-lg p-4 w-full max-w-4xl">
        Contact Me
      </h2>

      <p className="text-gray-700 mb-6 max-w-2xl text-start">
        I would love to hear from you! Please fill out the form below or reach
        out to me directly via email or phone.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-full bg-[#f9f9f9] p-6 rounded-lg shadow-md"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>

        <div className="mt-4">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-[#004080] hover:bg-[#003366] text-white font-bold py-2 px-6 rounded transition duration-300"
          >
            Send Message
          </button>
        </div>

        {submitted && (
          <p className="mt-4 text-green-600">Message sent successfully!</p>
        )}
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </form>

      <div className="mt-10 text-start max-w-2xl">
        <h3 className="text-xl font-semibold text-[#004080]">
          Contact Information
        </h3>
        <p className="text-gray-700">Email: sachinsingh020406@gmail.com</p>
        <p className="text-gray-700">Phone: 7987723186</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center sm:space-x-6 mt-8">
        <BtnPrimary text="Home" to="/" />
        <BtnPrimary text="Download Resume" to="/SachinSingh.pdf" download />
      </div>
    </div>
  );
};

export default Contact;
