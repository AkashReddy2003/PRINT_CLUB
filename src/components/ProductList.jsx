import {  Button, IconButton } from '@mui/material'
import Grid from '@mui/material/Grid2';
import React, { useContext, useEffect, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import "../css/productspage.css"
import { useNavigate } from 'react-router-dom';
import { GloabalContext } from '../context/GlobalContext';
import ProductListItem from './ProductListItem';
export default function ProductList({data,apg}) {
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
      <Grid container spacing={4} style={{backgroundColor: "black",minHeight: "40vh",width: "100vw",padding: 20,}}>
      {currentData.map((item)=>{
        return(
          <ProductListItem item={item}/>
        )
      })}
      

    </Grid>
    <div style={{  justifyContent: "center", marginTop: 20 ,paddingBottom: 20,display:apg?"none":"flex"}}>
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
