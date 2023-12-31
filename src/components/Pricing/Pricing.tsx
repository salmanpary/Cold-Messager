"use client"
import React from 'react';
import PricingComponent from './PricingComponent';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
const Pricing = () => {
    const router = useRouter();
    const [loading, setLoading] = React.useState({
        loading: false,
        tier: "",
    });

    const makePayment = async (tier:string,price:number) => {
        // "use server"
        try {
            setLoading({
                loading: true,
                tier: tier,
            });
            const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
            console.log(key);
            // Make Axios call to the serverless API
            const response = await axios.post("/api/razorpay",{
                tier,price
            });
            const { order } = response.data;
            console.log(order)
            
            const options = {
                key: key,
                name: "Cold Messager",
                currency: order.currency,
                amount: order.amount,
                order_id: order.id,
                description: "Cold Messager Subscription",
                // image: logoBase64,
                handler: async function (response) {
                    console.log(response);
    
                    try {
                        const verifyResponse = await axios.post("/api/paymentverify", {
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_signature: response.razorpay_signature,
                        });
    
                        console.log("response verify==", verifyResponse.data);
    
                        if (verifyResponse.data?.message === "success") {
                            console.log("redirected.......");
                            
                            router.push("/paymentsuccess?paymentid=" + response.razorpay_payment_id);
                        }
                    } catch (error) {
                        console.error(error);
                    } finally {
                        setLoading({
                            loading: false,
                            tier: "",
                        });
                    }
                },
                notes:{
                    tier: order.notes.tier,
                    email: order.notes.email,
                    userId: order.notes.userId,
                },
                prefill: {
                    tier: order.notes.tier,
                    email: order.notes.email,
                    userId: order.notes.userId,

                    
                },
                theme:{"color":"#ff40a5"}
            };
    
            const paymentObject = new (window as any).Razorpay(options);
            paymentObject.open();
            
            paymentObject.on("payment.failed", function (response) {
                alert("Payment failed. Please try again. Contact support for help");
                console.log(response)
            });
        } catch (e) {
            console.error(e);
        }finally{
            setLoading({
                loading: false,
                tier: "",
            });
        }
    };
    const pricing = [
        {
            name: 'Free',
            indian_original_price: 417,
            indian_discount_price: 0,
            originalprice: 5,
            discountprice: 0,
            features: ['Send 5 crafted messages.'],
            button: <Button variant="contained"
            sx={{
              backgroundColor: '#ffcc4b !important',
              color: 'black',
              width: '200px',
              textTransform: 'none',
              marginTop: '10px',
              fontWeight: 'bold',
            }}
            size="large">Go to Extension</Button>,

        },
        {
            name: 'Starter',
            indian_original_price: 1250,
            indian_discount_price: 834,
            originalprice: 15,
            discountprice: 10,
            features: ['Send 100 crafted messages per month'],
            button:<LoadingButton variant='contained' color='primary' sx={{
                backgroundColor: '#ffcc4b !important',
                color: 'black',
                width: '200px',
                textTransform: 'none',
                marginTop: '10px',
                fontWeight: 'bold',
              }}  size="large"
              disabled={true}
              onClick={()=>{
                makePayment("Starter",834)
              }}
              loading={loading.loading && loading.tier === "Starter" ? true : false}
              >Pay Now</LoadingButton>,
        },
        // {
        //     name: 'Pro',
        //     indian_original_price: 4169,
        //     indian_discount_price: 1668,
        //     originalprice: 50,
        //     discountprice: 20,
        //     features: ['Send unlimited messages per month'],
        //     button:<LoadingButton variant='contained' color='primary' sx={{
        //         backgroundColor: '#ffcc4b !important',
        //         color: 'black',
        //         width: '200px',
        //         textTransform: 'none',
        //         marginTop: '10px',
        //         fontWeight: 'bold',
        //       }}  size="large"
        //         disabled={true}
        //         onClick={()=>{
        //             makePayment("Pro",1668)
        //         }}
        //       loading={loading.loading && loading.tier === "Pro" ? true : false}
        //       >Pay Now</LoadingButton>,
        // },
    ];

    return (

            <div className='mt-28 h-auto xl:h-[80vh]'>
                <div className='text-5xl font-bold pl-6'>Pricing</div>
                <Stack
                    direction={{ xs: 'column', lg: 'row' }} // Use 'column' for smaller screens and 'row' for medium and larger screens
                    sx={{ padding: 4,flexWrap:'wrap' }}
                    spacing={3}
                >
                    {pricing.map((price, index) => (
                        <React.Fragment key={index}>
                            <PricingComponent
                                name={price.name}
                                indian_original_price={price.indian_original_price}
                                indian_discount_price={price.indian_discount_price}
                                originalprice={price.originalprice}
                                discountprice={price.discountprice}
                                features={price.features}
                                button={price.button}
                            />
                        </React.Fragment>
                    ))}
                </Stack>
            </div>
   
    );
};

export default Pricing;
