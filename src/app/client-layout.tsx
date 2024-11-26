"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useState } from "react";
import Cart from "@/components/card";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

const [showCart , setShowCart] = useState(false);


  return (
    <>
      <Provider store={store}>
        <Navbar  setShowCart ={setShowCart} />
        {showCart && <Cart setShowCart = {setShowCart}/>}
        {children}
        <Footer />
      </Provider>
    </>
  );
}
