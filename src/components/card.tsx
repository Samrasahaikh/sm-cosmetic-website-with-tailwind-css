import { useAppSelector } from "@/redux/hooks";
import { RxCross1 } from "react-icons/rx";
import CartProduct from "./cartProduct";

// Cart component that takes 'setShowCart' as a prop to control cart visibility
const Cart = ({ setShowCart }: any) => {
  // Accessing the cart items from Redux store using the useAppSelector hook
  const products = useAppSelector((state) => state.cartReducer);

  // Function to calculate the total price of all items in the cart
  const getTotal = () => {
    let total = 0;
    // Iterating over each product to calculate the total
    products.forEach((item: any) => (total += item.price * item.quantity));
    return total;
  };

  return (
    <div className="bg-[#00000070] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll ">
      <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
        {/* Close button to hide the cart */}
        <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
          onClick={() => setShowCart(false)} // Calls setShowCart to hide the cart
        />

        {/* Cart header */}
        <h3 className="pl-6 text-lg font-medium text-gray-600 uppercase">
          Your Cart
        </h3>

        {/* Cart product list */}
        <div className="mt-6 space-y-2">
          {products?.map((item: any) => (
            <CartProduct
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>

        {/* Total price section */}
        <div className="flex justify-between items-center font-medium text-xl py-4">
          <p>Total</p>
          <p>${getTotal()}.00</p>
        </div>

        {/* Cart actions buttons */}
        <button className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-accent mb-4 mt-4">
          View Cart
        </button>
        <button className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-accent mb-4 mt-4">
          CheckOut
        </button>
      </div>
    </div>
  );
};

export default Cart;
