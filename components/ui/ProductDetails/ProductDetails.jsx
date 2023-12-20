"use client";

import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaStarHalfAlt } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";

export default function ProductDetails() {
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
        <div className="flex flex-col px-4">
          <div className="w-80">

          <p className="text-xs text-gray-500 font-medium mb-1">Category</p>
          <h3 className="text-[26px] font-medium text-primaryColor mb-1 leading-8">Reb Capital's Flour Bag 200gm</h3>
          <p className="flex items-center gap-1 text-[13px] text-primaryColor font-medium mb-1 cursor-pointer"><FaStarHalfAlt color="gold"/> 4.5 Rating <span className="text-gray-600 text-underline font-normal underline hover:no-underline">(15 reviews)</span></p>
          <h3 className="text-primaryColor text-[30px] font-bold mb-6">
            29.<sup className="text-[17px] ">13$</sup>
          </h3>
          </div>

          <hr />
          <div className=" my-6">
            {/* img */}
            <p>No Cost Emi for Bulk Purchase</p>
            <p>Payments above $10</p>
          </div>
          <div className="flex gap-2 mb-4">
            <button className="bg-[#f1f3eb] rounded-full text-[#092c2e] font-semibold px-5 py-3 flex gap-2 text-[15px] items-center w-48 justify-center"><BiCart size={22} color='#092c2e'/> Add to bucket</button>
            <button className="bg-[#bcea71] rounded-full text-[#092c2e] font-semibold px-5 py-2 text-[15px] items-center w-48 justify-center">Buy now</button>
          </div>
          <div className="">
            <button className="flex items-center gap-1 uppercase text-primaryColor hover:no-underline underline"><FaRegHeart size={15}/><span className="font-semibold ">Add to wishlist</span></button>
          </div>
          <p>Lorum Ipsum</p>
          <p>Lorum Ipsum</p>
        </div>
      </div>
    </div>
  );
}
