import { Whisper } from "next/font/google";
import CategoryCard from "./categoryCard";
import React from "react";

// Initializing the Whisper font with specific subsets and weight
const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

// Array holding the data for each category, including image, type, and quantity
const data = [
  {
    img: "/top8.jpg", // Image for Makeup category
    type: "Makeup", // Name of the category
    quantity: "(4 Items)", // Number of items in the category
  },
  {
    img: "/top2.jpg",
    type: "Nail & Wax",
    quantity: "(8 Items)",
  },
  {
    img: "/top5.jpg",
    type: "Skin Care",
    quantity: "(5 Items)",
  },
];


const Category = () => {
  return (
    // Container for the category section with a background image and padding
    <div className="bg-[url(/top4.jpg)] bg-cover bg-center bg-no-repeat py-16 mt-32 w-full mx-auto max-w-screen-2xl">
      <div className="container text-center text-white">
         {/* Title section with Whisper font for a special style */}
        <h3 className={`${whisper.className} text-[40px] font-bold`}>
          Favorite Category
        </h3>

        {/* Subheading for the category */}
        <h2 className="text-[40px] font-semibold">Top Category</h2>

        {/* Flexbox container for arranging the category cards */}
        <div className="flex justify-center gap-4 md:gap-16 pt-8">
          
          {/* Looping through the data array to display each category card */}
          {data.map((item) => (
            <CategoryCard
              key={item.type} // Using category type as the unique key for each card
              img={item.img} // Passing the image URL
              type={item.type} // Passing the category type
              quantity={item.quantity}  // Passing the quantity
            />
          ))};
        </div>
      </div>
    </div>
  );
};

export default Category;
