import React, { useContext, useEffect, useState } from 'react'
import { GloabalContext } from '../context/GlobalContext'
import { useLocation, useParams } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import Offerimg from"../assets/img/offerimg.webp";
import StickerFooter from '../components/StickerFooter';
import ProductList from '../components/ProductList';
import "../css/Productpage.css"
export default function ProductPage() {
 
    const {data,cart,setCart,addtocart}=useContext(GloabalContext);
    const {productid}=useParams();
   const [dat,setDat]=useState([]);
    const [d,setD]=useState({});
    const [quantity,setQuantity]=useState(1);
    useEffect(()=>{
      console.log(productid);
      let d=data.filter((a)=>a.id==productid?true:false)[0];
      setD(d)
      window.scrollTo({ top: 0, behavior: 'smooth' });
      let Data=data.filter((i)=>((i.collection==d.collection&&i.store==d.store)?true:false));
      setDat(Data);
    },[productid])
    
  return (
    <div>
      <div className='item' style={{width: "100vw",display:"flex",backgroundColor:"black",position: "relative",gap:70}}>
        <div className='item1' style={{width: "100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor: "#FFF8E8",top:0}}>
        <img className='itemimg' src={d.image} />
        </div>
        
        <div className='item2' style={{color:"#FFF8E8",textAlign:"left",}}>
            <div style={{margin:50,marginTop:0}}>
            <h1 className='protest-guerrilla-regular prodname' style={{fontSize:60}}>{d.name}</h1>
            <h1 className='poppins-medium' style={{fontSize: 20,}}>{d.store+" "+d.collection}</h1>
            <h1 className='poppins-medium' style={{fontSize: 30,}}><span style={{textDecoration:"line-through",color:"red",marginRight:10}}>{"Rs. "+d.price+".00"}</span>{" Rs. "+d.discountPrice+".00"}</h1>
        </div>
        <div>
            <div style={{display:"flex",flexDirection:"row", color:"#FFF8E8",marginLeft: 50,width: 200,borderWidth:1,borderColor: "#FFF8E8",overflow:"hidden",justifyContent:"space-between",padding:10}}>
                <Button onClick={()=>quantity>1?setQuantity(quantity-1):""}><RemoveIcon/></Button>
                <input style={{backgroundColor: "black",color:"#FFF8E8",textAlign:"center",width: 50,}} onChange={(x)=>{setQuantity(x.target.value)}} value={quantity}/>
                <Button onClick={()=>setQuantity((Number)((Number)(quantity)+1))}><AddIcon/></Button>
            </div>
            <img src={Offerimg} style={{marginLeft: 50,height: 200,marginTop: 20,}}/>
            <Button  style={{margin:50,backgroundColor: "#FFF8E8",paddingLeft:20,paddingRight:20,width: "80%",}} onClick={()=>{console.log(d,quantity);addtocart(d,quantity)}}><span className='poppins-medium' style={{fontSize: 20,color:"black"}} >Add to cart</span></Button>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"#FFF8E8"}}/>}
          aria-controls="panel2-content"
          id="panel2-header"
          style={{backgroundColor: "black",color:"#FFF8E8",paddingLeft: window.screen.width>1300?50:20,}}
        >
          <Typography  style={{fontSize: 20,}}><h1 className='protest-guerrilla-regular'>Product description</h1></Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: "black",color:"#FFF8E8",paddingLeft: 50,}}>
          <Typography>
          <h1 className='poppins-medium'>Premium Vinyl Stickers</h1><br/>

<p className='poppins-medium'>Unleash creativity with our high-quality vinyl stickers! Each design is printed on durable, glossy vinyl paper, making them perfect for customizing your laptops, water bottles, cars, notebooks, and more. 
<br/>
<br/>
Here's why you'll love them:
<br/>
<br/>
<span style={{fontWeight: 'bold',}}>Waterproof & Weatherproof:</span> These stickers are made to last, no matter where you stick them. They're UV-resistant and withstand rain, sunlight, and outdoor conditions without fading.
<br/>
<br/>
<span style={{fontWeight: 'bold',}}>Easy to Apply & Remove:</span> Peel and stick with ease! Our stickers are designed for a smooth application on most surfaces and can be removed without leaving residue.
<br/>
<br/>
<span style={{fontWeight: 'bold',}}>Vibrant Colors:</span> Our stickers are printed with top-notch clarity and vivid colors, ensuring your designs pop and look stunning wherever you place them.
<br/>
<br/>
<span style={{fontWeight: 'bold',}}>Customizable:</span> Personalize any surface with our wide selection of sticker designs, from bold graphics to subtle aesthetics, and everything in between.
<br/>
<br/>
Transform your everyday items into unique expressions of style with these durable, eye-catching vinyl stickers!</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"#FFF8E8"}}/>}
          aria-controls="panel2-content"
          id="panel2-header"
          style={{backgroundColor: "black",color:"#FFF8E8",paddingLeft: window.screen.width>1300?50:20,paddingBottom:window.screen.width>1300?50:0}}
        >
          <Typography  style={{fontSize: 20,}}><h1 className='protest-guerrilla-regular'>Service policy</h1></Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: "black",color:"#FFF8E8",paddingLeft: 50,}}>
          <Typography >
          <p  className='poppins-medium'>We are committed to providing you with the best shopping experience for high-quality stickers and posters. Please review our service policy below to understand the terms and conditions under which we operate:
          <br/>
          <br/>
          <span style={{fontWeight: 'bold',}}>Order Processing: </span>
          <br/>
          <ul>
            <li>‣ Processing Time: Orders are processed within 1-3 business days after receiving your payment. We strive to get your order shipped as soon as possible.</li>
<li>‣ Order Confirmation: Once your order is placed, you will receive a confirmation email with the details of your purchase.</li>
<li>‣ Order Modifications: If you need to modify your order, please contact us within 24 hours of placing your order. After this time, changes may not be possible.</li>
          </ul>
          
          <br/>
          <span style={{fontWeight: 'bold',}}>Shipping Policy: </span>
          <br/>
          <ul>
            <li>‣ Domestic Shipping: We offer standard and expedited shipping options within India. Delivery times may vary depending on your location.</li>
<li>‣ Shipping Fees: Shipping fees are calculated at checkout and may vary depending on your location and the shipping method selected.</li>
          </ul>

          <br/>
          <span style={{fontWeight: 'bold',}}>Customer Support: </span>
          <br/>
          <ul>
            <li>‣ If you have any questions or need assistance, please reach out to our customer support team at [Email] or [Phone Number].</li>
<li>‣ Our support hours are [Insert Business Hours] (Time Zone).</li>
          </ul>
          </p>


          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
      
        </div>
      </div>
      <StickerFooter/>
      <div style={{width: "100vw",backgroundColor: "black",textAlign:"left",}}>
      <h1 className='protest-guerrilla-regular' style={{ color: "#FFF8E8", fontSize: 30,paddingLeft:100,paddingTop:50 }}>Similar Products</h1>
      <ProductList data={dat}/>
      </div>
      

    </div>
  )
}
