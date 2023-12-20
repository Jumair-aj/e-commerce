import React from 'react'
import ReactImageGallery from 'react-image-gallery'

export default function ProductDetails() {
    const images = [
        {
          original: "/images/spices.png",
          thumbnail: "/images/spices.png",
        },
        {
          original: "/images/spices.png",
          thumbnail: "/images/spices.png",
        },
        {
          original: "/images/spices.png",
          thumbnail: "/images/spices.png",
        },
        {
          original: "/images/spices.png",
          thumbnail: "/images/spices.png",
        },
        {
          original: "/images/spices.png",
          thumbnail: "/images/spices.png",
        },
        {
          original: "/images/spices.png",
          thumbnail: "/images/spices.png",
        },
      ];
      
  return (
    <div>
        <h1>Flour Bag</h1>
        <div className="flex">

        <div className="">
        <ReactImageGallery items={images} />;
        </div>
        <div className="flex flex-col">
            <p>Category</p>
            <h3>Flour Bag</h3>
            <h3>29.<sup>13$</sup></h3>

            <hr />
        </div>
        </div>
    </div>
  )
}
