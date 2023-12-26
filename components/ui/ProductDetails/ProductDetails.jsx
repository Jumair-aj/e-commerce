"use client";

import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaStarHalfAlt } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import { GoVerified } from "react-icons/go";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiFireFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/storeMethod";

export default function ProductDetails() {
  const dispatch= useDispatch()
  const images = [
    {
      original: "/images/logoPrimary.png",
      thumbnail: "/images/logoPrimary.png",
    },
    {
      original: "/images/logoPrimary.png",
      thumbnail: "/images/logoPrimary.png",
    },
    {
      original: "/images/logoPrimary.png",
      thumbnail: "/images/logoPrimary.png",
    },
    {
      original: "/images/logoPrimary.png",
      thumbnail: "/images/logoPrimary.png",
    },
    {
      original: "/images/logoPrimary.png",
      thumbnail: "/images/logoPrimary.png",
    },
    {
      original: "/images/logoPrimary.png",
      thumbnail: "/images/logoPrimary.png",
    },
    {
      original: "/images/logoPrimary.png",
      thumbnail: "/images/logoPrimary.png",
    },
    {
      original: "/images/logoPrimary.png",
      thumbnail: "/images/logoPrimary.png",
    },
  ];

const handleCart=()=>{
  dispatch(addToCart())
}

  return (
    <div className="p-12">
      <h1 className="text-2xl font-bold text-primaryColor mb-8">All Category / Flour Bag</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="pe-6">
          <ImageGallery
            items={images}
            originalHeight={"10"}
            thumbnailPosition="bottom"
            thumbnailWidth="10px"
            showNav={false}
            showFullscreenButton={false}
            showPlayButton={false}
          />
        </div>
        <div className="flex flex-col px-4 pe-16">
          <div className="w-80">

          <p className="text-xs text-gray-500 font-medium mb-1">Category</p>
          <h3 className="text-[26px] font-medium text-primaryColor mb-1 leading-8">Reb Capital's Flour Bag 200gm</h3>
          <p className="flex items-center gap-1 text-[13px] text-primaryColor font-medium mb-1 cursor-pointer"><FaStarHalfAlt color="gold"/> 4.5 Rating <span className="text-gray-600 text-underline font-normal underline hover:no-underline">(15 reviews)</span></p>
          <h3 className="text-primaryColor text-[30px] font-bold mb-6">
            29.<sup className="text-[17px] ">13$</sup>
          </h3>
          </div>

          <hr />
          <div className=" my-6 border w-96 px-6 flex items-center gap-3 rounded-xl py-2">
            <LiaShippingFastSolid size={40} className="text-primaryColor"/>
            <div className="">
            <p className="text-xs text-gray-500" >No Cost Emi for Bulk </p>
            <p className="text-xs text-primaryColor font-medium">Payments above $10</p>
            </div>
          </div>
          <div className="flex gap-2 mb-4">
            <button className="bg-[#f1f3eb] rounded-full text-[#092c2e] font-semibold px-5 py-3 flex gap-2 text-[15px] items-center w-48 justify-center"><BiCart size={22} color='#092c2e' onClick={handleCart}/> Add to Cart</button>
            <button className="bg-[#bcea71] rounded-full text-[#092c2e] font-semibold px-5 py-2 text-[15px] items-center w-48 justify-center">Buy now</button>
          </div>
          <div className="flex justify-between">
            <button className="flex items-center gap-1 uppercase text-primaryColor hover:no-underline underline mb-2"><FaRegHeart size={13}/><span className="font-semibold text-sm">Add to wishlist</span>
            </button>
          <p className="text-[#8f2024] flex gap-1 items-center font-semibold mb-3"><RiFireFill/>100 sold in last 24 hours</p>

          </div>
          <p className="flex gap-1 items-center"><GoVerified color="green"/> 90% positive ratings from 100K+ customers</p>
          <p className="flex gap-1 items-center"><GoVerified color="green"/> 100K+ recent orders from this brand</p>
        </div>
      </div>
    </div>
  );
}
