"use client"
import React,{useEffect} from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
const Loginpage = () => {
  
  const searchParams = useSearchParams();
  const code=searchParams.get('code');
   useEffect(()=>{
    if(code){
      handleLinkedInAuth(code);
      
    }

   },[code])

  const handleLinkedInAuth = async (code) => {

  
    try {
      const data = {
        grant_type: 'authorization_code',
        code: code,
        client_id: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET,
        redirect_uri: "http://localhost:3000/login",
      };
      const res2 = await axios.post(
        '/api/auth',
        data
      );
      console.log(res2);
      if(res2.status===200){

        const bearer_token=res2.data.access_token;
        console.log(bearer_token);
        getData(bearer_token);
      }
    } catch (error) {
      console.error('LinkedIn Auth Error:', error);
    }
  };
  const getData = async (bearer_token:string) => {
    try {
      const res = await axios.post('/api/auth/getdetails',{
        access_token:bearer_token
      });
      console.log(res.data);
      if(!res.data.error){
      localStorage.setItem('user',JSON.stringify(res.data));
      }
    } catch (error) {
      console.error('LinkedIn Auth Error:', error);
    }
  }
  const handleClick = () => {
    console.log('clicked');
  };


  return <div className='mt-32'>

    <a href="https://www.linkedin.com/uas/login?session_redirect=%2Foauth%2Fv2%2Flogin-success%3Fapp_id%3D215322612%26auth_type%3DAC%26flow%3D%257B%2522scope%2522%253A%2522email%2Bopenid%2Bprofile%2Bw_member_social%2522%252C%2522state%2522%253A%2522foobar%2522%252C%2522appId%2522%253A215322612%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522currentSubStage%2522%253A0%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522creationTime%2522%253A1703628571049%252C%2522redirectUri%2522%253A%2522http%253A%252F%252Flocalhost%253A3000%252Flogin%2522%257D&fromSignIn=1&trk=oauth&cancel_redirect=%2Foauth%2Fv2%2Flogin-cancel%3Fapp_id%3D215322612%26auth_type%3DAC%26flow%3D%257B%2522scope%2522%253A%2522email%2Bopenid%2Bprofile%2Bw_member_social%2522%252C%2522state%2522%253A%2522foobar%2522%252C%2522appId%2522%253A215322612%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522currentSubStage%2522%253A0%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522creationTime%2522%253A1703628571049%252C%2522redirectUri%2522%253A%2522http%253A%252F%252Flocalhost%253A3000%252Flogin%2522%257D" >page</a>;
  </div>
};

export default Loginpage;
