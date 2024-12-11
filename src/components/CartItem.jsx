import { Button } from '@mui/material';
import React, { useContext, useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { GloabalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import '../css/cartitem.css'
export default function CartItem({a}) {
    const [quantity,setQuantity]=useState(a.quantity);
    const {cart,setCart,addtocart,deletefromcart}=useContext(GloabalContext); 
    const navigate=useNavigate();       
    return(<>
    <div style={{backgroundColor:"black",width: "80%",height: 2,}}></div>
    <div className='citempc' style={{display:"flex",flexDirection:"row",width: "80%",height:"auto"}}>
            
            <div style={{width: "70%",justifyContent:"flex-start"}}>
            <Button onClick={()=>{deletefromcart(a.product,quantity-1)}} style={{position: "absolute",left:"4vw"}}><DeleteIcon style={{color:"red"}}/></Button>
                <h1 className='protest-guerrilla-regular ' style={{color:"black",fontSize:40,textAlign:"left",marginLeft: 10,}}>{a.product.name}</h1>
                <p className='poppins-medium ' style={{color:"black",fontSize:20,textAlign:"left",marginLeft: 10,}}>{"Rs. "+Number(a.product.discountPrice)+" * "+quantity+" = Rs."+a.product.discountPrice*quantity}</p>
                <p className='poppins-medium ' style={{color:"grey",fontSize:20,textAlign:"left",marginLeft: 10,}}>{"Size | "}{a.product.store=="Poster"?"A4":"3 in*3 in"}</p>
                <p className='poppins-medium ' style={{color:"grey",fontSize:20,textAlign:"left",marginLeft: 10,}}>{a.product.store+" | "+a.product.collection}</p>
                
                <div style={{width: 200,alignSelf:"flex-start"}}>
                <Button onClick={()=>{quantity>1?setQuantity(quantity-1):"";quantity>1?addtocart(a.product,quantity-1):"";quantity==1?"":""}} style={{}}><RemoveIcon style={{color:"black"}}/></Button>
                  <input style={{color:"black",backgroundColor:"#FFF8E8",textAlign:"center",width: 50,}} onChange={(x)=>{setQuantity(x.target.value);x.target.value?addtocart(a.product,x.target.value):""}} value={quantity}/>
                  <Button onClick={()=>{setQuantity((Number)((Number)(quantity)+1));addtocart(a.product,quantity+1)}}><AddIcon style={{color:"black"}}/></Button>
                  
                </div>
                
               
              
                </div>
                <div style={{}}>
                
                <img style={{height: 180,width:160,backgroundColor:"#FFF8E8",objectFit:"contain",margin: 30,borderRadius: 0,cursor:"pointer",borderWidth: 2,borderColor: "black",padding:10}} onClick={()=>navigate(`/productpage/${a.product.id}`)} src={a.product.image} />
                </div>
        </div>
        <div className='citemmob' style={{display:"flex",flexDirection:"row",width:"100%",overflow:"hidden",alignItems:"center",justifyContent:"center"}}>
        <div style={{width: "100%",justifyContent:"flex-start",padding:20}}>
                <h1 className='protest-guerrilla-regular ' style={{color:"black",fontSize:20,textAlign:"left",marginLeft: 10,}}>{a.product.name}<Button onClick={()=>{deletefromcart(a.product,quantity-1)}} style={{marginLeft: 0,}}><DeleteIcon style={{color:"red"}}/></Button></h1>
                <p className='poppins-medium ' style={{color:"black",fontSize:20,textAlign:"left",marginLeft: 10,}}>{"Rs. "+Number(a.product.discountPrice)+" * "+quantity+" = Rs."+a.product.discountPrice*quantity}</p>
                <p className='poppins-medium ' style={{color:"grey",fontSize:20,textAlign:"left",marginLeft: 10,}}>{"Size | "}{a.product.store=="Poster"?"A4":"3 in*3 in"}</p>
                <p className='poppins-medium ' style={{color:"grey",fontSize:20,textAlign:"left",marginLeft: 10,}}>{a.product.store+" | "+a.product.collection}</p>
                
                <div style={{width: 200,alignSelf:"flex-start"}}>
                <Button onClick={()=>{quantity>1?setQuantity(quantity-1):"";quantity>1?addtocart(a.product,quantity-1):"";quantity==1?"":""}} style={{}}><RemoveIcon style={{color:"black"}}/></Button>
                  <input style={{color:"black",backgroundColor:"#FFF8E8",textAlign:"center",width: 50,}} onChange={(x)=>{setQuantity(x.target.value);x.target.value?addtocart(a.product,x.target.value):""}} value={quantity}/>
                  <Button onClick={()=>{setQuantity((Number)((Number)(quantity)+1));addtocart(a.product,quantity+1)}}><AddIcon style={{color:"black"}}/></Button>
                </div>
                
               
              
                </div>
                <div style={{marginRight:20}}>
                
                <img style={{height: 140,width:120,backgroundColor:"#FFF8E8",objectFit:"contain",borderRadius: 0,cursor:"pointer",borderWidth: 2,borderColor: "black",padding:10}} onClick={()=>navigate(`/productpage/${a.product.id}`)} src={a.product.image} />
                </div>
                
                
                
        </div>
    </>
        
  )
}
