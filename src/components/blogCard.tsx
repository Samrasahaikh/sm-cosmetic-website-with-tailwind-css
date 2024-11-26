import React from "react";
import Image from "next/image";

interface propsType {
  img: string;
  title: string;
  date: string;
  comment: number;
}

const BlogCard = ({ img, title, date, comment }: propsType) => {
  return (
    <div className="space-y-4">
      {/* Image of the blog post */}
      <Image
        className="text-accent font-medium w-full h-[300px] object-cover transition duration-300 hover:scale-110"
        src={img}
        alt="post"
        width={600}
        height={600}
      />

      {/* Date and comment count */}
      <div className="text-accent font-medium">
        <span>{date} /</span>
        <span>{comment}Comments</span>
      </div>

      {/* Blog post title */}
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
  );
};

export default BlogCard;
