import { Grid2, IconButton } from '@mui/material'
import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import "../css/productspage.css"
import { useNavigate } from 'react-router-dom';
export default function ProductList({data}) {
    const navigate=useNavigate();
  return (
    <div>
      <Grid2 container spacing={4} style={{backgroundColor: "black",minHeight: "100vh",width: "100vw",padding: 50,}}>
      {data.map((item)=>{
        return(
          <Grid2 className="block" size={3} style={{backgroundColor: "#FFF8E8",height:400,display:"flex",justifyContent: 'center',alignItems: 'center',borderRadius: 25,flexDirection: 'column',cursor:"pointer"}} onClick={()=>navigate(`/productpage/${item.id}`)}>
            <img src={item.img} style={{height:300}} className='prodimg'/>
            <div style={{backgroundColor: "black",width: "100%",height: 5,marginBottom: 2,}}/>
            <div style={{width: "100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{textAlign:"left",marginLeft: 20,}}>
              <h1 className='protest-guerrilla-regular prodname'>{item.name}</h1>
            <h1 className='poppins-medium'>{item.store+" "+item.collection}</h1>
            <h1 className='poppins-medium' style={{fontSize:20}}><span style={{textDecoration:"line-through",marginRight: 10,color:"red"}}>{"$"+item.price}</span>{"$"+item.discountPrice}</h1>
              </div>
              <IconButton aria-label="delete" style={{marginRight: 20,backgroundColor: "black",width: 50,height:50,borderRadius: 10,}}>
              <AddIcon style={{color:"#FFF8E8"}}/>
              </IconButton>
            </div>
            
          </Grid2>
        )
      })}
      

    </Grid2>
    </div>
  )
}
