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
import { Button, Grid2 } from '@mui/material';
import Offerimg from"../assets/img/offerimg.webp";
import StickerFooter from '../components/StickerFooter';
import ProductList from '../components/ProductList';
import "../css/Productpage.css"
import PosterFooter from '../components/PosterFooter';
import log from "../assets/img/logo.webp"
import blackframe from "../assets/img/stickers/blackframe.png"
import whiteframe from "../assets/img/stickers/whiteframe.png"
export default function ProductPage() {
 
    const {data,cart,setCart,addtocart}=useContext(GloabalContext);
    const {productid}=useParams();
   const [dat,setDat]=useState([]);
   const [imgload,setImgload]=useState(true);
    const [d,setD]=useState({});
    const [quantity,setQuantity]=useState(1);
    const [type,setType]=useState("normal");
    useEffect(()=>{
      console.log(productid);
      let d=data.filter((a)=>a.id==productid?true:false)[0];
      setD(d)
      window.scrollTo({ top: 0, behavior: 'smooth' });
      let Data=data.filter((i)=>((i.collection==d.collection&&i.store==d.store&&i.tags.some(x=>d.tags.includes(x)))?true:false));
      setDat(Data);
    },[productid])

    const getDiscountPrice=()=>{
      if(type=="normal"){
        return 79;
      }else if(type=="sticker"){
        return 99;
      }else{
        return 189;
      }
    }
    const getPrice=()=>{
      if(type=="normal"){
        return 199;
      }else if(type=="sticker"){
        return 249;
      }else{
        return 399;
      }
    }
    const getImg=()=>{
      if(type=="normal"){
        return <img className='itemimg' src={d.image} onLoad={(e)=>setImgload(false)}/>;
      }else if(type=="sticker"){
        return <img className='itemimg' src={d.image} onLoad={(e)=>setImgload(false)}/>;
      }else if(type=="black"){
        return(
          <>
<img className='itemimgframe' src={blackframe} style={{position: "absolute",}}onLoad={(e)=>setImgload(false)}/>
<img className='itemimg' src={d.image} onLoad={(e)=>setImgload(false)} style={{zIndex:1}}/>
          </>
        )
      }else{
        return(
          <>
<img className='itemimgframe' src={whiteframe} style={{position: "absolute",}}onLoad={(e)=>setImgload(false)}/>
<img className='itemimg' src={d.image} onLoad={(e)=>setImgload(false)} style={{zIndex:1}}/>
          </>
        )
      }
    }
    
  return (
    <div>
      <div className='item' style={{width: "100vw",display:"flex",backgroundColor:"black",position: "relative",gap:70}}>
        <div className='item1' style={{width: "100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor: "#FFF8E8",top:0}}>

        {getImg()}
        
        </div>
        
        <div className='item2' style={{color:"#FFF8E8",textAlign:"left",}}>
            <div style={{margin:50,marginTop:0}}>
            <h1 className='protest-guerrilla-regular prodname' style={{fontSize:60}}>{d.name}</h1>
            <h1 className='poppins-medium' style={{fontSize: 20,}}>{d.store+" "+d.collection}</h1>
            <h1 className='poppins-medium' style={{fontSize: 30,}}><span style={{textDecoration:"line-through",color:"red",marginRight:10}}>{"Rs. "+getPrice()+".00"}</span>{" Rs. "+getDiscountPrice()+".00"}</h1>
        </div>
        <div>
            <div style={{display:"flex",flexDirection:"row", color:"#FFF8E8",marginLeft: 50,width: 200,borderWidth:1,borderColor: "#FFF8E8",overflow:"hidden",justifyContent:"space-between",padding:10}}>
                <Button onClick={()=>quantity>1?setQuantity(quantity-1):""}><RemoveIcon/></Button>
                <input style={{backgroundColor: "black",color:"#FFF8E8",textAlign:"center",width: 50,}} onChange={(x)=>{setQuantity(x.target.value)}} value={quantity}/>
                <Button onClick={()=>setQuantity((Number)((Number)(quantity)+1))}><AddIcon/></Button>
            </div>
            <Grid2 container spacing={4}>
              <Grid2 size={{ md: 6, lg: 3, sm:6,xs:6 }}>
              <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection: 'column',cursor:"pointer"}} onClick={()=>setType("normal")}>
              <img src={d.image} style={{height: 150,marginTop: 20,padding:10,borderColor:"#FFF8E8",borderWidth:1,backgroundColor:type=="normal"?"#FFF8E8":"black",}}/>
              <p>Non Adhesive Paper</p>
              </div>
              </Grid2>
              <Grid2 size={{ md: 6, lg: 3, sm:6,xs:6 }}>
              <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection: 'column',cursor:"pointer"}} onClick={()=>setType("sticker")}>
              <img src={d.image} style={{height: 150,marginTop: 20,padding:10,borderColor:"#FFF8E8",borderWidth:1,backgroundColor:type=="sticker"?"#FFF8E8":"black"}}/>
              <p>Self Adhesive Paper</p>
              </div>
              </Grid2>
              <Grid2 size={{ md: 6, lg: 3, sm:6,xs:6 }}>
              <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection: 'column',cursor:"pointer",position: "relative",}} onClick={()=>setType("white")}>
              <img src={whiteframe} style={{height: 150,marginTop: 20,padding:0,position:"absolute",top:0,backgroundColor:type=="white"?"#FFF8E8":"black"}}/>

              <img src={d.image} style={{height: 150,marginTop: 20,padding:10,borderColor:"#FFF8E8",borderWidth:1,zIndex: 0,}}/>
              <p>With White Frame</p>
              </div>
              </Grid2>
              <Grid2 size={{ md: 6, lg: 3, sm:6,xs:6 }}>
              <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection: 'column',cursor:"pointer",position:"relative"}} onClick={()=>setType("black")}>
              <img src={blackframe} style={{height: 150,marginTop: 20,padding:0,position:"absolute",top:0,backgroundColor:type=="black"?"#FFF8E8":"black"}}/>

              <img src={d.image} style={{height: 150,marginTop: 20,padding:10,borderColor:"#FFF8E8",borderWidth:1,zIndex: 0,}}/>
              <p>With Black Frame</p>
              </div>
              </Grid2>
              

            </Grid2>
           
            
            <Button  style={{margin:50,backgroundColor: "#FFF8E8",paddingLeft:20,paddingRight:20,width: "80%",}} onClick={()=>{console.log(d,quantity);
            let x=d;
            x.discountPrice=getDiscountPrice();
            x.price=getPrice();
            x.type=type;
              addtocart(x,quantity)}}><span className='poppins-medium' style={{fontSize: 20,color:"black"}} >Add to cart</span></Button>
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
          <Typography  style={{fontSize: 20,}}><h1 className='protest-guerrilla-regular'>Service and Refund policy</h1></Typography>
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
          <span style={{fontWeight: 'bold',}}>Refund Policy: </span>
          <br/>
          <ul>
            <li>‣ We strive for 100% customer satisfaction. If you are not satisfied with your purchase, you can request a refund under the following conditions.</li>
<li>‣ Eligibility: Refunds are applicable for defective or damaged products only.</li>
<li>‣ Process: Email us your order details within 7 days of delivery.</li>
<li>‣ After approval, refunds will be initiated within 5-7 working days. The amount will be credited to your bank account or original payment method.</li>
<li>‣ Mail us to cancel order before dispatch. Once dispatched, cancellations are not allowed.</li>
          </ul>

          <br/>
          <span style={{fontWeight: 'bold',}}>Customer Support: </span>
          <br/>
          <ul>
            <li>‣ If you have any questions or need assistance, please reach out to our customer support team at printclubworld@gmail.com or 9398000816.</li>
<li>‣ Our support hours are 8AM to 10PM IST.</li>
          </ul>
          </p>


          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
      
        </div>
      </div>
      {d.store=="Sticker"?<StickerFooter/>:<PosterFooter/>}
      
      <div style={{width: "100vw",backgroundColor: "black",textAlign:"left",}}>
      <h1 className='protest-guerrilla-regular' style={{ color: "#FFF8E8", fontSize: 30,paddingLeft:100,paddingTop:50 }}>Similar Products</h1>
      <ProductList data={dat}/>
      </div>
      

    </div>
  )
}
