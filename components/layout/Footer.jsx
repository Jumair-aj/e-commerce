import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#fef9ee] w-100 mt-auto">
      <section className="  py-16 justify-between  grid grid-cols-[3fr_1fr_1fr_1fr_1fr] gap-8	 text-black px-16">
      <div className="px-4">
        <Image src={"/images/logoPrimary.png"} width={250} height={22} className="mb-4"/>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          quas nostrum, nihil quae sunt fugit.
        </p>
        <h4 className="mt-8 text-lg font-semibold">Accepted payments</h4>

      </div>
      <div className="">
        <h4 className="text-xl font-medium mb-3">Department</h4>
        <ul className="text-[0.908rem] gap-1 grid">
          <li>Fashion</li>
          <li>Education Product</li>
          <li>Frozen Food</li>
          <li>Beverages</li>
          <li>Oraganic Grocery</li>
          <li>Office Supplies</li>
          <li>Beauty Products</li>
        </ul>
      </div>
      <div className="">
        <h4 className="text-xl font-medium mb-3">About Us</h4>
        <ul className="text-[0.908rem] gap-1 grid">
          <li>About Ecommerce</li>
          <li>Careers</li>
          <li>News & Blog</li>
        </ul>
      </div>
      <div className="">
        <h4 className="text-xl font-medium mb-3">Services</h4>
        <ul>
          <li></li>
        </ul>
      </div>
      <div className="">
        <h4 className="text-xl font-medium mb-3">Help</h4>
        <ul>
          <li></li>
        </ul>
      </div>
      </section>
      <div className="px-16"></div>
      <hr className="px-16"/>
      <div className="h-6"></div>
    </footer>
  );
}
