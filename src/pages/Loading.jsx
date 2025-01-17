import React from 'react'
import load from '../assets/load.gif'
export default function Loading() {
  return (
    <div style={{width: '100vw',height:'100vh',backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center"}}>

      <img className='loadingimg' src={load}/>
    </div>
  )
}
