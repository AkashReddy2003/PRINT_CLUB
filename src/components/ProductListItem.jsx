import {  Button, IconButton } from '@mui/material'
import Grid from '@mui/material/Grid2';
import React, { useContext, useEffect, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import "../css/productspage.css"
import { useLocation, useNavigate } from 'react-router-dom';
import { GloabalContext } from '../context/GlobalContext';
import log from "../assets/img/logo.webp"
export default function ProductListItem({item}) {
    const navigate=useNavigate();
    const location=useLocation();
    const {addtocart}=useContext(GloabalContext);
    const [imgload,setImgload]=useState(true);
    useEffect(()=>{
      setImgload(true)
      setTimeout(()=>setImgload(false),500);
      
      
    },[item])
  return (
    <Grid className={window.screen.width>1300?"block prod":"prod"} size={{ md: 6, lg: 3, sm:6,xs:6 }} style={{backgroundColor: "#FFF8E8",display:"flex",justifyContent: 'center',alignItems: 'center',borderRadius: 25,flexDirection: 'column',cursor:"pointer"}} >
      {imgload?            <img src={log} onLoad={(e)=>setImgload(false)} className='loadimg prodimg' style={{objectFit:"contain"}} onClick={()=>{navigate(`/productpage/${item.id}`)}}/>
:            <img src={item.image} onLoad={(e)=>setImgload(false)} className='prodimg' style={{objectFit:"contain"}} onClick={()=>{navigate(`/productpage/${item.id}`)}}/>
    }
    
            <div style={{backgroundColor: "black",width: "100%",height: 5,marginBottom: 2,}}/>
            <div style={{width: "100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{textAlign:"left",marginLeft: 20,}}>
              <h1 className='protest-guerrilla-regular prodname' onClick={()=>{navigate(`/productpage/${item.id}`)}}>{item.name}</h1>
            <h1 className='poppins-medium prodcollection'>{item.store}</h1>
            <h1 className='poppins-medium prodprice' ><span style={{textDecoration:"line-through",marginRight: 10,color:"red"}}>{"Rs. 199"}</span>{"Rs. 79"}</h1>
              </div>
              <IconButton aria-label="delete" className="prodadd" style={{marginRight: 20,backgroundColor: "black",borderRadius: 10,}} onClick={()=>{addtocart({...item,type:"normal"},1)}}>
              <AddIcon style={{color:"#FFF8E8"}}/>
              </IconButton>
            </div>
            
          </Grid>
  )
}
