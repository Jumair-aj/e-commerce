import React from 'react'
import Button from '../Button/Button'


export default function OrderSummaryBox({product}) {
  const subTotal = product?.reduce((a,{totalPrice})=>a+totalPrice,0)
  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Manu Arora Pvt Ltd",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Manu Arora",
        email: "manuarorawork@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
   const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

 

  return (
    <div className='bg-white py-4 px-12 rounded-xl'>
      <div className=" pt-2 pb-4">
        <h4 className='text-2xl text-primaryColor font-medium'>Order Summary</h4>
      </div>
      <hr />
      <div className="py-4">
        <div className="gap-4 flex flex-col justify-center">
          <div className="flex items-center gap-1">

            <input type='radio' name='paymentType' id='online' className={`border-gray-400 border-[1px] h-4 w-4 appearance-none rounded-full   checked:bg-white  checked:border-[#f48d73]`} />
            <label htmlFor='online' className='text-gray-400 font-semibold leading-[0.9]'>Online Payment</label>
          </div>
          <div className="flex items-center gap-1">

            <input type='radio' name='paymentType' id='cod' className={`border-gray-400 border-[1px] h-4 w-4 appearance-none rounded-full   checked:bg-white  checked:border-[#f48d73]`} />
            <label htmlFor='cod' className='text-gray-400 font-semibold leading-[0.9]'>Cash on delivery</label>
          </div>
          <div className="flex items-center gap-1">

            <input type='radio' name='paymentType' id='pos' className={`border-gray-400 border-[1px] h-4 w-4 appearance-none rounded-full   checked:bg-white  checked:border-[#f48d73]`} />
            <label htmlFor='pos' className='text-gray-400 font-semibold leading-[0.9]'>Pos on delivery</label>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-4 ">
        <div className="flex border-2 rounded-full w-full ps-3 bg-gray-200">
        <input type='text' className=' py-1 px-2 outline-none border-none w-full bg-gray-200' placeholder='Add promo'/>
        <Button size={'sm'} type={'tertiary'}>Apply</Button>
        </div>
      </div>
      <hr />
      <div className="py-4 grid gap-2 font-semibold">
        <div className="flex justify-between">
          <p className='text-gray-400'>Subtotal</p>
          <p className='text-primaryColor'>$ {subTotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className='text-gray-400'>Delivery fee</p>
          <p className='text-primaryColor'>$ 15.00</p>
        </div>
        <div className="flex justify-between">
          <p className='text-gray-400'>Coupon Discount</p>
          <p className='text-primaryColor'>$ 0.00</p>
        </div>
        <div className="flex justify-between">
          <p className='text-gray-400'>Taxes</p>
          <p className='text-primaryColor'>$ 10.00</p>
        </div>
        <hr />
        <div className="flex justify-between text-lg">
          <p>Total</p>
          <p>$ {(subTotal + 10 + 15).toFixed(2)}</p>
        </div>
      </div>
      <div className="gap-3 grid px-12 py-4">
        <Button type='light' size={'lg'} onClick={makePayment}>Continue with payment</Button>
        <Button size={'lg'}>Confirm order</Button>

      </div>

    </div>
  )
}
