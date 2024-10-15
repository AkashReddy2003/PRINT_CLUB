import React from 'react'
import Grid from '@mui/material/Grid2';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';





import bahu from "../assets/img/bahu.png"
import rag from "../assets/img/ragnar.png"
import ts from "../assets/img/ts.png"
import js from "../assets/img/js.png"
import rs from "../assets/img/vk.png"
import bb from "../assets/img/bb.png"
import pos from "../assets/img/poster.png"
import im1 from "../assets/img/stickers/im_01.png"
import th1 from "../assets/img/stickers/th_01.png"
import th2 from "../assets/img/stickers/th_02.png"
import jw1 from "../assets/img/stickers/jw_01.png"
import jw2 from "../assets/img/stickers/jw_02.png"
import bb1 from "../assets/img/stickers/bb_01.png"
import bb2 from "../assets/img/stickers/bb_02.png"
import mot1 from "../assets/img/stickers/mot_01.png"
import mot2 from "../assets/img/stickers/mot_02.png"
import mot3 from "../assets/img/stickers/mot_03.png"
import mot4 from "../assets/img/stickers/mot_04.png"
import jk1 from "../assets/img/stickers/jk_01.png"
import jk2 from "../assets/img/stickers/jk_02.png"






import ser from "../assets/img/col_series.jpg"
import gen from "../assets/img/col_general.jpg"
import mot from "../assets/img/col_mot.jpg"
import spo from "../assets/img/col_sports.jpg"
import bg_jk from "../assets/img/bg_jk.jpg"


import AnimText from './AnimText'
import { Box } from '@mui/material';
import BorderAnim from './BorderAnim';




export default function HomePage() {
  
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
        <p style={{fontSize: 100,}} className='protest-guerrilla-regular'>Stores</p>
          <img className='block' src={pos} style={{height:600,position:"absolute",left:400}}/>
          <p style={{fontSize: 70,position: "absolute",left:112,paddingTop:20,width: 800,textAlign:"left",color:"black"}} className='protest-guerrilla-regular block'>Elevate <br/>Your Spac<span style={{color:"#FFF8E8"}}>e with </span><br/> Stunning <span style={{color:"#FFF8E8"}}>Posters</span></p>
          <div className='block' style={{position:"absolute",right: 100,paddingTop:150}}>
          <p style={{fontSize: 40,left:120,width: 500,textAlign:"left",color:"black"}} className='protest-guerrilla-regular'>Poster Store</p> 
          <p className='poppins-medium' style={{width: 500,textAlign:"left",marginBottom:50}}>Transform any room with our exclusive collection of posters. From modern art to inspirational quotes, our designs help you express your style and make your walls come alive. Printed on premium-quality paper for a lasting impression.</p>
          <div  style={{width:500,height:2,backgroundColor:"black",marginBottom:50}}></div>
          <button className='poppins-medium' style={{backgroundColor:"black",padding:20,fontSize:14,paddingLeft:40,paddingRight:40,color:"#FFF8E8",display:"flex",flexDirection:"row",

          }}>Shop now 
          <svg style={{alignSelf:"center",marginLeft:10}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
          </div>
          
          

        </div>
      </section>
      <section className='stores' style={{display:"flex", justifyContent:"center",width: "100vw",backgroundColor:"black",minHeight:"110vh",paddingTop:100,position: "relative",}}>
        <div className='poster' >
        <div style={{position: "absolute",right:0,}}>
       
        <p style={{fontSize: 70,paddingTop:20,width: 700,textAlign:"left",color:"#FFF8E8"}} className='protest-guerrilla-regular block'>Add  <br/>Personality<span style={{color:"#FFF8E8"}}> </span><br/> with Custom Stickers <span style={{color:"#FFF8E8"}}></span></p>

        </div>
          
          <div className='block' style={{position:"absolute",left: 100,paddingTop:150}}>
          <p style={{fontSize: 40,left:120,width: 500,textAlign:"left",color:"#FFF8E8"}} className='protest-guerrilla-regular'>Sticker Store</p> 
          <p className='poppins-medium' style={{width: 500,textAlign:"left",marginBottom:50,color:"#FFF8E8"}}>Explore a wide range of fun, creative, and high-quality stickers that let you express yourself wherever you go. Perfect for laptops, notebooks, water bottles, and more. Customize your own or choose from our unique designs.</p>
          <div  style={{width:500,height:2,backgroundColor:"#FFF8E8",marginBottom:50}}></div>
          <button className='poppins-medium' style={{backgroundColor:"#FFF8E8",padding:20,fontSize:14,paddingLeft:40,paddingRight:40,color:"black",display:"flex",flexDirection:"row",

          }}>Shop now 
          <svg style={{alignSelf:"center",marginLeft:10}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
          </div>

          
          

        </div>
        <div >
        <img src={im1} className='sticker block' style={{height:400,position:"absolute",top:-80,left:20}}/>
        <img src={th1} className='sticker block' style={{height:400,position:"absolute",top:-30,left:300}}/>
        <img src={th2} className='sticker block' style={{height:400,position:"absolute",bottom:-30,left: 300,}}/>
        <img src={jw1} className='sticker block' style={{height:400,position:"absolute",left:600}}/>
        <img src={jw2} className='sticker block' style={{height:400,position:"absolute",bottom:0,right: 400,}}/>
        <img src={bb1} className='sticker block' style={{height:400,position:"absolute",bottom:20,right: 100,}}/>
        <img src={bb2} className='sticker block' style={{height:400,position:"absolute",top:0,right:100}}/>
        </div>
        
      </section>
      <section style={{justifyContent:"center",alignItems:"center",width:"100vw",backgroundColor:"#FFF8E8",paddingBottom: 100,}}>
      <p style={{fontSize: 100,}} className='protest-guerrilla-regular'>Our Products</p>
        <Grid container spacing={5} style={{alignSelf: 'center',paddingLeft: 100,paddingRight: 100,justifyContent:"center",alignItems:"center"}}>
          <Grid className="block" size={4}>
            <div style={{height:350,backgroundColor:"#FFF8E8",justifyContent:"center",alignItems:"center",display:"flex",borderColor: "black",borderWidth: 2,flexDirection:"column"}}>
            <img src={mot1} style={{height:250}}/>
            <br/>
            <div  style={{width:"100%",height:2,backgroundColor:"black",}}></div>
            <div style={{justifyContent:"space-between",alignItems:"center",display:"flex",flexDirection:"row",width: "100%",height:"50%"}}>
                <p className='poppins-medium' style={{color:"black",marginLeft: 20,fontSize:20}}>Future Sticker</p>
                <button className='poppins-medium' style={{marginRight: 20,backgroundColor:"black",padding:10,fontSize:12,paddingLeft:10,paddingRight:10,color:"#FFF8E8",display:"flex",flexDirection:"row"

          }}>Shop now 
          <svg style={{alignSelf:"center",marginLeft:10}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
            </div>
            </div>
          </Grid>
          <Grid className="block" size={4}>
          <div style={{height:350,backgroundColor:"black",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
          <img src={mot2} style={{height:250}}/>
          <br/>
          <div  style={{width:"100%",height:2,backgroundColor:"#FFF8E8",}}></div>
            <div style={{justifyContent:"space-between",alignItems:"center",display:"flex",flexDirection:"row",width: "100%",height:"50%"}}>
                <p className='poppins-medium' style={{color:"#FFF8E8",marginLeft: 20,fontSize:20}}>Future Sticker</p>
                <button className='poppins-medium' style={{marginRight: 20,backgroundColor:"#FFF8E8",padding:10,fontSize:12,paddingLeft:10,paddingRight:10,color:"black",display:"flex",flexDirection:"row"

          }}>Shop now 
          <svg style={{alignSelf:"center",marginLeft:10}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
            </div>
            </div>
          </Grid>
          <Grid className="block" size={4}>
          <div style={{height:350,backgroundColor:"#FFF8E8",justifyContent:"center",alignItems:"center",display:"flex",borderColor: "black",borderWidth: 2,flexDirection:"column"}}>
              <img src={bb1} style={{height:250}}/>
              <br/>
              <div  style={{width:"100%",height:2,backgroundColor:"black",}}></div>
            <div style={{justifyContent:"space-between",alignItems:"center",display:"flex",flexDirection:"row",width: "100%",height:"50%"}}>
                <p className='poppins-medium' style={{color:"black",marginLeft: 20,fontSize:20}}>Future Sticker</p>
                <button className='poppins-medium' style={{marginRight: 20,backgroundColor:"black",padding:10,fontSize:12,paddingLeft:10,paddingRight:10,color:"#FFF8E8",display:"flex",flexDirection:"row"

          }}>Shop now 
          <svg style={{alignSelf:"center",marginLeft:10}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
            </div>
            </div>
          </Grid>
          <Grid className="block" size={4}>
            <div style={{height:350,backgroundColor:"black",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
            <img src={mot3} style={{height:250}}/>
            <br/>
            <div  style={{width:"100%",height:2,backgroundColor:"#FFF8E8",}}></div>
            <div style={{justifyContent:"space-between",alignItems:"center",display:"flex",flexDirection:"row",width: "100%",height:"50%"}}>
                <p className='poppins-medium' style={{color:"#FFF8E8",marginLeft: 20,fontSize:20}}>Future Sticker</p>
                <button className='poppins-medium' style={{marginRight: 20,backgroundColor:"#FFF8E8",padding:10,fontSize:12,paddingLeft:10,paddingRight:10,color:"black",display:"flex",flexDirection:"row"

          }}>Shop now 
          <svg style={{alignSelf:"center",marginLeft:10}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
            </div>
            </div>
          </Grid>
          <Grid className="block" size={4}>
          <div style={{height:350,backgroundColor:"#FFF8E8",justifyContent:"center",alignItems:"center",display:"flex",borderColor: "black",borderWidth: 2,flexDirection:"column"}}>
          <img src={mot4} style={{height:250}}/>
          <br/>
          <div  style={{width:"100%",height:2,backgroundColor:"black",}}></div>
            <div style={{justifyContent:"space-between",alignItems:"center",display:"flex",flexDirection:"row",width: "100%",height:"50%"}}>
                <p className='poppins-medium' style={{color:"black",marginLeft: 20,fontSize:20}}>Future Sticker</p>
                <button className='poppins-medium' style={{marginRight: 20,backgroundColor:"black",padding:10,fontSize:12,paddingLeft:10,paddingRight:10,color:"#FFF8E8",display:"flex",flexDirection:"row"

          }}>Shop now 
          <svg style={{alignSelf:"center",marginLeft:10}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
            </div>
            </div>
          </Grid>
          <Grid className="block" size={4}>
          <div style={{height:350,backgroundColor:"black",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
          <img src={jw1} style={{height:250}}/>
          <br/>
          <div  style={{width:"100%",height:2,backgroundColor:"#FFF8E8",}}></div>
            <div style={{justifyContent:"space-between",alignItems:"center",display:"flex",flexDirection:"row",width: "100%",height:"50%"}}>
                <p className='poppins-medium' style={{color:"#FFF8E8",marginLeft: 20,fontSize:20}}>Future Sticker</p>
                <button className='poppins-medium' style={{marginRight: 20,backgroundColor:"#FFF8E8",padding:10,fontSize:12,paddingLeft:10,paddingRight:10,color:"black",display:"flex",flexDirection:"row"

          }}>Shop now 
          <svg style={{alignSelf:"center",marginLeft:10}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
            </div>
            </div>
          </Grid>

        </Grid>

      </section>
      
      <section style={{justifyContent:"center",alignItems:"center",width:"100vw",backgroundColor:"black",padding:100, paddingTop:0,height:"200vh"}}>
      <p style={{fontSize: 100,color:"#FFF8E8"}} className='protest-guerrilla-regular'>Collections</p>
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
