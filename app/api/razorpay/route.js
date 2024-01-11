import Razorpay from "razorpay";
import shortid from "shortid";


export async function POST(request) {
    console.log('request')
  if (request.method === "POST") {
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: 'rzp_test_u1zkyaTt3KvLp3',
      key_secret: 'am7yRnr6vOnhEPSE1iPIul3E',
    });

    // Create an order -> generate the OrderID -> Send it to the Front-end
    const payment_capture = 1;
    const amount = 499;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      return Response.json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
      return Response.json(err);
    }
  } else {
    // Handle any other HTTP method
  }
}
