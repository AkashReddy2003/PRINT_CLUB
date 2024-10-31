import React from 'react'
import "../css/collectionpage.css"
import Grid from '@mui/material/Grid2';

import gam from "../assets/img/gaming.webp"
import nat from "../assets/img/nature-travel.webp"
import mus from "../assets/img/music.webp"
import art from "../assets/img/art-aesthetics.webp"
import anim from "../assets/img/comics-anime.webp"
import spa from "../assets/img/space-scifi.webp"
import mos from "../assets/img/movies-series.webp"
import fan from "../assets/img/cars.webp"
import quo from "../assets/img/quotes-typography.webp"
import spo from "../assets/img/sports.webp"
import { useNavigate } from 'react-router-dom';

export default function CollectionPage() {
  const navigate=useNavigate();
    let data=[
      { name: "Movies & Series", img: mos },
      { name: "Sports", img: spo },
        { name: "Gaming", img: gam },
        { name: "Nature & Travel", img: nat },
        { name: "Music", img: mus },
        { name: "Art & Aesthetics", img: art },
        { name: "Comics & Anime", img: anim },
        { name: "Quotes & Typography", img: quo },
        { name: "Space & Sci-Fi", img: spa },
        { name: "Cars & Motorsports", img: fan },
        // { name: "Pets & Animals", img: "pets-animals.jpg" },
        // { name: "Food & Drinks", img: "food-drinks.jpg" },
        // { name: "Cars & Motorsports", img: "cars-motorsports.jpg" }
      ];
  return (
    <div style={{backgroundColor:"black",width: "100vw",minHeight: "100vh",}}>
      <Grid container spacing={4} style={{padding: 20,paddingBottom: 50,}}>
        {data.map((item)=>{
            return(
                <Grid className="tile" size={{ md: 12, lg: 4, }} onClick={()=>navigate(`/product/${"Store"}/${item.name}`)}>
                    
                    <h1 style={{fontSize: 20,color:"#FFF8E8"}} className='protest-guerrilla-regular'>{item.name}</h1>
                    <img src={item.img}/>
                </Grid>
            )
        })}
        

      </Grid>
    </div>
  )
}
