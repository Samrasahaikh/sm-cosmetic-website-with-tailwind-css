import { useAppDispatch } from "@/redux/hooks";
import { RxCross1 } from "react-icons/rx";
import { removeFromCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import React from "react";

// Defining the props type for the CartProduct component
interface propsType {
  id: number; // Unique identifier for the product
  img: string; // Image URL of the product
  name: string; // Name of the product
  price: number; // Price of the product
  quantity: number; // Quantity of the product in the cart
}

// The CartProduct component, which displays a product in the cart
const CartProduct: React.FC<propsType> = ({
  id,
  img,
  name,
  price,
  quantity,
}) => {
  // Dispatch function to trigger actions in Redux
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between items-center">
      {/* Product details section */}
      <div className="flex items-center gap-4">
        <Image
          className="h-[80px]"
          src={img}
          alt={name}
          width={100}
          height={100}
        />
        <div className="space-y-2">
          <h3 className="font-medium">{name}</h3> {/* Product name */}
          <p className="text-gray-600 text-[14px]">
            {quantity} + ${price}.00
          </p>{" "}
          {/* Quantity and price of the product */}
        </div>
      </div>

      {/* Cross icon to remove the item from the cart */}
      <RxCross1
        className="cursor-pointer"
        onClick={() => dispatch(removeFromCart(id))}
      />
    </div>
  );
};

export default CartProduct;
