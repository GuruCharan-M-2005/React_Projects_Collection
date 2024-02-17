import React, { useState } from 'react'
import "./QR_code.css"
export default function QR_Code() {
  const [img,setImg]=useState("")
  const [qrdata,setqrdata]=useState("");
 async function generateQR()
  {
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrdata)}`;
      setImg(url);
    }catch(error)
    {
      console.error("Error generating QR code",error);
    }
  }
  
  return (
    <div className='app-container'>
      <h1>QR CODE GENERATOR</h1>
      {img && <img src={img} className='qr-img' />}
       <div>
        <label for="dataInput" className='input-label'>Data for QR code:</label>
        <input type='text' id="dataInput" value={qrdata}  onChange={(e)=>setqrdata(e.target.value)} placeholder='Enter data for QR code ' required/>
        <button className='generate'  onClick={generateQR}>Generate QR Code</button>
       </div>
    </div>
  )
}
 