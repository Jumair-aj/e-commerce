"use client"

import React, { useEffect } from "react";
import { CategorySlider } from "../Slider";
import CategoryBox from "./CategoryBox";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "@/store/storeMethod";

export default function CategorySection() {
    const dispatch = useDispatch()
    const categories = useSelector(state=> state.store.categories)

    useEffect(() => {
    dispatch(getAllCategories())
    }, [])
    console.log(categories)
    
  return (
    <div className="mt-12 px-12 text-[#04302e] mb-12">
      <div>
        <h3 className="text-3xl font-semibold ">Categories</h3>
        <div className="flex justify-between">
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
      <div className=" my-6  gap-4">
        <CategorySlider>
          {categories.length && categories?.map((category, j) => (
            <CategoryBox key={j} category={category}/>
          ))}
        </CategorySlider>
      </div>
    </div>
  );
}
