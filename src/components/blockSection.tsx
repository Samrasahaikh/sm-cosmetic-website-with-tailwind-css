import React from 'react';
import BlogCard from '@/components/blogCard'; // Importing the BlogCard component for individual blog post cards

// Data for blog posts with image, title, date, and comment count
const data = [
    {
        img: "/blog1.jpg",
        title: "Glow-Boosting Facial Treatments",
        date: "Nov 12, 2024",
        comment: 8,
    },
    {
        img: "/img3.jpg",
        title: "Brightening & Anti-Aging Skin Care",
        date: "Nov 13, 2024",
        comment: 5,
    },
    {
        img: "/blog3.jpg",
        title: "Healthy Skin, Happy Glow",
        date: "Nov 14, 2024",
        comment: 5,
    },
];

// BlockSection Component: Displays a section for the latest blog posts
const BlockSection = () => {
  return (
    // Container for the section with padding and responsive alignment
    <div className="comatiner mx:auto pt-32 text-center px-4 max-w-screen-2xl mx-auto">
        {/* Section Title */}
        <h2 className="font-bold text-2xl">Latest News</h2>
        {/* Section Description */}
        <p className="text-gray-500 max-w-xl mx-auto">
            Present posts in a best way to highlight intersting moments of your blog
        </p>

        {/* Blog Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8 justify-center">
            {/* Loop through the blog data and render a BlogCard for each item */}
            {data.map(item => (
            <BlogCard
                key={item.date} // Key ensures each child component in a list is unique
                img={item.img} // Pass the image URL to the BlogCard
                title={item.title} // Pass the blog title to the BlogCard
                date={item.date} // Pass the blog date to the BlogCard
                comment={item.comment} // Pass the comment count to the BlogCard
             />
            ))}
        </div>
    </div>
  )
}

export default BlockSection; // Exporting the BlockSection component to use it in other parts of the application
