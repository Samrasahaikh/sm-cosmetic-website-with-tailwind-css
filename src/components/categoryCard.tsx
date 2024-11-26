import React from 'react'
import Image from 'next/image';
interface propsType {
    img: string;
    type: string;
    quantity: string;
};


const CategoryCard = ({img, type, quantity}: propsType) => {
  return (
    <div className="space-y-4"> {/* Container for the card, with vertical spacing between the image and text */}
        <Image
        className="rounded-full border-4 md:border-8 border-white transition duration-300 hover:scale-110"
        src={img}
        width={250}
        height={250}
        alt={type} />
    <div>
        <h2 className="text-[14px] md:text-xl font-medium">{type}</h2> {/* Category name with responsive text size */}
        <p className="text-gray-600 text-[12px] md:text[14px]">{quantity}</p> {/* Category description or quantity with responsive text size */}
    </div>
    </div>
  );
};

export default CategoryCard ; // Exporting the CategoryCard component to be used in other parts of the app