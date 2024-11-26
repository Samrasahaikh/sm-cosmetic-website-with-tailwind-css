"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Data from "@/utils/productData"
import Link from 'next/link';
import Image from 'next/image';
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai';
import { MdCompareArrows } from 'react-icons/md';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';


export interface IProduct {
    id: number;
    img: string;
    name: string;
    price: number;
    category: string[];
    sale: boolean | undefined;
  }

const DetailPage = () => {

    const params = useParams();

    const [productData, setProductData] = useState<IProduct>({
        id: 0,
        img: "",
        name: "",
        price: 0,
        category: [],
        sale: false,
    });

    useEffect(() => {
        const id = params.id;
        const getProductData = Data.filter((item) => item.id.toString() ===id)[0]
        setProductData(getProductData)
    },
[params.id]);
  return (
    <div className="pt-8 ">
        <div className="bg-gray-100 py-4">
            <div className="container flex gap-4 items-center text-gray-500">
                <Link href="/" className="cursor-pointer hover:text-accent">
                Home
                </Link>

                <div className="w-[30px] h-[2px] bg-gray-400" />
                <p className="capitalize">{productData?.category[0]}</p>
                <div className="w-[30px] h-[2px] bg-gray-400" />
                <p>{productData?.name}</p>
            </div>
{/* Right side */}
<div className="container pt-8">
    <div className="grid md:grid-cols-2 gap-16">
        <div>
            <Image 
            className="w-full h-full"
            src={productData?.img}
            width={1000}
            height={1200}
            alt={productData?.name}/>
        </div>

{/* left side */}

<div className="space-y-4">
    <div className="flex items-center text-accent">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <p className="text-gray-400 text-[14px] ml-2 hover:text-accent cursor-pointer">
            (8 customer reviwe)
        </p>
    </div>


<div className="text-[#161616] space-y-4">
    <h2 className="text-3xl font-semibold">{productData?.name}</h2>
    <p className="text-xl">${productData?.price}.00</p>
</div>

<p className="text-gray-500 text-[14px]">
    {`Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     Tempora sed culpa, eos cumque excepturi veniam officia illum totam neque,
      dicta molestias beatae quos doloribus sunt recusandae eum.
       Reprehenderit, maxime adipisci.`}
</p>

<p className="text-gray-500 text-[14px]">20 in stock</p>

<button className="uppercase bg-accent py-4 px-8 rounded-lg text-white flex gap-2 items-center hover:bg-black" 
// onClick={addProductToCart}
>
    <AiOutlineShoppingCart className="text-[24px]" />
    Add to cart
</button>

<div className="flex gap-4 items-center uppercase py-4 text-[14px]">
    <div className="flex gap-1 items-center">
        <AiOutlineHeart />
        Add to wish list
    </div>

    <div className="flex gap-1 items-center">
        <MdCompareArrows />
        Compare
    </div>
</div>

<div className="w-[30px] h-[2px] bg-gray-400"/>
<div>Name: (productData?.name)</div>
<div className="capitalize">
    category: (productData?.category(0))
</div>
<div className="flex gap-1 items-center">
    Tags: {" "}
    {productData?.category.map((item) => (
        <div key={item}>{item}</div>
))}
</div>

<div className="w-[30px] h-[2px] bg-gray-400" />
<div className="flex gap-1 items-center pt-4">
    SHARE: {" "}
    <div className="flex gap-2 items-center text-[18px] ">
        < FaFacebookSquare 
        className="hover:text-accent"/> 
        <FaTwitterSquare 
        className="hover:text-accent"/>
         <FaInstagramSquare
         className="hover:text-accent" />
    </div>
</div>


</div>

    </div>
</div>


        </div>
    </div>
  )
}

export default DetailPage