import { Button } from '@mui/material';
import React, { useContext, useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { GloabalContext } from '../context/GlobalContext';
export default function CartItem({a}) {
    const [quantity,setQuantity]=useState(a.quantity);
    const {cart,setCart,addtocart,deletefromcart}=useContext(GloabalContext);        
    return(
        <div style={{display:"flex",flexDirection:"row"}}>
            <img style={{height: 180,width:180,backgroundColor:"#FFF8E8",objectFit:"contain",margin: 30,borderRadius: 10,}} src={a.product.image} />
            <div style={{width: "50%",justifyContent:"flex-start"}}>
                <h1 className='poppins-medium prodname1'>{a.product.name}</h1>
                <p className='poppins-medium prodprice1' style={{color:"grey"}}>{"Rs. "+Number(a.product.discountPrice)}</p>
                <div style={{width: 200,}}>
                <Button onClick={()=>{quantity>1?setQuantity(quantity-1):"";quantity>1?addtocart(a.product,quantity-1):"";quantity==1?"":""}} style={{}}><RemoveIcon/></Button>
    <input style={{backgroundColor: "black",color:"#FFF8E8",textAlign:"center",width: 50,}} onChange={(x)=>{setQuantity(x.target.value);x.target.value?addtocart(a.product,x.target.value):""}} value={quantity}/>
    <Button onClick={()=>{setQuantity((Number)((Number)(quantity)+1));addtocart(a.product,quantity+1)}}><AddIcon/></Button>
                  </div>
               
                </div>
                <div style={{}}>
                <h1 className='poppins-medium prodname1'>{"Rs. "+Number(a.product.discountPrice)*Number(a.quantity)}</h1>
               
                <Button onClick={()=>{deletefromcart(a.product,quantity-1)}} style={{marginTop:30,marginLeft: 20,}}><DeleteIcon style={{color:"red"}}/><span style={{color:"red"}}>Delete</span></Button>
    
                </div>
        </div>
  )
}
