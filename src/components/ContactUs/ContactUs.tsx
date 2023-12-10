"use client"
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const ContactPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(3),
}));

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className='mt-32 flex flex-col lg:flex-row-reverse justify-between items-start mb-14 gap-5'>
        <img src='contact-new.jpg' alt='contact' height={450} width={450} className="lg:hidden"/>
        <img src='contact-new.jpg' alt='contact' height={600} width={600} className="hidden lg:block"/>
        <div>
          <div className='font-bold text-center xl:text-left text-4xl w-max ml-6'>Contact Us</div>
          <ContactPaper elevation={3}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
              Contact Information
            </Typography>
            <div>

            <Button sx={{ textTransform: "none", color: "#ff40a5" }} href="mailto:salmanpary@gmail.com">
              <Stack direction="row" spacing={2} alignItems="center">
                <EmailIcon sx={{ fontSize: 30, color: '#ff40a5' }} />
                <Typography variant="body1" sx={{ fontWeight: 'bold' ,fontSize: 20}}>
                  salmanpary@gmail.com
                </Typography>
              </Stack>
            </Button>
            </div>
            <div>

            <Button sx={{ textTransform: "none", color: "#ff40a5" }}href="tel:+919605922507">
              <Stack direction="row" spacing={2} alignItems="center">
                <CallIcon sx={{ fontSize: 30, color: '#ff40a5' }} />
                <Typography variant="body1" sx={{ fontWeight: 'bold' ,fontSize:20}}>
                  +91 9605922507
                </Typography>
              </Stack>
            </Button>
            </div>
          </ContactPaper>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeWPvt8h_-57vTeQingstdLYO5m9NKSpwrQcVuP1I7JHi8QdA/viewform?embedded=true" width="380" height="900"  className='lg:hidden'>Loading…</iframe>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeWPvt8h_-57vTeQingstdLYO5m9NKSpwrQcVuP1I7JHi8QdA/viewform?embedded=true" width="600" height="900"  className='hidden lg:block'>Loading…</iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
