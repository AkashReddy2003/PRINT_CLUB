import React, { useContext, useState } from 'react'
import '../css/cartpage.css'

import Button1 from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { GloabalContext } from '../context/GlobalContext';
import CartItem from '../components/CartItem';
import TrackItem from '../components/TrackItem';
export default function TrackOrder() {
  const {getOrderStatus}=useContext(GloabalContext);
  const [id,setId]=useState("");
  const [status,setStatus]=useState({});

  return (
    <div style={{backgroundColor:"#FFF8E8",justifyContent:"center",minHeight: '100vh',minWidth: '100vw',}}>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <FormControl style={{display:"flex",flexDirection: 'row', padding: 10,width: '50%',marginLeft: 50,}} >
          
           
          <Input className=' protest-guerrilla-regular'  style={{ backgroundColor: "#FFF8E8", color: "black" ,borderWidth: 0,borderRadius: 0,width: "50%",}} placeholder='Enter your Order Id' onChange={(e)=>setId(e.target.value)}/>
          <Button variant="outlined" style={{
              alignSelf: "center",
              width: "50%",
              margin: "0px auto",
              display: "block", // Ensures it behaves as a block-level element for centering
              borderWidth: 0,
                color:"black"
            }} onClick={async()=>{
              let s=await getOrderStatus(id);
              s!=null?setStatus(s):setStatus({});
              console.log(s!=null?s:{});
              }}><p className='protest-guerrilla-regular' style={{fontSize: 30,}}>TRACK</p></Button>
      </FormControl>
      {!status.id?"":<p className='protest-guerrilla-regular' style={{fontSize: 30,}}>Status:{status.status=="created"?" Printing":status.status}</p>}
      </div>
      {status.id?<><div className='cmain'>
        <h1 className='protest-guerrilla-regular ' style={{color:"black",fontSize:20,textAlign:"left",marginLeft: 10,}}>Order Details</h1>
                  
                  
                  <div style={{backgroundColor:"black",height: 1,width: "80%",marginTop:20}}></div>
                {  status.items.map((a) => {
                        return (
                          <TrackItem a={a} />
                        )
      
      
                      })}
                  
                </div>
                <div className='cartcheck' >
                <div className='cc'>
                  <h1 style={{alignSelf:"center",fontSize:30,width: "100%",marginBottom: 10,marginLeft: 10,}} className='protest-guerrilla-regular'>ORDER SUMMARY</h1>
                  <div style={{ width: "100%", height: 2, backgroundColor: "black", display: "flex" }} />
                  <p style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", height: 40 }}><span className='carttag poppins-medium'>Total Paid </span><span className='carttag1 poppins-medium'>{"Rs. " + Number(status.options.amount)}</span></p>
                
                  
                 
    
                </div>
    
              </div>
      </>    
                :""}
        
                
                
      
    </div>
  )
}
