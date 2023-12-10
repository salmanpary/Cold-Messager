"use client"
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import PricingComponent from './PricingComponent';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
const Pricing = () => {
    const pricing = [
        {
            name: 'Free',
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
            originalprice: 15,
            discountprice: 10,
            features: ['Send 100 crafted messages per month'],
            button:<Button variant='contained' color='primary' sx={{
                backgroundColor: '#ffcc4b !important',
                color: 'black',
                width: '200px',
                textTransform: 'none',
                marginTop: '10px',
                fontWeight: 'bold',
              }}  size="large">Pay Now</Button>,
        },
        {
            name: 'Pro',
            originalprice: 50,
            discountprice: 20,
            features: ['Send unlimited messages per month'],
            button:<Button variant='contained' color='primary' sx={{
                backgroundColor: '#ffcc4b !important',
                color: 'black',
                width: '200px',
                textTransform: 'none',
                marginTop: '10px',
                fontWeight: 'bold',
              }}  size="large">Pay Now</Button>,
        },
    ];

    return (
        <>
            <Navbar />
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
                                originalprice={price.originalprice}
                                discountprice={price.discountprice}
                                features={price.features}
                                button={price.button}
                            />
                        </React.Fragment>
                    ))}
                </Stack>
            </div>
            <Footer />
        </>
    );
};

export default Pricing;
