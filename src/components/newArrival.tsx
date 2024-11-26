"use client"; // Tells Next.js to treat this file as a client-side component
import React, { useEffect, useState } from 'react'; // Importing React and hooks for managing state and side effects
import { Whisper } from 'next/font/google'; // Importing Google Font 'Whisper' for styling
import Data from "@/utils/productData"; // Importing product data (assumed to be an array of products)
import ProductCard, { IProduct } from './productCard'; // Importing the ProductCard component and IProduct interface

// Applying Whisper font style
const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

// Tabs for filtering products by category
const tabsData = ["All", "Skin Care", "Lipsticks", "Makeup", "Nail & Wax"];

const NewArrival = () => {
  // State to track the selected tab and the filtered product data
  const [selectedTab, setSelectedTab] = useState(0); 
  const [data, setData] = useState<IProduct[]>([]); // State to store filtered data

  // Function to shuffle the array randomly
  const shuffleArray = (array: any) => {
    return array
      .map((value: any) => ({ value, sort: Math.random() })) // Map items to include a random sort value
      .sort((a: any, b: any) => a.sort - b.sort) // Sort based on random sort value
      .map(({ value }: any) => value); // Return the shuffled array
  };

  // useEffect hook to shuffle and set initial product data when the component mounts
  useEffect(() => {
    setData(shuffleArray(Data).slice(0, 20)); // Shuffle data and slice to get the first 20 products
  }, []); // Empty dependency array ensures this runs only once on mount

  // Handle tab selection and data filtering
  const handleTab = (index: number) => {
    const category = tabsData[index].toLowerCase(); // Convert the category to lowercase for comparison
    setSelectedTab(index); // Update the selected tab index

    if (category === "all") {
      // If "All" tab is selected, shuffle and show all products
      setData(shuffleArray(Data).slice(0, 20));
      console.log("shuffleArray"); // Debugging log for shuffled data
      return;
    }

    // If a category other than "All" is selected, filter products by category
    const filterData = Data.filter((item) =>
      item.category.map((cat) => cat.toLowerCase()).includes(category)
    );
    setData(shuffleArray(filterData)); // Shuffle the filtered data and update state
  };

  return (
    <div className="container pt-32 ">
      <div className="text-center">
        {/* Title and subtitle */}
        <h3 className={`${whisper.className} text-[40px] text-gray-500`}>For Your Beauty</h3>
        <h2 className="font-semibold text-5xl">New Arrival</h2>

        {/* Tabs for filtering products by category */}
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center uppercase font-medium text-xl ">
          {tabsData.map((text, index) => (
            <li
              key={text} // Unique key for each tab
              className={`${selectedTab === index && "text-accent"} cursor-pointer hover:text-accent transition duration-300 hover:scale-110`} // Conditional styling for active tab
              onClick={() => handleTab(index)} // Set selected tab when clicked
            >
              {text} {/* Tab text */}
            </li>
          ))}
        </ul>

        {/* Grid layout for displaying product cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8">
          {/* Mapping through filtered data and rendering ProductCard for each item */}
          {data.map((item: IProduct) => (
            <ProductCard
              key={item.id} // Unique key for each product card
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              sale={item.sale}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival; // Exporting the component for use in other parts of the application
