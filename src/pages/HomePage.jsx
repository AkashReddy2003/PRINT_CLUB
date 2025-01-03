import React, { useContext, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';





import log from "../assets/img/logo.webp"
import rag from "../assets/img/ragnar.webp"
import ts from "../assets/img/ts.webp"
import js from "../assets/img/js.webp"
import rs from "../assets/img/vk.webp"
import bb from "../assets/img/bb.webp"
import pos from "../assets/img/poster.webp"
import im1 from "../assets/img/stickers/im_01.webp"
import th1 from "../assets/img/stickers/th_01.webp"
import th2 from "../assets/img/stickers/th_02.webp"
import jw1 from "../assets/img/stickers/jw_01.webp"
import jw2 from "../assets/img/stickers/jw_02.webp"
import bb1 from "../assets/img/stickers/bb_01.webp"
import bb2 from "../assets/img/stickers/bb_02.webp"
import mot1 from "../assets/img/stickers/mot_01.webp"
import mot2 from "../assets/img/stickers/mot_02.webp"
import mot3 from "../assets/img/stickers/mot_03.webp"
import mot4 from "../assets/img/stickers/mot_04.webp"
import jk1 from "../assets/img/stickers/jk_01.webp"
import jk2 from "../assets/img/stickers/jk_02.webp"






import ser from "../assets/img/col_series.webp"
import gen from "../assets/img/col_general.webp"
import mot from "../assets/img/col_mot.webp"
import spo from "../assets/img/col_sports.webp"
import bg_jk from "../assets/img/bg_jk.webp"


import AnimText from './AnimText'
import { Box } from '@mui/material';
import BorderAnim from './BorderAnim';
import { useNavigate } from 'react-router-dom';
import { GloabalContext } from '../context/GlobalContext';




export default function HomePage() {
  const {data}=useContext(GloabalContext);
  const [d,setD]=useState([]);
  const navigate=useNavigate();
  useEffect(()=>{
    let a=data.filter((i)=>i.store=="Poster"?true:false);
    
    setD([a[0],a[10],a[90],a[100],a[110],a[112]]);
  },[data])
  return (
    <div id='main'>
      
      <section className='head' style={{display:"flex", justifyContent:"center",width: "100vw",backgroundColor:"#FFF8E8"}}>
        <p className='protest-guerrilla-regular headtitle'  >PRINT CLUB</p>
        <div className='headimg' style={{position:"absolute",flexDirection:"row",top:'30vh',justifyContent:"center"}}>
        
        <img src={ts} style={{height: 550,}}/>
        <img src={bb} style={{height: 550,}}/>
        <img src={rs} style={{height: 600,}}/>
        <img src={js} style={{height: 550,}}/>
        <img src={rag} style={{height: 530,}}/>
        </div>
        <img className='mobheadimg' src={bb} />
        
        <p   className='protest-guerrilla-regular headsubtitle'>SINCE 2024</p>
      </section>
      <section>
      <AnimText>PRINT CLUB #</AnimText>
      </section>
      <section className='stores' style={{display:"flex", justifyContent:"center",width: "100vw",backgroundColor:"#FFF8E8",minHeight:"110vh"}}>
        <div className='poster' >
        <p  className='protest-guerrilla-regular sectiontitle'>Stores</p>
          <img className='block sectionimg' src={pos} />
          <p style={{position: "absolute",left:112,paddingTop:20,width: 800,textAlign:"left",color:"black"}} className='protest-guerrilla-regular block sectionsubtitlelap'>Elevate <br/>Your Spac<span style={{color:"#FFF8E8"}}>e with </span><br/> Stunning <span style={{color:"#FFF8E8"}}>Posters</span></p>
          <p style={{position: "absolute",left:0,paddingTop:20,width: 800,textAlign:"left",color:"black",lineHeight:1.2}} className='protest-guerrilla-regular block sectionsubtitlemob'>Elevate <br/>Your Space with <br/> Stunning Posters</p>
          <div className='block sectiondesclap' style={{position:"absolute",right: 100,paddingTop:150}}>
          <p style={{fontSize: 40,left:120,width: 500,textAlign:"left",color:"black"}} className='protest-guerrilla-regular'>Poster Store</p> 
          <p className='poppins-medium' style={{width: 500,textAlign:"left",marginBottom:50}}>Transform any room with our exclusive collection of posters. From modern art to inspirational quotes, our designs help you express your style and make your walls come alive. Printed on premium-quality paper for a lasting impression.</p>
          <div  style={{width:500,height:2,backgroundColor:"black",marginBottom:50}}></div>
          <button className='poppins-medium' onClick={()=>navigate(`/product/Store/collection`,{state:{store:"Poster",collection:""}})} style={{backgroundColor:"black",padding:20,fontSize:14,paddingLeft:40,paddingRight:40,color:"#FFF8E8",display:"flex",flexDirection:"row",

          }}>Shop now 
          <svg style={{alignSelf:"center",marginLeft:10}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
          </div>
          <div className='block sectiondescmob' style={{position:"absolute",left:20,width: "90vw",paddingTop:180}}>
          <p style={{fontSize: 40,left:120,textAlign:"left",color:"black"}} className='protest-guerrilla-regular'>Poster Store</p> 
          <p className='poppins-medium' style={{textAlign:"left",marginBottom:50}}>Transform any room with our exclusive collection of posters. From modern art to inspirational quotes, our designs help you express your style and make your walls come alive. Printed on premium-quality paper for a lasting impression.</p>
          <div  style={{height:2,backgroundColor:"black",marginBottom:50}}></div>
          <button className='poppins-medium' style={{backgroundColor:"black",padding:20,fontSize:14,paddingLeft:40,paddingRight:40,color:"#FFF8E8",display:"flex",flexDirection:"row",

          }} onClick={()=>navigate(`/product/Store/collection`,{state:{store:"Poster",collection:""}})}>Shop now 
          <svg style={{alignSelf:"center",marginLeft:10}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
          </div>
          
          

        </div>
      </section>






      <AnimText>PRINT CLUB #</AnimText>
      <section style={{justifyContent:"center",alignItems:"center",width:"100vw",backgroundColor:"#FFF8E8",paddingBottom: 100,}}>
      <p style={{}} className='protest-guerrilla-regular sectiontitle '>Our Products</p>

        <Grid container spacing={5} style={{alignSelf: 'center',justifyContent:"center",alignItems:"center"}}>
          {d.map((a)=>
          <Grid className={window.screen.width>769?"block prod":"prod"}>
          <div style={{height:350,width: "100%",backgroundColor:"#FFF8E8",justifyContent:"center",alignItems:"center",display:"flex",borderColor: "black",borderWidth: 2,flexDirection:"column"}}>
          <img src={a.image} className='prodimage' style={{height:250}}/>
          <br/>
          <div  style={{width:"100%",height:2,backgroundColor:"black",}}></div>
          <div style={{justifyContent:"space-between",alignItems:"center",display:"flex",flexDirection:"row",width: "100%",height:"50%"}}>
              <p className='poppins-medium' style={{color:"black",marginLeft: 20,fontSize:15}}>{a.name}</p>
              <button onClick={()=>{navigate(`/productpage/${a.id}`)}} className='poppins-medium' style={{marginRight: 20,backgroundColor:"black",padding:10,fontSize:12,paddingLeft:10,paddingRight:10,color:"#FFF8E8",display:"flex",flexDirection:"row"

        }}>
        <svg style={{alignSelf:"center",marginLeft:10}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
          </div>
          </div>
        </Grid>)}
          

        </Grid>

      </section>
      
      <section className='collections' style={{justifyContent:"center",alignItems:"center",width:"100vw",backgroundColor:"black",padding:100, paddingTop:0,height:"200vh"}}>
      <p style={{color:"#FFF8E8"}} className='protest-guerrilla-regular sectiontitle'>Collections</p>
      <div style={{width: "90%",height: "150vh",position: "absolute",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <img src={jk1} style={{position: "absolute",height:"200vh",marginRight: 0}}/>
      </div>
      
        <Grid container style={{height: "40vh",}}>
        <Grid size={6} style={{height: "100%",}}>
          <div style={{width: "100%", height:"100%",justifyContent:"center",display:"flex",flexDirection:"row"}} className='block'>
          <img src={ser} style={{width: 300,height: "100%",objectFit:"cover"}}/>
          <div style={{width: "100%",height: "100%",paddingLeft:40}}>
          <p style={{fontSize: 40,width:300,textAlign:"left",color:"#FFF8E8",alignSelf:"center"}} className='protest-guerrilla-regular'>Movies & Series</p>
          <div  style={{width:"100%",height:2,backgroundColor:"#FFF8E8",marginBottom:50,alignSelf:"center"}}></div>
          <p className='poppins-medium' style={{width: "100%",textAlign:"left",marginBottom:50,color:"#FFF8E8"}}>Celebrate your favorite movies and TV shows with iconic posters and stickers featuring characters, quotes, and moments you love.</p>
          </div>
          </div>
          </Grid>
        <Grid size={6}  >
          
        </Grid>
        <Grid size={6} style={{height: "100%",}}>

        </Grid>
        <Grid size={6} style={{height: "100%",}}>
        <div style={{width: "100%", height:"100%",justifyContent:"center",display:"flex",flexDirection:"row"}} className='block'>
        <div style={{width: "100%",height: "100%",paddingRight:40}}>
          <p style={{fontSize: 40,width:300,textAlign:"left",color:"#FFF8E8",alignSelf:"center"}} className='protest-guerrilla-regular'>Sports</p>
          <div  style={{width:"100%",height:2,backgroundColor:"#FFF8E8",marginBottom:50,alignSelf:"center"}}></div>
          <p className='poppins-medium' style={{width: "100%",textAlign:"left",marginBottom:50,color:"#FFF8E8"}}>Show your love for sports with bold designs that capture the excitement and energy of your favorite teams and athletes.</p>
          </div>
          <img src={spo} style={{width: 300 ,height: "100%",objectFit:"cover"}}/>
          
          </div>
        </Grid>
        <Grid size={6} style={{height: "100%",}}>
          <div style={{width: "100%", height:"100%",justifyContent:"center",display:"flex",flexDirection:"row"}} className='block'>
          <img src={mot} style={{width: 300,height: "100%",objectFit:"cover"}}/>
          <div style={{width: "100%",height: "100%",paddingLeft:40}}>
          <p style={{fontSize: 40,width:300,textAlign:"left",color:"#FFF8E8",alignSelf:"center"}} className='protest-guerrilla-regular'>Motivation</p>
          <div  style={{width:"100%",height:2,backgroundColor:"#FFF8E8",marginBottom:50,alignSelf:"center"}}></div>
          <p className='poppins-medium' style={{width: "100%",textAlign:"left",marginBottom:50,color:"#FFF8E8"}}>Fuel your day with motivational posters and stickers that inspire positivity, focus, and drive toward your goals.</p>
          </div>
          </div>
          </Grid>
        <Grid size={6} style={{height: "100%",}} >

        </Grid>
        <Grid size={6} style={{height: "100%",}}>

        </Grid>
        <Grid size={6} style={{height: "100%",}}>
        <div style={{width: "100%", height:"100%",justifyContent:"center",display:"flex",flexDirection:"row"}} className='block'>
        <div style={{width: "100%",height: "100%",paddingRight:40}}>
          <p style={{fontSize: 40,width:300,textAlign:"left",color:"#FFF8E8",alignSelf:"center"}} className='protest-guerrilla-regular'>General</p>
          <div  style={{width:"100%",height:2,backgroundColor:"#FFF8E8",marginBottom:50,alignSelf:"center"}}></div>
          <p className='poppins-medium' style={{width: "100%",textAlign:"left",marginBottom:50,color:"#FFF8E8"}}>Discover a mix of fun, creative, and versatile designs that fit any style or occasion, perfect for personalizing your space</p>
          </div>
          <img src={gen} style={{width: 300 ,height: "100%",objectFit:"cover"}}/>
          
          </div>
        </Grid>
        
       

        </Grid>
      </section>
    
      
      
      
      
    </div>
  )
}
