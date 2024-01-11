/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.dummyjson.com',"cdn.dummyjson.com"],
      },
      env:{
        RAZORPAY_KEY : 'rzp_test_u1zkyaTt3KvLp3',
        RAZORPAY_SECRET : 'am7yRnr6vOnhEPSE1iPIul3E',
      }
}

module.exports = nextConfig
