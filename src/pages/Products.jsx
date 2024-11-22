import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import { Breadcrumbs, Chip, Grid2, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import "../css/productspage.css"
import { GloabalContext } from '../context/GlobalContext';
import ProductList from '../components/ProductList';
export default function Products() {
 
  const {data}=useContext(GloabalContext);
  const [Data,setData]=useState([]);
  const location=useLocation();
  const [store,setStore]=useState(location.state.store);
  const [collection,setCollection]=useState(location.state.collection);

  useEffect(()=>{
    
      
      let a=data.filter((i)=>(((i.collection==collection||collection=="")&&(i.store==store||store==""))?true:false));
      setData(a);
      
    
   
    
  },[data])

  return (
    <div style={{backgroundColor: "black",width: "100vw",}}>
     <p className='poppins-medium' style={{color:"#FFF8E8",textAlign:"left",padding:20,paddingLeft:window.screen.width>1300?50:0}}>{store+" → "+collection}</p>
     <p style={{textAlign:"left",color:"#FFF8E8",paddingLeft:window.screen.width>1300?50:20}} className='protest-guerrilla-regular productshead'>{collection!=""?collection:"All"}<span style={{fontSize:30}}>{"        "+store}</span></p>
     <div className='filterchips' style={{width: "100vw",display:"flex",paddingLeft:0,alignItems:"center",justifyContent:"center"}}>
      
<Chip className='poppins-medium' color="success" label="FILTERS" style={{backgroundColor: "#FFF8E8",color:"black"}}/>
<div className='proddiv' style={{height:30,width: 3,backgroundColor: "#FFF8E8",marginLeft:20,marginRight: 20,}}></div>

{collection!=""&&<Chip variant="outlined" onDelete={()=>{}} label={collection} style={{marginRight: 20,color:"#FFF8E8"}} deleteIcon={<ClearIcon style={{color:"#FFF8E8"}} onClick={()=>setCollection("")}/>}/>}
{store!=""&&<Chip variant="outlined" onDelete={()=>{}} label={store} style={{marginRight: 20,color:"#FFF8E8"}} deleteIcon={<ClearIcon style={{color:"#FFF8E8"}}/>}/>}





     </div>
    <ProductList data={Data}/>
    </div>
  )
}
