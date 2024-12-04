import React, { createContext, useEffect, useState } from 'react';
import jw1 from "../assets/img/stickers/bb_01.png"
import { app } from '../config/FirebaseConfig';
import { getDatabase,push,ref,set,onValue } from "firebase/database";
import { json } from 'react-router-dom';
const GloabalContext = createContext();

const MyContextProvider = ({ children }) => {
  
  const [data,setData]=useState([]);
  const db=getDatabase(app);
  const [prod,setProd]=useState({});
  const [cart,setCart]=useState([]);
  const [load,setLoad]=useState(true);
  const getData=()=>{
    const productRef =ref(db, 'products/');
    onValue(productRef,(snapshot)=>{
      let products=[];
      
      console.log(snapshot)
      snapshot.forEach(a=>{
        products.push(a.val());
      })
      console.log(products);
      let x=localStorage.getItem("cart")
      

      x=JSON.parse(x);
      console.log(x)
      let c=x?x:[];
      console.log(c);
      setCart(c);
      setData(products);
      setLoad(false);
      
    })
  }
  const addtocart=async(a,quantity)=>{
    let c=[...cart];
    let p=false;
    console.log(a,quantity);
    
    for(let i=0;i<c.length;i++){
      if(c.at(i).product.image==a.image){
       p=true;
        c.at(i).quantity=quantity;
        setCart(c);
        localStorage.setItem("cart",JSON.stringify(c));
        break;
      }
    }
    if(!p){
      c.push({product:a,quantity:quantity});
      setCart(c);
      localStorage.setItem("cart",JSON.stringify(c));
    }

    
    console.log(cart)
  }

  const cartclear=()=>{
    setCart([]);
    localStorage.removeItem("cart");
  }
  const deletefromcart=(a)=>{
    let c=[...cart];
    
    c=c.filter((x)=>a!=x.product?true:false);
    setCart(c);
    localStorage.setItem("cart",JSON.stringify(c));
    
  }
  
  const storeOrder=async(x)=>{
    push(ref(db,"orders/"),x);
  }
  useEffect(()=>{

    getData();
  },[])
  
  const [myState, setMyState] = useState('Hello from Context!');
  // let data=[
  //   {
  //     id:1,
  //     name:"John wick",
  //     store:"sticker",
  //     collection:"ms",
  //     price:50,
  //     discountPrice:15,
  //     img:jw1
  //   },
  //   {
  //     name:"John wick",
  //     store:"sticker",
  //     collection:"ms",
  //     price:50,
  //     discountPrice:15,
  //     img:jw1
  //   },
  //   {
  //     name:"John wick",
  //     store:"sticker",
  //     collection:"ms",
  //     price:50,
  //     discountPrice:15,
  //     img:jw1
  //   },
  //   {
  //     name:"John wick",
  //     store:"sticker",
  //     collection:"ms",
  //     price:50,
  //     discountPrice:15,
  //     img:jw1
  //   },
  //   {
  //     name:"John wick",
  //     store:"sticker",
  //     collection:"ms",
  //     price:50,
  //     discountPrice:15,
  //     img:jw1
  //   },
  //   {
  //     name:"John wick",
  //     store:"sticker",
  //     collection:"ms",
  //     price:50,
  //     discountPrice:15,
  //     img:jw1
  //   },
  //   {
  //     name:"John wick",
  //     store:"sticker",
  //     collection:"ms",
  //     price:50,
  //     discountPrice:15,
  //     img:jw1
  //   },
  //   {
  //     id :2,
  //     name:"jw",
  //     store:"sticker",
  //     collection:"ms",
  //     price:50,
  //     discountPrice:15,
  //     img:jw1
  //   },
  //   {
  //     name:"jw",
  //     store:"sticker",
  //     collection:"ms",
  //     price:50,
  //     discountPrice:15,
  //     img:jw1
  //   },
  //   {
  //     name:"jw",
  //     store:"sticker",
  //     collection:"ms",
  //     price:50,
  //     discountPrice:15,
  //     img:jw1
  //   },
  // ]
  return (
    <GloabalContext.Provider value={{ myState, setMyState,data,prod,setProd,load ,cart,setCart,addtocart,deletefromcart,storeOrder,cartclear}}>
      {children}
    </GloabalContext.Provider>
  );
};

export { GloabalContext, MyContextProvider };