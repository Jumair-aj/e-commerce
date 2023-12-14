"use client";

import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { ProductSlider } from "../Slider";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getProductsByCategory } from "@/store/storeMethod";

export default function Items({ type }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.store.allProducts);
  const categories = useSelector((state) => state.store.categories);
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);
  const productsByCat = useSelector((state) => state.store.prodcutsByCat);
  useEffect(() => {
    if (type == "trending") {
      dispatch(getAllProducts()).then((res) => {
        setData(res);
      });
    } else {
      categories.length &&
        setCategory(categories[Math.floor(Math.random() * 4)]);
      console.log("category", category);
      dispatch(getProductsByCategory(category)).then((res) => {
        setData(res);
      });
    }
  }, [categories]);

  return (
    <div className="mt-12 px-12 text-[#04302e] mb-12">
      <h3 className="text-3xl font-semibold">
        {type == "trending" ? "Trending Items / All category" : category}
      </h3>
      <div className="flex justify-between">
        <div className=""></div>
        <div className=""></div>
      </div>
      <div className="">
        <ProductSlider>
          {data.length &&
            data?.map((product, j) => (
              <ItemCard
                key={j}
                category={product.category}
                image={product.image}
                price={product.price}
                title={product.title}
              />
            ))}
        </ProductSlider>
      </div>
    </div>
  );
}
