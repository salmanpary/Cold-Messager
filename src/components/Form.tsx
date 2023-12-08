"use client";
import React, { useState } from 'react';
import { TextField, Typography } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/system';
import axios from 'axios';
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#ffcc4b',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.23)',
    },
    '&:hover fieldset': {
      borderColor: '#ffcc4b',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ffcc4b',
    },
  },
  '&:hover': {
    cursor: 'pointer !important',
  },
  marginBottom: '10px', // Add margin-bottom here
  width: 'calc(1.6 * 200px + 20px)'
});

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleButtonClick();
    }
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const validateEmail = () => {
    // A simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleButtonClick = async () => {
    // Check if the email is empty
    if (!email.trim()) {
      setEmailError(true);
      return;
    }
  
    validateEmail();
    try{
    if (!emailError) {
      // Simulate API call delay
      setLoading(true);
      const response = await axios.post('/api/register', { email });
      // Assume there's an API call here

      // await storeUserData(email,'1.2.3');
      setLoading(false);
    }
  }catch(err){
    setEmailError(true);

  }
  };
  return (
    <div className="flex flex-col justify-center items-center m-5">
      <CssTextField
        error={emailError}
        required
        id="outlined-required"
        label="Email Address"
        variant="outlined"
        value={email}
        onChange={handleEmailChange}
        onBlur={validateEmail}
        onKeyDown={handleEnterKeyPress}
      />
      {emailError && (
        <Typography variant="body2" className="text-red-500 mt-1">
          Email is not valid.
        </Typography>
      )}
      <LoadingButton 
        loading={loading}
        onClick={handleButtonClick}
        variant="contained"
        sx={{
          backgroundColor: '#ffcc4b !important',
          color: 'black',
          width: '200px',
          textTransform: 'none',
          marginTop: '10px',
          fontWeight: 'bold',
        }}
        size="large"
      >
        Submit
      </LoadingButton>
    </div>
  );
};

export default Form;