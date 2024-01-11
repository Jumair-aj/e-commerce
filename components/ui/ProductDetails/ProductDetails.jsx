"use client";

import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaStarHalfAlt } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import { GoVerified } from "react-icons/go";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiFireFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {  getSingleProduct } from "@/store/storeMethod";
import Loader from "../Loader/Loader";
import { addToCart, removeFromCart } from "@/store/cartSlice";
import { AiOutlineMinus } from "react-icons/ai";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import toast from "react-hot-toast";

export default function ProductDetails({ params }) {
  const dispatch = useDispatch()
  const product = useSelector(state => state.store.product)
  const [loading, setLoading] = useState(true)
  const [quantity,setQuantity] = useState(0)

  useEffect(() => {

    dispatch(getSingleProduct(params.slug)).then(
      setLoading(false)
    )
  }, [])
  useEffect(() => {
    quantity && dispatch(addToCart({...product,quantity}))
  }, [quantity])
  const handleCart =(product,qty)=>{
    qty=='add'?
    setQuantity(prev=>prev+1)
    :
    quantity == 1 ? (dispatch(removeFromCart(product)),setQuantity(0)): setQuantity(prev=>prev-1);  
 
  }
  if (loading) {
    return <Loader />
  } 
  const images = product?.images?.map(item => ({
    original: item,
    thumbnail: item
  }))
  
 



  return (
    <div className="p-12">
      <h1 className="text-3xl font-bold text-primaryColor mb-8">{product.title}</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="pe-6">
        {product &&  <ImageGallery
            items={images}
            originalHeight={"10"}
            thumbnailPosition="bottom"
            thumbnailWidth="10px"
            showNav={false}
            showFullscreenButton={false}
            showPlayButton={false}
            
          />}
        </div>
        <div className="flex flex-col px-4 pe-16">
          <div className="w-100">

            <p className="text-md text-gray-500 font-medium mb-1">{product.category?.charAt(0).toUpperCase() + product.category?.slice(1)}</p>
            <h3 className="text-5xl font-medium text-primaryColor mb-4 ">{product?.brand && product.brand} {product.title}</h3>
            <p className="flex items-center gap-1 text-[13px] text-primaryColor font-medium mb-1 cursor-pointer"><FaStarHalfAlt color="gold" /> {product?.rating?.toFixed(1)} Rating <span className="text-gray-600 text-underline font-normal underline hover:no-underline">(15 reviews)</span></p>
            <h3 className="text-primaryColor text-[30px] font-bold mb-6">
              29.<sup className="text-[17px] ">13$</sup>
            </h3>
          </div>

          <hr />
          <div className=" my-6 border w-96 px-6 flex items-center gap-3 rounded-xl py-2">
            <LiaShippingFastSolid size={40} className="text-primaryColor" />
            <div className="">
              <p className="text-xs text-gray-500" >No Cost Emi for Bulk </p>
              <p className="text-xs text-primaryColor font-medium">Payments above $10</p>
            </div>
          </div>
          <div className="flex gap-2 mb-4">
            <div className="bg-[#f1f3eb] w-48 rounded-full px-5 py-3">
              {quantity ?
              <div className="flex items-center justify-between px-5">
             
              <button className="" onClick={()=>handleCart(product,'remove')}>
              <AiOutlineMinus />
              </button>
              {quantity}
              <button className="" onClick={()=>handleCart(product,'add')}>
              <HiOutlinePlusSmall />
              </button>
              </div>
              :
              <button className="  text-[#092c2e] font-semibold  flex gap-2 text-[15px] items-center  justify-center mx-auto" onClick={()=>handleCart(product,'add')} ><BiCart size={22} color='#092c2e' /> Add to Cart</button>}
              </div>
            <button className="bg-[#bcea71] rounded-full text-[#092c2e] font-semibold px-5 py-2 text-[15px] items-center w-48 justify-center">Buy now</button>
          </div>
          <div className="flex justify-between">
            <button className="flex items-center gap-1 uppercase text-primaryColor hover:no-underline underline mb-2"><FaRegHeart size={13} /><span className="font-semibold text-sm">Add to wishlist</span>
            </button>
            <p className="text-[#8f2024] flex gap-1 items-center font-semibold mb-3"><RiFireFill />100 sold in last 24 hours</p>

          </div>
          <p className="flex gap-1 items-center"><GoVerified color="green" /> 90% positive ratings from 100K+ customers</p>
          <p className="flex gap-1 items-center"><GoVerified color="green" /> 100K+ recent orders from this brand</p>
        </div>
      </div>
    </div>
  );
}
