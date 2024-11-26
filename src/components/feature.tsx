import React from 'react'
import FeatureCard from './featureCard'

// Defining an array of feature data, each item contains image, title, and description
const data =[
    {
        img: "/icons1.jpg", // Image URL for the first feature
        title: "Naturally Derived", // Title of the first feature
        desc: "Natural and organic beauty product" // Description of the first feature
    },
    {
        img: "/icon-shipping.jpg",
        title: "Free Shipping",
        desc: "Free shipping on all orders over $99"
    },
    {
        img: "/money-icone.jpg",
        title: "Secure Peyment",
        desc: "Fully protected when paying online"
    },
]
const Feature = () => {
  return (
    <div className="container pt-16"> {/* Container for the features, with padding on top */}
        <div className="grid md:grid-cols-2 gap-y-8 lg:gap-y-4 lg:grid-cols-3 gap-4"> {/* Grid layout for responsive design */}
         {/* Mapping over the feature data to generate FeatureCard components */}
         {data.map((item) => (
            <FeatureCard 
            key={item.title} // Using the title as the unique key for each item
            img={item.img} // Passing image URL to FeatureCard
            title={item.title} // Passing title to FeatureCard
            desc={item.desc} /> // Passing description to FeatureCard
         ))} 
        </div>
    </div>
  )
}

export default Feature; // Exporting the Feature component to be used elsewhere in the app