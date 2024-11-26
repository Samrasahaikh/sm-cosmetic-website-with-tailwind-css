import React from 'react'; // Importing React library to create components.
import Image from 'next/image'; // Importing Next.js Image component for optimized images.

const Hero = () => {
  return (
    <div className="container relative pt-16">
      {/* Hero section container with padding-top for spacing */}
      
      {/* Image displayed in the Hero section */}
      <Image 
        className="w-[100%] h-auto" // Ensures the image takes up the full width and adjusts height automatically
        src="/banner6.jpg" // Source of the Hero image
        width={1500} // Width of the image
        height={900} // Height of the image
        alt="Hero Image" // Alt text for the image for accessibility
      />

      {/* Overlay box containing heading, paragraph, and button */}
      <div className="hidden sm:block absolute sm:top-[55%] md:top-[50%] xl:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
      bg-white w-[250px] h-[220px] space-y-3 lg:w-[300px] lg:h-[270px] lg:space-y-6 xl:w-[400px]
      xl:h-[300px] p-6 xl:space-y-8 transition duration-300 ease-in-out transform hover:scale-110">

        {/* Heading of the Hero section */}
        <h2 className="text-[22px] lg:text-[30px] xl:text-[40px] leading-tight font-serif">
          New Lipsticks For You Girls
        </h2>

        {/* Description text */}
        <p className="text-gray-600 text-[14px] xl:text-[16px]">
          Discover the latest and greatest lipsticks from our collection.
        </p>

        {/* Button to navigate to the shop */}
        <button className="bg-pink-800 uppercase text-white text-[12px] lg:text-[16px] py-2 xl:py-4 px-8
        rounded-md hover:bg-transparent hover:text-accent animate-bounce">
          Shop Now
        </button>

      </div>
    </div>
  );
}

export default Hero;
