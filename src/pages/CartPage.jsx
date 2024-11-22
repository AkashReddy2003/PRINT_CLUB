import React, { useContext, useEffect, useState } from 'react'
import '../css/cartpage.css'
import { GloabalContext } from '../context/GlobalContext'
import { Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CartItem from '../components/CartItem';
export default function CartPage() {
    const {cart,setCart,addtocart,deletefromcart}=useContext(GloabalContext);
    useEffect(()=>{
         
    },[cart])
  return (
    <div className='cartmain'>
    <div className='cartprod'>
        <h1 className='carthead protest-guerrilla-regular'>Cart</h1>
        <div style={{width: "100%",height:2,backgroundColor:"#FFF8E8",}}/>
        <div>
            {cart?cart.map((a)=>{
                return(
                  <CartItem a={a}/>
                )
                
               
            }):""}
        </div>
    </div>
    </div>
  )
}
