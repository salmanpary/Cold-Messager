import { NextRequest,NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";

const instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET,
  });


export async function POST(req:NextRequest,res:NextResponse) {
  const {tier,price}=await req.json()
  const userid="test" //from jwt
  const email="salmanpary@gmail.com" //from jwt
    const payment_capture = 1;
    const amount = price * 100 // amount in paisa. In our case it's INR 1
    const currency = "INR";
    const options = {
        amount: (amount).toString(),
        currency,
        receipt: shortid.generate(),
        payment_capture,
        notes: {
            // These notes will be added to your transaction. So you can search it within their dashboard.
            // Also, it's included in webhooks as well. So you can automate it.
            userId: userid,
            email: email,
            tier:tier
            
        }
    };

   const order = await instance.orders.create(options);
  return NextResponse.json({ msg: "success",order });
}


// export async function POST(req) {
//   const body = await req.json();


//   return NextResponse.json({ msg: body });
// }