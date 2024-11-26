import React from 'react';
import Image from 'next/image';
import { Whisper } from 'next/font/google';

const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

const About = () => {
  return (
    <div className="bg-gray-50 ">
      {/* Hero Section */}
      <section className="relative bg-pink-200 py-16 lg:py-24">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <h1 className={`${whisper.className} text-3xl lg:text-5xl font-bold text-accent`}>
              About Our Cosmetic Brand
            </h1>
            <p className="text-gray-600 leading-relaxed">
              We believe in enhancing natural beauty with products that are 
              sustainable, cruelty-free, and made with love. Our mission is to 
              inspire confidence through self-expression and care.
            </p>
            <button className="bg-pink-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-transparent hover:text-black transition duration-300 animate-pulse">
              Explore Our Products
            </button>
          </div>
          <div className="lg:w-1/2 transition duration-300 ease-in-out transform hover:scale-110">
            <Image
              src="/about1.jpg"
              alt="Cosmetic products"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto text-center px-4 space-y-8">
          <h2 className={`${whisper.className} text-2xl lg:text-4xl font-bold text-gray-900`}>
            Our Mission
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            To create high-quality, innovative, and sustainable cosmetic 
            products that cater to every individual’s unique beauty needs. 
            We are committed to delivering excellence and inspiring self-care.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <h2 className={`${whisper.className} text-center text-2xl lg:text-4xl font-bold text-gray-900 mb-8`}>
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition duration-300 ease-in-out transform hover:scale-110 ">
              <Image
                src="/about2.jpg"
                alt="Team member"
                width={200}
                height={200}
                className="mx-auto rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold mt-4">Sophia Lee</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition duration-300 hover:scale-110">
              <Image
                src="/about3.jpg"
                alt="Team member"
                width={200}
                height={200}
                className="mx-auto rounded-full object-cover "
              />
              <h3 className="text-lg font-semibold mt-4">Emma Brown</h3>
              <p className="text-gray-500">Head of Marketing</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition duration-300 ease-in-out transform hover:scale-110">
              <Image
                src="/about4.jpg"
                alt="Team member"
                width={200}
                height={200}
                className="mx-auto rounded-full object-cover "
              />
              <h3 className="text-lg font-semibold mt-4">Olivia Smith</h3>
              <p className="text-gray-500">Product Designer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
