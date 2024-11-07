import {  IconButton } from '@mui/material'
import Grid from '@mui/material/Grid2';
import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import "../css/productspage.css"
import { useNavigate } from 'react-router-dom';
export default function ProductList({data}) {
    const navigate=useNavigate();
  return (
    <div>
      <Grid container spacing={4} style={{backgroundColor: "black",minHeight: "100vh",width: "100vw",padding: 50,}}>
      {data.map((item)=>{
        return(
          <Grid className="block prod" size={{ md: 6, lg: 3, sm:6,xs:6 }} style={{backgroundColor: "#FFF8E8",display:"flex",justifyContent: 'center',alignItems: 'center',borderRadius: 25,flexDirection: 'column',cursor:"pointer"}} onClick={()=>navigate(`/productpage/${item.id}`)}>
            <img src={item.img}  className='prodimg'/>
            <div style={{backgroundColor: "black",width: "100%",height: 5,marginBottom: 2,}}/>
            <div style={{width: "100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{textAlign:"left",marginLeft: 20,}}>
              <h1 className='protest-guerrilla-regular prodname'>{item.name}</h1>
            <h1 className='poppins-medium prodcollection'>{item.store}</h1>
            <h1 className='poppins-medium prodprice' ><span style={{textDecoration:"line-through",marginRight: 10,color:"red"}}>{"$"+item.price}</span>{"$"+item.discountPrice}</h1>
              </div>
              <IconButton aria-label="delete" className="prodadd" style={{marginRight: 20,backgroundColor: "black",borderRadius: 10,}}>
              <AddIcon style={{color:"#FFF8E8"}}/>
              </IconButton>
            </div>
            
          </Grid>
        )
      })}
      

    </Grid>
    </div>
  )
}
