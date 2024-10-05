import React, { useState } from 'react'
import HomePage from './HomePage'
import StoresPage from './StoresPage'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CollectionPage from './CollectionPage';
export default function Main() {
  const [nav,setNav]=useState("home");
  return (
    <div>
      <section id='navbar' style={{backgroundColor:"#FFF8E8",width: "100vw",minHeight:85}}>
       
       <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center',marginLeft:30,marginRight: 20,paddingTop:20}}>
       <a href='#' style={{width: "14%",fontSize: 18,}} className='poppins-medium'>Assistance</a>
       <a href='#' style={{width: "14%",fontSize: 18,}} className='poppins-medium'>Faq</a>
       <a href='#' style={{width: "14%",fontSize: 18,}} className='poppins-medium'>About</a>
       <a href='#' style={{width: "16%",fontSize: 35,}} className='protest-guerrilla-regular' onClick={()=>setNav("home")}>PRINT CLUB</a>
       <a href='#' style={{width: "14%",fontSize: 18,}} className='poppins-medium' onClick={()=>setNav("collection")}>Collections</a>
       <a href='#' style={{width: "14%",fontSize: 18,}} className='poppins-medium' onClick={()=>setNav("store")}>Stores</a>
       <a href='#' style={{width: "14%",fontSize: 18,}} className='poppins-medium'>Login</a>
       </div>
   </section>
   {nav=="home"&&<HomePage/>}
   {nav=="store"&&<StoresPage/>}
   {nav=="collection"&&<CollectionPage/>}
   
   <section style={{width:"100vw",backgroundColor:"#FFF8E8",display:"flex",justifyContent:"center",flexDirection:"column"}}>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:20}}>
        <p className='poppins-medium'>STAY UPDATED</p>
        <div>
          <p className='poppins-medium' style={{width:'30vw',textAlign:"left",fontSize:12}}>THE FIRST RULE OF PRINT CLUB: YOU DON’T MISS OUT. ENTER YOUR EMAIL FOR EXCLUSIVE OFFERS AND NEW DESIGNS STRAIGHT TO YOUR INBOX.</p>
          <div style={{display:"flex",width:"30vw",flexDirection:"row",alignItems:"center"}}>
          <input style={{width: '40vw',borderBottomWidth:2,borderColor:"black",backgroundColor:"#FFF8E8",marginTop:20}} placeholder='ENTER YOUR EMAIL'/>
          <a href='#'><ArrowOutwardIcon/></a>
          </div>
         
        </div>
        </div>
      
      <p style={{fontSize: 150,alignSelf:"center"}} className='protest-guerrilla-regular'>PRINT CLUB</p>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:20}}>
        <p className='poppins-medium'>© PRINT CLUB 2024</p>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <a href='#' className='poppins-medium' style={{marginRight: 20,}}>PRIVACY POLICY <ArrowOutwardIcon/></a>
        <a href="#" className='poppins-medium'>TERMS & CONDITIONS <ArrowOutwardIcon/></a>
         
        </div>
        </div>
      </section>
    </div>
  )
}
