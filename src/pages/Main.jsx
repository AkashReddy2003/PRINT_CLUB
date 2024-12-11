import React, { useContext, useEffect, useState } from 'react'
import HomePage from './HomePage'
import StoresPage from './StoresPage'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import MenuIcon from '@mui/icons-material/Menu';
import CollectionPage from './CollectionPage';
import { useNavigate, useParams } from 'react-router-dom';
import Products from './Products';
import ProductPage from './ProductPage';
import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { GloabalContext } from '../context/GlobalContext';
import Loading from './Loading';
import CartPage from './CartPage';
export default function Main() {
  const {nav}=useParams();
  const navigate=useNavigate();
  const [open, setOpen] = React.useState(false);
  const {load}=useContext(GloabalContext)
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: "100vw",backgroundColor: "#FFF8E8",height:"100%" }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        
          <ListItem  disablePadding>
            <ListItemButton>
             
              <ListItemText  ><a style={{width: "16%",fontSize: 35,}} className='protest-guerrilla-regular' onClick={()=>navigate("/")}>PRINT CLUB</a></ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
      <ListItem  disablePadding>
            <ListItemButton>
             
              <ListItemText  ><a style={{width: "14%",fontSize: 18,}} className='poppins-medium' onClick={()=>navigate("/store")}>Stores</a></ListItemText>
             
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
             
             
              <ListItemText  ><a style={{width: "14%",fontSize: 18,}} className='poppins-medium' onClick={()=>navigate("/collection")}>Collections</a></ListItemText>
           
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
             
            
              <ListItemText  ><a style={{width: "14%",fontSize: 18,}} className='poppins-medium' onClick={()=>navigate("/cart")}>Cart</a></ListItemText>
             
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton>
             
             
              <ListItemText  ><a style={{width: "14%",fontSize: 18,}} className='poppins-medium'>Track Order</a></ListItemText>
            </ListItemButton>
          </ListItem>
        
      </List>
    </Box>
  );


  return (<>
  {load?<Loading/>:
  <div >
  <section id='mobnav' style={{flexDirection:"row",justifyContent:"space-between",width: "100vw",backgroundColor: "#FFF8E8",}}>
  
   <Button onClick={toggleDrawer(true)}><MenuIcon style={{fontSize: 35,color:"black",alignSelf:"baseline"}}/></Button>
   <Drawer open={open} onClose={toggleDrawer(false)} style={{height: "100vh",}}>
     {DrawerList}
   </Drawer>
  
  
   <a style={{fontSize: 35,marginRight:10}} className='protest-guerrilla-regular' onClick={()=>navigate("/")}>PRINT CLUB</a>
  </section>
   <section id='navbar' style={{backgroundColor:"#FFF8E8",width: "100vw",minHeight:85}}>
    
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center',marginLeft:30,marginRight: 20,paddingTop:20}}>
    <a style={{width: "14%",fontSize: 18,}} className='poppins-medium' onClick={()=>navigate("/store")}>Stores</a>
    <a style={{width: "14%",fontSize: 18,}} className='poppins-medium' onClick={()=>navigate("/collection")}>Collections</a>
    <a style={{width: "16%",fontSize: 35,}} className='protest-guerrilla-regular' onClick={()=>navigate("/")}>PRINT CLUB</a>
    <a style={{width: "14%",fontSize: 18,}} className='poppins-medium' onClick={()=>navigate("/cart")}>Cart</a>
    <a style={{width: "14%",fontSize: 18,}} className='poppins-medium'>Track Order</a>
    </div>
</section>
<div style={{visibility:open?"hidden":"visible"}}>
{!nav&&<HomePage/>}
{nav=="store"&&<StoresPage/>}
{nav=="collection"&&<CollectionPage/>}
{nav=="product"&&<Products/>}
{nav=="productpage"&&<ProductPage/>}
{nav=="cart"&&<CartPage/>}
</div>


<section style={{width:"100vw",backgroundColor:"#FFF8E8",display:"flex",justifyContent:"center",flexDirection:"column"}}>
     <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:20}}>
     <p className='poppins-medium'>STAY UPDATED</p>
     <div>
       <p className='poppins-medium' style={{width:'30vw',textAlign:"left",fontSize:12}}>THE FIRST RULE OF PRINT CLUB: YOU DON’T MISS OUT. ENTER YOUR EMAIL FOR EXCLUSIVE OFFERS AND NEW DESIGNS STRAIGHT TO YOUR INBOX.</p>
       <div style={{display:"flex",width:"30vw",flexDirection:"row",alignItems:"center"}}>
       <input style={{width: '40vw',borderBottomWidth:2,borderColor:"black",backgroundColor:"#FFF8E8",marginTop:20}} placeholder='ENTER YOUR EMAIL'/>
       <a href='#'><ArrowOutwardIcon/></a>
       </div>
      
     </div>
     </div>
   
   <p style={{alignSelf:"center"}} className='protest-guerrilla-regular footerlogo'>PRINT CLUB</p>
   <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:20}}>
     <p className='poppins-medium'>© PRINT CLUB 2024</p>
     <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
     <a href='#' className='poppins-medium' style={{marginRight: 20,}}>PRIVACY POLICY <ArrowOutwardIcon/></a>
     <a href="#" className='poppins-medium'>TERMS & CONDITIONS <ArrowOutwardIcon/></a>
      
     </div>
     </div>
   </section>
 </div>
  
  }
  </>
    
  )
}
