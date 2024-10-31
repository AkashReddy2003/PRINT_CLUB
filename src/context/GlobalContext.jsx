import React, { createContext, useState } from 'react';
import jw1 from "../assets/img/stickers/bb_01.webp"
const GloabalContext = createContext();

const MyContextProvider = ({ children }) => {
  const [myState, setMyState] = useState('Hello from Context!');
  let data=[
    {
      id:1,
      name:"John wick",
      store:"sticker",
      collection:"ms",
      price:50,
      discountPrice:15,
      img:jw1
    },
    {
      name:"John wick",
      store:"sticker",
      collection:"ms",
      price:50,
      discountPrice:15,
      img:jw1
    },
    {
      name:"John wick",
      store:"sticker",
      collection:"ms",
      price:50,
      discountPrice:15,
      img:jw1
    },
    {
      name:"John wick",
      store:"sticker",
      collection:"ms",
      price:50,
      discountPrice:15,
      img:jw1
    },
    {
      name:"John wick",
      store:"sticker",
      collection:"ms",
      price:50,
      discountPrice:15,
      img:jw1
    },
    {
      name:"John wick",
      store:"sticker",
      collection:"ms",
      price:50,
      discountPrice:15,
      img:jw1
    },
    {
      name:"John wick",
      store:"sticker",
      collection:"ms",
      price:50,
      discountPrice:15,
      img:jw1
    },
    {
      id :2,
      name:"jw",
      store:"sticker",
      collection:"ms",
      price:50,
      discountPrice:15,
      img:jw1
    },
    {
      name:"jw",
      store:"sticker",
      collection:"ms",
      price:50,
      discountPrice:15,
      img:jw1
    },
    {
      name:"jw",
      store:"sticker",
      collection:"ms",
      price:50,
      discountPrice:15,
      img:jw1
    },
  ]
  return (
    <GloabalContext.Provider value={{ myState, setMyState,data }}>
      {children}
    </GloabalContext.Provider>
  );
};

export { GloabalContext, MyContextProvider };