import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import { Breadcrumbs, Chip, Grid2, IconButton, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import "../css/productspage.css"
import { GloabalContext } from '../context/GlobalContext';
import ProductList from '../components/ProductList';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Button, FormControl ,} from '@mui/joy';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import {FormLabel,FormHelperText,Select,Option,Grid} from '@mui/joy';
import { color } from 'framer-motion';
import Autocomplete from '@mui/material/Autocomplete';
export default function Products() {
 
  const {data}=useContext(GloabalContext);
  const [Data,setData]=useState([]);
  const location=useLocation();
  const [store,setStore]=useState(location.state?location.state.store:"");
  const [collection,setCollection]=useState(location.state?location.state.collection:"");
  const [tags,setTags]=useState([]);
  const [tagslist,setTagslist]=useState([]);
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
      let a=data.filter((i)=>(((i.collection==collection||collection==""||collection=="All")&&(i.store==store||store==""||store=="All")&&(i.tags.includes(searchTerm)||searchTerm==""||searchTerm==null)&&(i.tags.some(x=>tags.includes(x))||tags.length==0||tags.includes("All")))?true:false));
      let x=[];
      data.map((i)=>{i.tags.map((it)=>(!x.includes(it)&&(i.store==store||store==""||store=="All")&&(i.collection==collection||collection==""||collection=="All"))?x.push(it):"")});
      setTagslist(x.sort());
      setData(a.reverse());
      
    
   
    
  },[data,collection,store,tags,searchTerm])
  

  return (
    <div style={{backgroundColor: "black",width: "100vw",}}>
     <p className='poppins-medium' style={{color:"#FFF8E8",textAlign:"left",padding:20,paddingLeft:window.screen.width>1300?50:0}}>{store+" → "+collection}</p>
     <p style={{textAlign:"left",color:"#FFF8E8",paddingLeft:window.screen.width>1300?50:20}} className='protest-guerrilla-regular productshead'>{collection!=""?collection:"All"}<span style={{fontSize:30}}>  {Data.length}</span></p>
     <div style={{width:"100%",display:"flex",justifyContent:"center",marginBottom: 20,}}>
     <FormControl style={{ margin: 10, width:"30vw"}}>
                      <FormLabel style={{ color: "#FFF8E8" }}>Store</FormLabel>
                      <Select placeholder={store?store:"All"} style={{backgroundColor: "black", color: "#FFF8E8" ,borderWidth: 2,borderRadius: 0,borderColor:"#FFF8E8"}} onChange={(event, newValue) => {
                        setStore(newValue)
                      }}>
                        
                            <Option value={"All"}>All</Option>
                            
                            <Option value={"Poster"}>Poster</Option>
                          

                      </Select>
                    </FormControl>
                    <FormControl style={{ margin: 10,width:"30vw" }}>
                      <FormLabel style={{ color: "#FFF8E8" }}>Collection</FormLabel>
                      <Select placeholder={collection?collection:"All"} style={{backgroundColor: "black", color: "#FFF8E8" ,borderWidth: 2,borderRadius: 0,borderColor:"#FFF8E8"}} onChange={(event, newValue) => {
                        setCollection(newValue)
                      }}>
                        <Option value={"All"}>All</Option>
                        {collectionlist.map((a)=>
                          <Option value={a}>{a}</Option>
                        )}
                            
                            
                          

                      </Select>
                    </FormControl>
                    <FormControl style={{ margin: 10,width:"30vw" }}>
                      <FormLabel style={{ color: "#FFF8E8" }}>Tags</FormLabel>
                      <Select placeholder={tags.length!=0?tags:"All"} style={{backgroundColor: "black", color: "#FFF8E8" ,borderWidth: 2,borderRadius: 0,borderColor:"#FFF8E8"}} onChange={(event, newValue) => {
                        setTags(newValue)
                      }} multiple inputValue={searchTerm}
                      onInputChange={(event, value) => setSearchTerm(value)}>
                        <Option value={"All"}>All</Option>
                        
                        {tagslist.map((a)=>
                          <Option value={a}>{a}</Option>
                        )}
                            
                            
                          

                      </Select>
                    </FormControl>
                    
     </div>
     <FormControl style={{ padding: 10,width:"100vw" ,alignSelf: 'center',}}>
                      <FormLabel style={{ color: "#FFF8E8",marginLeft: window.screen.width>800?40:0, }}>Search</FormLabel>
                      <Autocomplete
                      
                      onChange={(event, newValue) => {
                        console.log(newValue);
                        
                        setSearchTerm(newValue)
                        
                      }}
      disablePortal
      style={{backgroundColor: "black", color: "#FFF8E8" ,borderWidth: 2,borderRadius: 0,borderColor:"#FFF8E8",color:"#FFF8E8",width: "93vw",alignSelf:"center"}}
      options={tagslist}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField  {...params} variant='outlined' sx={{ 
    input: { color: "#FFF8E8" } // Changes input text color
  }}  value={searchTerm} />}
    />
                      
                    </FormControl>
     
     
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
