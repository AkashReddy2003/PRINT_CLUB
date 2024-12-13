import {  Button, IconButton } from '@mui/material'
import Grid from '@mui/material/Grid2';
import React, { useContext, useEffect, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import "../css/productspage.css"
import { useNavigate } from 'react-router-dom';
import { GloabalContext } from '../context/GlobalContext';
export default function ProductList({data}) {
    const navigate=useNavigate();
    const {setProd,cart,setCart,addtocart}=useContext(GloabalContext);
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
    useEffect(()=>{
      window.scrollTo({ top: 0, behavior: 'smooth' });
      console.log(data)
      setCurrentPage(1);
    },[data])
    useEffect(()=>{
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    },[currentPage])
    const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);
  return (
    <div>
      <Grid container spacing={4} style={{backgroundColor: "black",minHeight: "100vh",width: "100vw",padding: 20,}}>
      {currentData.map((item)=>{
        return(
          <Grid className={window.screen.width>1300?"block prod":"prod"} size={{ md: 6, lg: 3, sm:6,xs:6 }} style={{backgroundColor: "#FFF8E8",display:"flex",justifyContent: 'center',alignItems: 'center',borderRadius: 25,flexDirection: 'column',cursor:"pointer"}} >
            <img src={item.image}  className='prodimg' style={{objectFit:"contain"}} onClick={()=>{navigate(`/productpage/${item.id}`)}}/>
            <div style={{backgroundColor: "black",width: "100%",height: 5,marginBottom: 2,}}/>
            <div style={{width: "100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{textAlign:"left",marginLeft: 20,}}>
              <h1 className='protest-guerrilla-regular prodname' onClick={()=>{navigate(`/productpage/${item.id}`)}}>{item.name}</h1>
            <h1 className='poppins-medium prodcollection'>{item.store}</h1>
            <h1 className='poppins-medium prodprice' ><span style={{textDecoration:"line-through",marginRight: 10,color:"red"}}>{"$"+item.price}</span>{"$"+item.discountPrice}</h1>
              </div>
              <IconButton aria-label="delete" className="prodadd" style={{marginRight: 20,backgroundColor: "black",borderRadius: 10,}} onClick={()=>{addtocart(item,1)}}>
              <AddIcon style={{color:"#FFF8E8"}}/>
              </IconButton>
            </div>
            
          </Grid>
        )
      })}
      

    </Grid>
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 ,paddingBottom: 20,}}>
        <button 
          disabled={currentPage === 1}
          onClick={() => {setCurrentPage((prev) => prev - 1);window.scrollTo({ top: 0, behavior: 'smooth' });}}
          style={{ marginRight: 10 ,color:"#FFF8E8",fontSize:25,padding:15,borderWidth:2,borderColor: "#FFF8E8",}}
          className='protest-guerrilla-regular'
        >
          Previous
        </button>
        <span style={{ color: "#FFF8E8" ,fontSize:25,padding:15,borderWidth:2,borderColor: "#FFF8E8"}} className='protest-guerrilla-regular'>
          Page {currentPage} of {totalPages}
        </span>
        <button 
          disabled={currentPage === totalPages}
          onClick={() => {setCurrentPage((prev) => prev + 1);window.scrollTo({ top: 0, behavior: 'smooth' });}}
          style={{ marginLeft: 10 ,color:"#FFF8E8",fontSize:25,padding:15,borderWidth:2,borderColor: "#FFF8E8"}}
          className='protest-guerrilla-regular'
        >
          Next
        </button>
      </div>

    </div>
  )
}
