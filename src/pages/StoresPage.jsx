import React from 'react'
import "../css/storepage.css"




import pos from "../assets/img/sto_pos.webp"
import pos1 from "../assets/img/sto_pos1.webp"
import pos3 from "../assets/img/sto_pos3.webp"
import pos2 from "../assets/img/pos_spo.webp"
import s1 from "../assets/img/sti_sto.webp"




import AnimText from './AnimText'
export default function StoresPage() {
  return (
    <div className="diagonal-container">
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
      <div className="diagonal-section stickers">
     <img src={s1} style={{position: "absolute",width: "100vw",bottom:0}}/>
     <div className='hov' style={{zIndex: 1,backgroundColor: "rgba(0,0,0,0.5)",width: "100vw",height: "80vh",justifyContent:"center",alignItems:"center",display:"flex"}}>
        <p style={{fontSize: 100,color:"#FFF8E8"}} className='protest-guerrilla-regular'>STICKER STORE</p>
        </div>
      </div>

      {/* Slanted Div with Border */}
      <div className="slanted-bordered-div">
      <AnimText>PRINT CLUB #</AnimText>
      </div>
    </div>
  )
}
