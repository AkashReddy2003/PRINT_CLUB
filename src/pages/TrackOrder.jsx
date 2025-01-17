import React from 'react'
import Button1 from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
export default function TrackOrder() {
  return (
    <div style={{display: 'flex',height:"100vh",width: "100vw",backgroundColor:"#FFF8E8",justifyContent:"center",alignItems:"center"}}>
        <FormControl>
            <FormLabel  style={{ color: "black" }}><p className=' protest-guerrilla-regular'>Order Id</p></FormLabel>
            <Input className=' protest-guerrilla-regular'  style={{ backgroundColor: "#FFF8E8", color: "black" ,borderWidth: 0,borderBottomWidth: 2,borderRadius: 0,borderColor:"black"}} placeholder='Enter your Order Id'/>
        </FormControl>
      
    </div>
  )
}
