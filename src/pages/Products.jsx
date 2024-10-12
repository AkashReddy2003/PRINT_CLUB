import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Breadcrumbs, Chip, Grid2, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import "../css/productspage.css"
import { GloabalContext } from '../context/GlobalContext';
import ProductList from '../components/ProductList';
export default function Products() {
  const {store,collection}=useParams();
  const {data}=useContext(GloabalContext);

  const navigate=useNavigate();

  return (
    <div style={{backgroundColor: "black",width: "100vw",}}>
     <p className='poppins-medium' style={{color:"#FFF8E8",textAlign:"left",padding:20,paddingLeft:50}}>{store+" → "+collection}</p>
     <p style={{fontSize: 150,textAlign:"left",color:"#FFF8E8",paddingLeft:50}} className='protest-guerrilla-regular'>{collection!=""?collection:"All"}<span style={{fontSize:30}}>{"        "+store}</span></p>
     <div style={{width: "100vw",display:"flex",flexDirection:"row",paddingLeft:50}}>
      
<Chip className='poppins-medium' color="success" label="FILTERS" style={{backgroundColor: "#FFF8E8",color:"black"}}/>
<div style={{height:30,width: 3,backgroundColor: "#FFF8E8",marginLeft:20,marginRight: 20,}}></div>

<Chip variant="outlined" onDelete={()=>{}} label={collection} style={{marginRight: 20,color:"#FFF8E8"}} deleteIcon={<ClearIcon style={{color:"#FFF8E8"}}/>}/>
<Chip variant="outlined" onDelete={()=>{}} label={collection} style={{marginRight: 20,color:"#FFF8E8"}} deleteIcon={<ClearIcon style={{color:"#FFF8E8"}}/>}/>
<Chip variant="outlined" onDelete={()=>{}} label={collection} style={{marginRight: 20,color:"#FFF8E8"}} deleteIcon={<ClearIcon style={{color:"#FFF8E8"}}/>}/>



     </div>
    <ProductList data={data}/>
    </div>
  )
}
