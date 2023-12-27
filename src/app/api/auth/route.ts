import { NextRequest,NextResponse } from "next/server";
import axios from "axios";
import qs from "qs";
export async function POST(req:NextRequest,res:NextResponse) {
  const { grant_type, code, client_id, client_secret, redirect_uri } = await req.json();

  const data = {
    grant_type,
    code,
    client_id,
    client_secret,
    redirect_uri,
  }
  console.log(data)
  const response = await axios.post(
    'https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code='+code+'&redirect_uri='+redirect_uri+'&client_id='+client_id+'&client_secret='+client_secret,
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
  );

  // Extract the relevant information from the LinkedIn response
  const { access_token, expires_in, refresh_token, refresh_token_expires_in, scope } = response.data;

  // Construct the response to send back to the client
  const responseData = {
    access_token,
    expires_in,
    refresh_token,
    refresh_token_expires_in,
    scope,
  };
     return NextResponse.json({
      ...responseData,
     })


}