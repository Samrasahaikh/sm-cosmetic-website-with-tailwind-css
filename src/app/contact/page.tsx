"use client";
import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here, like sending data to a backend or an API.
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-200">

      {/* Contact Form Section */}
      <section className="container mx-auto py-16 px-4">

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-md- rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6 ">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border rounded-lg"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border rounded-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 mt-2 border rounded-lg"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-lg hover:bg-accent transition duration-300"
              >
                Submit Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4 text-accent">Contact Information</h3>
            <p className="text-gray-600 mb-2">
              <strong className="text-accent">Address:</strong> Karachi
            </p>
            <p className="text-gray-600 mb-2">
              <strong className="text-accent">Email:</strong> shaikhsamra855@gmail.com
            </p>
            <p className="text-gray-600 mb-4">
              <strong className="text-accent">Phone:</strong> +923168596692
            </p>

            {/* Social Media Links */}
            <div className="flex gap-4 font-2xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl">
                <i className="fab fa-facebook-square hover:text-accent"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl">
                <i className="fab fa-instagram hover:text-accent"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl">
                <i className="fab fa-twitter-square hover:text-accent"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl">
                <i className="fab fa-linkedin hover:text-accent"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xl">
                <i className="fab fa-github-square hover:text-accent"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
