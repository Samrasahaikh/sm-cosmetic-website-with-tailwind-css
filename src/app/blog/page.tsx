import React from "react";
import Image from "next/image";
import { Whisper } from 'next/font/google';

const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

const blogs = [
  {
    id: 1,
    img: "/facial.jpg",
    title: "Top 5 Natural Ingredients for Radiant Skin",
    desc: "Discover the best natural ingredients to enhance your beauty routine.",
    date: "November 20, 2024",
    comments: 10,
  },
  {
    id: 2,
    img: "/blog2.jpg",
    title: "The Ultimate Guide to Skincare in Winter",
    desc: "Protect your skin from dryness with our expert tips.",
    date: "November 18, 2024",
    comments: 8,
  },
  {
    id: 3,
    img: "/makeUp.jpg",
    title: "Makeup Trends to Watch in 2025",
    desc: "Stay ahead with the latest beauty trends this season.",
    date: "November 15, 2024",
    comments: 15,
  },
];

const BlogPage = () => {
  return (
    <div className="bg-gray-50 ">


      {/* Blog Cards Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className={`${whisper.className} text-3xl font-bold text-center mb-8 text-accent `}>
          Latest Articles
        </h2>
        <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
          Explore expert tips, beauty trends, and skincare advice to enhance
          your daily routine.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-110"
            >
              <Image
                src={blog.img}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 space-y-3">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-sm text-gray-500">{blog.desc}</p>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{blog.date}</span>
                  <span>{blog.comments} Comments</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
