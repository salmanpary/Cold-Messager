import {NextRequest, NextResponse} from 'next/server'
import axios from 'axios'
export async function POST(req:NextRequest,res:NextResponse) {
    try{
    const { access_token } = await req.json();
    console.log(access_token)
    const response = await axios.get(
      'https://api.linkedin.com/v2/userinfo',
      {headers: {'Authorization': `Bearer ${access_token}`}}
    );
    console.log(response.data)
    return NextResponse.json({
      ...response.data,
    })
}catch(e){
    console.log(e.message)
    return NextResponse.json({
        error: e,
    })
}
  
  }