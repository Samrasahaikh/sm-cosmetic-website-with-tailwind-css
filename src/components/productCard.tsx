import React from "react"; // Importing React to create components.
import Image from "next/image"; // Importing Next.js Image component for optimized image handling.
import { useRouter } from 'next/navigation'; // Importing useRouter for page navigation.
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai"; // Importing icons for ratings, wishlist, and cart.
import { addToCart } from "@/redux/features/cartSlice"; // Importing the Redux action to add a product to the cart.
import { useAppDispatch } from "@/redux/hooks"; // Importing the hook to dispatch Redux actions.

export interface IProduct {
  id: number; // Product ID
  img: string; // Product image URL
  name: string; // Product name
  price: number; // Product price
  sale: boolean | undefined; // Indicates if the product is on sale
}

const ProductCard = ({ id, img, name, price, sale }: IProduct) => {
  // Initialize the useRouter hook to enable navigation
  const router = useRouter();
  // Initialize dispatch function from Redux
  const dispatch = useAppDispatch();

  // Function to generate a random rating (between 0 to 5 stars)
  const getRating = () => {
    const randomNumber = (min: number, max: number) => {
      return Math.ceil(Math.random() * (max - min) + min); // Returns a random number between min and max
    };

    switch (randomNumber(0, 5)) {
      case 0:
        // No stars filled
        return (
          <div className="flex justify-center text-accent pt-4 pb-2">
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 1:
        // One star filled
        return (
          <div className="flex justify-center text-accent pt-4 pb-2">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        // Two stars filled
        return (
          <div className="flex justify-center text-accent pt-4 pb-2">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        // Three stars filled
        return (
          <div className="flex justify-center text-accent pt-4 pb-2">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        // Four stars filled
        return (
          <div className="flex justify-center text-accent pt-4 pb-2">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        // All five stars filled
        return (
          <div className="flex justify-center text-accent pt-4 pb-2">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
      default:
        return <div></div>; // Return empty div if case does not match
    }
  };

  // Function to handle adding product to the cart
  const addProductToCart = (e: React.FormEvent) => {
    e.stopPropagation(); // Prevents click event from bubbling up and triggering navigation
    const payload = {
      id, // Product ID
      name, // Product Name
      img, // Product Image
      price, // Product Price
      quantity: 1, // Product quantity (set to 1 for now)
    };

    dispatch(addToCart(payload)); // Dispatch action to add the product to the cart
  };

  return (
    <div className="group cursor-pointer transition duration-300 hover:scale-110" onClick={() => router.push(`/details/${id}`)}>
      {/* Wrapper for product card */}
      
      <div className="relative">
        {/* Product Image */}
        <Image
          className="w-full" // Full width image
          width={1000} // Image width
          height={1142} // Image height
          src={img} // Image source
          alt={name} // Alt text for accessibility
        />

        {/* Conditional rendering for SALE label */}
        {sale && (
          <div
            className="bg-red-600 inline-block absolute top-0 left-0 text-[14px] text-white
            rounded-md px-2 py-[2px] m-4"
          >
            SALE
          </div>
        )}

        {/* Hover effect container */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#00000050] opacity-0 transition-opacity
          duration-500 group-hover:opacity-100 cursor-pointer"
        >
          <div className="absolute bottom-0 mb-4 left-[50%] translate-x-[-50%] flex gap-2">
            {/* Wishlist icon */}
            <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center transition duration-300 hover:scale-110 hover:text-accent">
              <AiOutlineHeart />
            </div>
            {/* Add to cart icon */}
            <div
              className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center transition duration-300 hover:scale-110 hover:text-accent"
              onClick={addProductToCart} // Calls addProductToCart on click
            >
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
      </div>

      {/* Display product rating */}
      {getRating()}

      {/* Product name and price */}
      <h2 className="font-medium pb-3 hover:text-accent">{name}</h2>
      <p className="text-gray-500 font-light">${price}.00</p>
    </div>
  );
};

export default ProductCard;
