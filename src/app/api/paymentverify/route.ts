import { NextRequest,NextResponse } from "next/server";
import crypto from "crypto";
export async function POST(req:NextRequest,res:NextResponse) {
   
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
  await req.json();
   const body = razorpay_order_id + "|" + razorpay_payment_id;


 const expectedSignature = crypto
   .createHmac("sha256", process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET)
   .update(body.toString())
   .digest("hex");

const isAuthentic = expectedSignature === razorpay_signature;


 if (isAuthentic) {
 



//   await dbConnect()

//    await Payment.create({
//      razorpay_order_id,
//      razorpay_payment_id,
//      razorpay_signature,
//    });

  //  return NextResponse.redirect(new URL('/paymentsuccess', req.url));

} else {
    return NextResponse.json({
        message: "fail"
      }, {
        status: 400,
      })

}


return NextResponse.json({
    message: "success"
  }, {
    status: 200,
  })

}