import React from 'react'; // Importing React
import Image from 'next/image'; // Importing Next.js Image component for optimized image loading

// Defining the type for props passed to FeatureCard component
interface propsType {
  img: string; // URL of the image to be displayed
  title: string; // Title text for the feature
  desc: string; // Description text for the feature
}

const FeatureCard = ({ img, title, desc }: propsType) => {
  return (
    <div className="flex gap-8"> {/* Flex container to arrange image and text side by side */}
      <Image 
        className="h-[50px] w-auto" // Styling the image with a fixed height and automatic width
        src={img} // The image URL passed through props
        width={60} // Setting the width of the image to 60px
        height={50} // Setting the height of the image to 50px
        alt={title} // Providing an alt text for accessibility, using the title
      />

      <div className="space-y-1"> {/* Vertical space between the title and description */}
        <h2 className="font-medium text-xl uppercase">{title}</h2> {/* Displaying the title in uppercase with some font styling */}
        <p className="text-gray-600 text-[14px]">{desc}</p> {/* Displaying the description with a gray color and small font size */}
      </div>
    </div>
  );
};

export default FeatureCard; // Exporting the component for use in other parts of the application
