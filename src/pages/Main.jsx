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
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { GloabalContext } from '../context/GlobalContext';
import Loading from './Loading';
import CartPage from './CartPage';
export default function Main() {
  const {nav}=useParams();
  const navigate=useNavigate();
  const [open, setOpen] = React.useState(false);
  const [openm, setOpenm] = React.useState(false);
  const [modcontent,setModecontent]=useState("p");
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
       <p className='poppins-medium' style={{width:window.screen.width>789?'30vw':'50vw',textAlign:"left",fontSize:12}}>THE FIRST RULE OF PRINT CLUB: YOU DON’T MISS OUT. ENTER YOUR EMAIL FOR EXCLUSIVE OFFERS AND NEW DESIGNS STRAIGHT TO YOUR INBOX.</p>
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
     <a  className='poppins-medium' style={{marginRight: 20,}} onClick={()=>{setModecontent("p"),setOpenm(true)}}>PRIVACY POLICY <ArrowOutwardIcon/></a>
     <a className='poppins-medium' onClick={()=>{setModecontent("t"),setOpenm(true)}}>TERMS & CONDITIONS <ArrowOutwardIcon/></a>
      
     </div>
     </div>
   </section>
   <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={openm}
        onClose={() => setOpenm(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            sx={{ fontWeight: 'lg', mb: 1 }}
          >
           {modcontent=="p"?"Privacy Policy":"Terms and Conditions"}
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
           {modcontent=="t"?<>
            
        <p><strong>Introduction</strong><br/>
            Welcome to PRINT CLUB! These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to comply with these terms. If you do not agree, please do not use our services.
        </p>
        <p><strong>User Obligations</strong><br/>
            - Ensure that all information provided is accurate and up-to-date.<br/>
            - Use the website only for lawful purposes and refrain from engaging in any fraudulent activity.
        </p>
        <p><strong>Intellectual Property</strong><br/>
            All content, including images, text, and logos, is the property of PRINT CLUB and is protected under applicable intellectual property laws. Reproduction without permission is prohibited.
        </p>
        <p><strong>Limitation of Liability</strong><br/>
            PRINT CLUB is not liable for any damages resulting from the use or inability to use our website or services.
        </p>
        <p><strong>Modifications</strong><br/>
            We reserve the right to update these terms at any time. Please check back regularly for updates.
        </p></>:<>
        <p><strong>Data Collection</strong><br/>
            We collect personal information such as name, email, phone number, and address during account registration and transactions.
        </p>
        <p><strong>Use of Data</strong><br/>
            - To process orders and provide customer support.<br/>
            - To send updates about products, services, and promotions.
        </p>
        <p><strong>Data Protection</strong><br/>
            We ensure your data is stored securely and is not shared with third parties except for order fulfillment or legal compliance.
        </p>
        <p><strong>Your Rights</strong><br/>
            You may request access to, modification of, or deletion of your data by contacting us.
        </p>
        <p><strong>Cookies</strong><br/>
            Our website uses cookies to enhance your browsing experience. By using our site, you consent to this.
        </p></>}
          </Typography>
        </Sheet>
      </Modal>
   
 </div>
  
  }
  </>
    
  )
}
