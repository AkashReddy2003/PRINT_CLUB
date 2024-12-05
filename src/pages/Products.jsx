import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import { Breadcrumbs, Chip, Grid2, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import "../css/productspage.css"
import { GloabalContext } from '../context/GlobalContext';
import ProductList from '../components/ProductList';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Button } from '@mui/joy';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
export default function Products() {
 
  const {data}=useContext(GloabalContext);
  const [Data,setData]=useState([]);
  const location=useLocation();
  const [store,setStore]=useState(location.state.store);
  const [collection,setCollection]=useState(location.state.collection);
  const [tags,setTags]=useState([]);
  const [tagslist,setTagslist]=useState([]);
  const [open, setOpen] = React.useState(false);
  let collectionlist=[
    "Movies & Series",
    "Sports",
      "Gaming",
      "Nature & Travel",
      "Music",
      "Art & Aesthetics",
      "Comics & Anime",
      "Quotes & Typography",
      "Space & Sci-Fi",
      "Cars & Motorsports",
      // { name: "Pets & Animals", img: "pets-animals.jpg" },
      // { name: "Food & Drinks", img: "food-drinks.jpg" },
      // { name: "Cars & Motorsports", img: "cars-motorsports.jpg" }
    ];
  useEffect(()=>{
    
      
      let a=data.filter((i)=>(((i.collection==collection||collection=="")&&(i.store==store||store=="")&&(i.tags.some(x=>tags.includes(x))||tags.length==0))?true:false));
      let x=[];
      data.map((i)=>{i.tags.map((it)=>x.includes(it)?"":x.push(it))});
      setTagslist(x);
      setData(a);
      
    
   
    
  },[data,collection,store,tags])

  return (
    <div style={{backgroundColor: "black",width: "100vw",}}>
     <p className='poppins-medium' style={{color:"#FFF8E8",textAlign:"left",padding:20,paddingLeft:window.screen.width>1300?50:0}}>{store+" → "+collection}</p>
     <p style={{textAlign:"left",color:"#FFF8E8",paddingLeft:window.screen.width>1300?50:20}} className='protest-guerrilla-regular productshead'>{collection!=""?collection:"All"}<span style={{fontSize:30}}>{"        "+store}</span></p>
     <div className='filterchips' style={{width: "100vw",display:"flex",paddingLeft:0,alignItems:"center",justifyContent:"center"}}>
      
<Button className='poppins-medium' color="success" label="FILTERS" style={{backgroundColor: "#FFF8E8",color:"black"}} onClick={()=>setOpen(true)}>Filter</Button>
<div className='proddiv' style={{height:30,width: 3,backgroundColor: "#FFF8E8",marginLeft:20,marginRight: 20,}}></div>

{collection!=""&&<Chip variant="outlined" onDelete={()=>{setCollection("")}} label={collection} style={{marginRight: 20,color:"#FFF8E8"}} deleteIcon={<ClearIcon style={{color:"#FFF8E8"}} onClick={()=>setCollection("")}/>}/>}
{store!=""&&<Chip variant="outlined" onDelete={()=>{setStore("")}} label={store} style={{marginRight: 20,color:"#FFF8E8"}} deleteIcon={<ClearIcon style={{color:"#FFF8E8"}}/>}/>}
{tags.length>0?tags.map((a)=><Chip variant="outlined" onDelete={()=>{setTags(tags.filter((x)=>x!=a))}} label={a} style={{marginRight: 20,color:"#FFF8E8"}} deleteIcon={<ClearIcon style={{color:"#FFF8E8"}} onClick={()=>setCollection("")}/>}/>):""}





     </div>
    <ProductList data={Data}/>
    <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' ,flexDirection:"row",backgroundColor:"white",padding:20,borderRadius: 20,}}>

        <div >
        <Typography
        id="filter-status"
        sx={{
          textTransform: 'uppercase',
          fontSize: 'xs',
          letterSpacing: 'lg',
          fontWeight: 'lg',
          color: 'text.secondary',
          mb: 2,
        }}
      >
        Store
      </Typography>
        <List>
        <ListItem variant="plain" sx={{ borderRadius: 'sm' }}>
            <Checkbox
              label="sticker"
              color="neutral"
              overlay
              checked={store=="Sticker"?true:false}
              onChange={(event) =>
                event.target.checked?setStore("Sticker"):setStore("")
              }
            />
          </ListItem>
          <ListItem variant="plain" sx={{ borderRadius: 'sm' }}>
            <Checkbox
              label="poster"
              color="neutral"
              overlay
              checked={store=="Poster"?true:false}
              onChange={(event) =>
                event.target.checked?setStore("Poster"):setStore("")
              }
            />
          </ListItem>
        </List>
        <Typography
        id="filter-status"
        sx={{
          textTransform: 'uppercase',
          fontSize: 'xs',
          letterSpacing: 'lg',
          fontWeight: 'lg',
          color: 'text.secondary',
          mb: 2,
        }}
      >
        Collection
      </Typography>
        <List>
          {collectionlist.map((a)=>
          <ListItem variant="plain" sx={{ borderRadius: 'sm' }}>
          <Checkbox
            label={a}
            color="neutral"
            overlay
            checked={collection==a?true:false}
            onChange={(event) =>
              event.target.checked?setCollection(a):setCollection("")
            }
          />
        </ListItem>
          )}
        
        </List>
        </div>
        <div style={{maxHeight: "80vh",overflow:"scroll"}}>
        <Typography
        id="filter-status"
        sx={{
          textTransform: 'uppercase',
          fontSize: 'xs',
          letterSpacing: 'lg',
          fontWeight: 'lg',
          color: 'text.secondary',
          mb: 2,
        }}
      >
        Tags
      </Typography>
        <List>
          {tagslist.map((a)=>
          <ListItem variant="plain" sx={{ borderRadius: 'sm' }}>
          <Checkbox
            label={a}
            color="neutral"
            overlay
            checked={tags.includes(a)?true:false}
            onChange={(event) =>
              event.target.checked?setTags([...tags,a]):setTags(tags.filter((y)=>y!=a?true:false))
            }
          />
        </ListItem>
          )}
        
        </List>
        </div>
        

        </div>
        
      
      </Modal>
    </div>
  )
}
