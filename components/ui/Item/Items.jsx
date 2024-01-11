"use client";

import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { ProductSlider } from "../Slider";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getProductsByCategory } from "@/store/storeMethod";

export default function Items({ type }) {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.store.allProducts);
  const categories = useSelector((state) => state.store.categories);

  const [data, setData] = useState([]);
  const productsByCat = useSelector((state) => state.store.prodcutsByCat);

 
  useEffect(() => {
    if (type == "trending") {
      dispatch(getAllProducts());
    } else {
      categories.length && dispatch(getProductsByCategory(type.toLowerCase())).then((res) => {
          setData(res);
          setData(prev => prev.concat(prev))
        });
    }
  }, [categories]);

  
  return (
    <div className="mt-12 px-12 text-[#04302e] mb-12">
      <h3 className="text-3xl font-semibold">
        {type == "trending" ? "Trending Items / All category" : type}
      </h3>
      <div className="flex justify-between">
        <div className=""></div>
        <div className=""></div>
      </div>
      <div className="">
 
        <ProductSlider>
          {type == "trending"
            ? allProducts?.products?.length &&
              allProducts?.products?.map((product, j) => (
                <ItemCard
                id={product.id}
                  key={j}
                  category={product.category}
                  image={product.images}
                  price={product.price}
                  title={product.title}
                />
              ))
            : data.length &&
            data?.map((product, j) => (
              <ItemCard
              id={product.id}
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
