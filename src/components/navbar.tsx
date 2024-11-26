import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa"; // Icon for close button

const Navbar = ({ setShowCart }: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility

  return (
    <div className="bg-white py-4 sticky top-0 z-10">
      <div className="container flex justify-between items-center">
        {/* Hamburger menu icon */}
        <RxHamburgerMenu
          className="sm:hidden text-[26px] cursor-pointer transition duration-300 hover:scale-110 hover:text-accent"
          onClick={() => setIsSidebarOpen(true)}
        />

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-semibold hover:text-accent font-serif animate-bounce text-pink-900"
        >
          SM Cosmetics
        </Link>

        {/* Links for larger screens */}
        <ul className="gap-6 hidden sm:flex text-pink-900 font-semibold">
          <Link href="/" className="navLink transition duration-300 hover:scale-110">
            Home
          </Link>
          <Link href="/about" className="navLink transition duration-300 hover:scale-110">
            About
          </Link>
          <Link href="/blog" className="navLink transition duration-300 hover:scale-110">
            Blog
          </Link>
          <Link href="/contact" className="navLink transition duration-300 hover:scale-110">
            Contact
          </Link>
        </ul>

        {/* Icons */}
        <div className="flex gap-4 text-[26px]">
          <div
            className="relative cursor-pointer"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShoppingCart className="transition duration-300 hover:scale-110 hover:text-accent" />
            <div
              className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] 
              rounded-full text-white text-[14px] grid place-items-center"
            >
              0 {/* Replace with cart count */}
            </div>
          </div>
          <AiOutlineSearch className="transition duration-300 hover:scale-110 hover:text-accent"/>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-20 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "250px" }}
      >
        {/* Close button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <FaTimes
            className="text-[24px] cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>

        {/* Sidebar Links */}
        <ul className="p-4 space-y-4">
          <li>
            <Link href="/" className="navLink" onClick={() => setIsSidebarOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="navLink" onClick={() => setIsSidebarOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="navLink" onClick={() => setIsSidebarOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="navLink" onClick={() => setIsSidebarOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
