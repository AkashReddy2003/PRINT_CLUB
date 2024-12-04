import React from 'react'
import "../css/storepage.css"




import pos from "../assets/img/sto_pos.webp"
import pos1 from "../assets/img/sto_pos1.webp"
import pos3 from "../assets/img/sto_pos3.webp"
import pos2 from "../assets/img/pos_spo.webp"
import s1 from "../assets/img/sti_sto.webp"




import AnimText from './AnimText'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/joy/Button'
import posbg from '../assets/img/pos.webp';
import sti from '../assets/img/sti.webp';
export default function StoresPage() {
  const navigate=useNavigate();
  
  return (
    <>
    {window.screen.width>769?<div className="diagonal-container">
      {/* Posters Section */}
      <div className="diagonal-section posters">
      
        <img src={pos} style={{height:"80vh",width: "25vw",position:"absolute",right:0}}/>
        <img src={pos1} style={{height:"80vh",width: "25vw",position:"absolute",right:"25vw"}}/>
        <img src={pos3} style={{height:"80vh",width: "25vw",position:"absolute",left:0}}/>
        <img src={pos2} style={{height:"80vh",width: "25vw",position:"absolute",left:"25vw"}}/>
        <div className='hov' style={{zIndex: 1,backgroundColor: "rgba(0,0,0,0.5)",width: "100vw",height: "80vh",justifyContent:"center",alignItems:"center",display:"flex"}}>
        <p style={{fontSize: 100,color:"#FFF8E8"}} className='protest-guerrilla-regular'>POSTER STORE</p>
        </div>
       

        
      </div>

      {/* Stickers Section */}
      <div className="diagonal-section stickers" onClick={()=>navigate(`/product/Store/collection`,{state:{store:"",collection:""}})}>
     <img src={s1} style={{position: "absolute",width: "100vw",bottom:0}}/>
     <div className='hov' style={{zIndex: 1,backgroundColor: "rgba(0,0,0,0.5)",width: "100vw",height: "80vh",justifyContent:"center",alignItems:"center",display:"flex"}}>
        <p style={{fontSize: 100,color:"#FFF8E8"}} className='protest-guerrilla-regular'>STICKER STORE</p>
        </div>
      </div>

      {/* Slanted Div with Border */}
      <div className="slanted-bordered-div">
      <AnimText>PRINT CLUB #</AnimText>
      </div>
    </div>:
    <div style={{minHeight: "100vh",width: "100vw",backgroundColor:"black",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
      <div style={{height: "100vh",width: "100vw",backgroundColor:"black",display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <div style={{transform:'rotate(90deg)',width: '20vw',height:100,display:"flex"}}><AnimText  >PRINT CLUB #</AnimText></div>
      <div style={{transform:'rotate(90deg)',width:'20vw',height:100,display:"flex",marginTop:320}}><AnimText  >PRINT CLUB #</AnimText></div>
      
    </div>
    <div>
      <Button variant='outline' style={{width: "70vw",marginBottom: 50,}} onClick={()=>navigate(`/product/Store/collection`,{state:{store:"poster",collection:""}})}><img src={posbg} style={{objectFit:"cover"}}/><p style={{position: "absolute",backgroundColor:'rgba(0, 0, 0, 0.5)',width: "100%",height:"100%",alignSelf:"center",color:"#FFF8E8",paddingTop:"40%" ,fontSize:20}} className='protest-guerrilla-regular'>Poster Store</p></Button>
      <Button variant='outline' style={{width: "70vw",marginTop: 50,}} onClick={()=>navigate(`/product/Store/collection`,{state:{store:"",collection:""}})}><img src={sti} style={{objectFit:"cover"}}/><p style={{position: "absolute",backgroundColor:'rgba(0, 0, 0, 0.5)',width: "100%",height:"100%",alignSelf:"center",color:"#FFF8E8",paddingTop:"40%" ,fontSize:20}} className='protest-guerrilla-regular'>Sticker Store</p></Button>
    </div>
    </div>
    }
    
    </>
    
  )
}
