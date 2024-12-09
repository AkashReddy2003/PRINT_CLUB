import React, { useContext, useEffect, useMemo, useState } from 'react'
import '../css/cartpage.css'
import { GloabalContext } from '../context/GlobalContext'
import axios from 'axios'
import { Button, } from '@mui/material';
import Button1 from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CartItem from '../components/CartItem';
import cartgif from '../assets/img/cart.gif'

import log from "../assets/img/logo.webp"
import { useNavigate } from 'react-router-dom';
export default function CartPage() {
  const { cart, setCart, addtocart, deletefromcart, storeOrder, cartclear } = useContext(GloabalContext);
  const [responseId, setResponseId] = useState("");
  const [responseState, setResponseState] = useState("");
  const [pos, setPos] = useState("cart");
  const [pincodedata, setPincodeData] = useState([]);
  const [address, setAddress] = useState({
    "name": "",
    "last": "",
    "full": "",
    "city": "",
    "state": "",
    "pincode": "",
    "country": "India",
    "email": "",
    "phone": "",
    "payment": "prepaid"
  })
  const total = useMemo(() =>
    cart.reduce((acc, item) => acc + item.product.discountPrice * item.quantity, 0),
    [cart]
  );

  const discountTotal = useMemo(() =>
    cart.reduce((acc, item) => acc + (item.product.price - item.product.discountPrice) * item.quantity, 0),
    [cart]
  );





  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = src;

      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }

      document.body.appendChild(script);
    })
  }

  const createRazorpayOrder = (amount, id) => {
    let data = JSON.stringify({
      "options": {
        "amount": total * 100,
        "currency": "INR"
      },
      "items": cart,
      "address": address,
      "id": id
    })

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/orders",
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    }
    let config2 = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/sendorderconfirmation",
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    }

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data))

      })
      .catch((error) => {
        console.log("error at", error)
      })
      axios.request(config2)
      .then((response) => {
        console.log(JSON.stringify(response.data))

      })
      .catch((error) => {
        console.log("error at", error)
      })
    
  }

  const handleRazorpayScreen = async (amount) => {
    if (!address.city || !address.country || !address.email || !address.full || !address.last || !address.name || !address.name || !address.phone || !address.pincode || !address.state) {
      alert("Enter all mandatory details *");
      return;
    }
    if (amount < 225) {
      let n = (225 - amount) / 15;
      alert("Add " + n + " more stickers to checkout");
      return;
    }
    const res = await loadScript("https:/checkout.razorpay.com/v1/checkout.js")

    if (!res) {
      alert("Some error at razorpay screen loading")
      return;
    }

    const options = {
      key: 'rzp_test_cMDdZAoQm51G6f',
      amount: amount * 100,
      currency: 'INR',
      name: "PRINT CLUB",
      description: "payment to print club",
      image: log,
      handler: async (response) => {
        setResponseId(response.razorpay_payment_id);
        await paymentFetch(response.razorpay_payment_id);
      },
      prefill: {
        name: "PRINT CLUB",
        email: "printclubworld@gmail.com"
      },
      theme: {
        color: "#000000"
      }
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()

  }

  const paymentFetch = async (a) => {
    await axios.get(`http://localhost:3000/payment/${a}`)
      .then((response) => {
        console.log(response.data);
        setResponseState(response.data);
        if (response.data.status == "authorized") {
          storeOrder({
            "options": {
              "amount": response.data.amount/100,
              "currency": "INR"
            },
            "items": cart,
            "address": address,
            "status":"created",
            "id":response.data.id
          });
          createRazorpayOrder(response.data.amount / 100, response.data.id);
          cartclear();
        }
      })
      .catch((error) => {
        console.log("error occures", error)
      })
  }
  useEffect(() => {
    console.log(cart)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [cart, pos])

  const getPincodeData = async (a) => {
    await axios.get("https://api.postalpincode.in/pincode/" + a).then((res) => {
      setPincodeData(res.data[0].PostOffice);
      console.log(res.data[0].PostOffice)
    })
  }
  const navigate = useNavigate();
  return (
    <>
      {cart.length == 0 ?
        <div style={{ minHeight: "60vh", width: "100vw", backgroundColor: "#FFF8E8", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <img src={cartgif} style={{ width: 250, height: 250, }} />
          <h1 className='protest-guerrilla-regular' style={{ fontSize: 30, letterSpacing: 8 }}> Your cart is empty</h1>
          <Button1 variant='solid' color='warning' onClick={() => navigate(`/product/Store/collection`, { state: { store: "", collection: "" } })}><p className='poppins-medium' style={{ fontSize: 15, }} >Continue shopping</p></Button1>
        </div> :
        <div className='cartmain'>

          {pos == "cart" ?
            <div className='cartprod'>
              <h1 className='carthead protest-guerrilla-regular'>{pos == "cart" ? "Cart" : "Checkout"}</h1>
              <div style={{ width: "100%", height: 2, backgroundColor: "#FFF8E8", }} />

              <div>
                {cart ? cart.map((a) => {
                  return (
                    <CartItem a={a} />
                  )


                }) : ""}
              </div>


            </div> :
            <>
              <div className='checkout checkoutpc'>
                <h1 className='carthead protest-guerrilla-regular'><span style={{ cursor: "pointer" }} onClick={() => setPos("cart")}>Cart</span> {" > "} Checkout</h1>
                <div style={{ width: "100%", height: 2, backgroundColor: "#FFF8E8", }} />
                <div style={{ margin: 30, }}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControl style={{ margin: 10, width: "98%", }}>
                      <FormLabel style={{ color: "#FFF8E8" }}>First Name *</FormLabel>
                      <Input style={{ backgroundColor: "black", color: "#FFF8E8" }} placeholder='Enter your First name' onChange={(e) => {
                        let ad = address;
                        ad.name = e.target.value;
                        setAddress(ad);
                      }} />
                    </FormControl>
                    <FormControl style={{ margin: 10, width: "98%", }}>
                      <FormLabel style={{ color: "#FFF8E8" }}>Last Name *</FormLabel>
                      <Input style={{ backgroundColor: "black", color: "#FFF8E8" }} placeholder='Enter your Last name' onChange={(e) => {
                        let ad = address;
                        ad.last = e.target.value;
                        setAddress(ad);
                      }} />
                    </FormControl>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>

                    <FormControl style={{ margin: 10, width: "100%" }}>
                      <FormLabel style={{ color: "#FFF8E8" }}>Email *</FormLabel>
                      <Input style={{ backgroundColor: "black", color: "#FFF8E8" }} placeholder='Enter your email address' onChange={(e) => {
                        let ad = address;
                        ad.email = e.target.value;
                        setAddress(ad);
                      }} />
                    </FormControl>
                    <FormControl style={{ margin: 10, width: "100%" }}>
                      <FormLabel style={{ color: "#FFF8E8" }}>Phone Number *</FormLabel>
                      <Input style={{ backgroundColor: "black", color: "#FFF8E8" }} placeholder='Enter your phone number' onChange={(e) => {
                        let ad = address;
                        ad.phone = e.target.value;
                        setAddress(ad);
                      }} />
                    </FormControl>

                  </div>
                  <FormControl style={{ margin: 10, width: "98%", }}>
                    <FormLabel style={{ color: "#FFF8E8" }}>Address *</FormLabel>
                    <Input style={{ backgroundColor: "black", color: "#FFF8E8" }} placeholder='Enter your address with house no and street name' onChange={(e) => {
                      let ad = address;
                      ad.full = e.target.value;
                      setAddress(ad);
                    }} />
                  </FormControl>
                  <FormControl style={{ margin: 10, width: "98%", }}>
                    <FormLabel style={{ color: "#FFF8E8" }}>Pincode *</FormLabel>
                    <Input style={{ backgroundColor: "black", color: "#FFF8E8" }} placeholder='Enter your area pincode' onChange={(e) => {
                      getPincodeData(e.target.value); let ad = address;
                      ad.pincode = e.target.value;
                      setAddress(ad);
                    }} />
                  </FormControl>
                  <div style={{ display: "flex", flexDirection: "row", marginBottom: 50 }}>
                    <FormControl style={{ margin: 10, width: "100%" }}>
                      <FormLabel style={{ color: "#FFF8E8" }}>Post Office *</FormLabel>
                      <Select placeholder="Enter pincode" onChange={(event, newValue) => {
                        let ad = address;
                        ad.city = newValue;
                        setAddress(ad);
                      }}>
                        {pincodedata ? pincodedata.map((a) => {
                          return (
                            <Option value={a.Name}>{a.Name}</Option>
                          )
                        }) : ""}

                      </Select>
                    </FormControl>
                    <FormControl style={{ margin: 10, width: "100%" }}>
                      <FormLabel style={{ color: "#FFF8E8" }}>District *</FormLabel>
                      <Select placeholder="Enter pincode" >
                        {pincodedata ? pincodedata.map((a) => {
                          return (
                            <Option value={a.District}>{a.District}</Option>
                          )
                        }) : ""}

                      </Select>
                    </FormControl>
                    <FormControl style={{ margin: 10, width: "100%" }}>
                      <FormLabel style={{ color: "#FFF8E8" }}>State *</FormLabel>
                      <Select placeholder="Enter pincode" onChange={(event, newValue) => {
                        let ad = address;
                        ad.state = newValue;
                        setAddress(ad);
                      }}>
                        {pincodedata ? pincodedata.map((a) => {
                          return (
                            <Option value={a.State}>{a.State}</Option>
                          )
                        }) : ""}

                      </Select>
                    </FormControl>

                  </div>
                </div>



              </div>
              <div className='checkout checkoutmob'>
                <h1 className='carthead protest-guerrilla-regular'><span style={{ cursor: "pointer" }} onClick={() => setPos("cart")}>Cart</span> {" > "} Checkout</h1>
                <div style={{ width: "100%", height: 2, backgroundColor: "#FFF8E8", }} />
                <div style={{ margin: 30, }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <FormControl style={{ margin: 10, width: "98%", }}>
                      <FormLabel style={{ color: "#FFF8E8" }}>First Name *</FormLabel>
                      <Input style={{ backgroundColor: "black", color: "#FFF8E8" }} placeholder='Enter your First name' onChange={(e) => {
                        let ad = address;
                        ad.name = e.target.value;
                        setAddress(ad);
                      }} />
                    </FormControl>
                    <FormControl style={{ margin: 10, width: "98%", }}>
                      <FormLabel style={{ color: "#FFF8E8" }}>Last Name *</FormLabel>
                      <Input style={{ backgroundColor: "black", color: "#FFF8E8" }} placeholder='Enter your Last name' onChange={(e) => {
                        let ad = address;
                        ad.last = e.target.value;
                        setAddress(ad);
                      }} />
                    </FormControl>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column" }}>

                    <FormControl style={{ margin: 10, width: "100%" }}>
                      <FormLabel style={{ color: "#FFF8E8" }}>Email *</FormLabel>
                      <Input style={{ backgroundColor: "black", color: "#FFF8E8" }} placeholder='Enter your email address' onChange={(e) => {
                        let ad = address;
                        ad.email = e.target.value;
                        setAddress(ad);
                      }} />
                    </FormControl>
                    <FormControl style={{ margin: 10, width: "100%" }}>
                      <FormLabel style={{ color: "#FFF8E8" }}>Phone Number *</FormLabel>
                      <Input style={{ backgroundColor: "black", color: "#FFF8E8" }} placeholder='Enter your phone number' onChange={(e) => {
                        let ad = address;
                        ad.phone = e.target.value;
                        setAddress(ad);
                      }} />
                    </FormControl>

                  </div>
                  <FormControl style={{ margin: 10, width: "98%", }}>
                    <FormLabel style={{ color: "#FFF8E8" }}>Address *</FormLabel>
                    <Input style={{ backgroundColor: "black", color: "#FFF8E8" }} placeholder='Enter your address with house no and street name' onChange={(e) => {
                      let ad = address;
                      ad.full = e.target.value;
                      setAddress(ad);
                    }} />
                  </FormControl>
                  <FormControl style={{ margin: 10, width: "98%", }}>
                    <FormLabel style={{ color: "#FFF8E8" }}>Pincode *</FormLabel>
                    <Input style={{ backgroundColor: "black", color: "#FFF8E8" }} placeholder='Enter your area pincode' onChange={(e) => {
                      getPincodeData(e.target.value); let ad = address;
                      ad.pincode = e.target.value;
                      setAddress(ad);
                    }} />
                  </FormControl>
                  <div style={{ display: "flex", flexDirection: "column", marginBottom: 50 }}>
                    <FormControl style={{ margin: 10, width: "100%" }}>
                      <FormLabel style={{ color: "#FFF8E8" }}>Post Office *</FormLabel>
                      <Select placeholder="Enter pincode" onChange={(event, newValue) => {
                        let ad = address;
                        ad.city = newValue;
                        setAddress(ad);
                      }}>
                        {pincodedata ? pincodedata.map((a) => {
                          return (
                            <Option value={a.Name}>{a.Name}</Option>
                          )
                        }) : ""}

                      </Select>
                    </FormControl>
                    <FormControl style={{ margin: 10, width: "100%" }}>
                      <FormLabel style={{ color: "#FFF8E8" }}>District *</FormLabel>
                      <Select placeholder="Enter pincode" >
                        {pincodedata ? pincodedata.map((a) => {
                          return (
                            <Option value={a.District}>{a.District}</Option>
                          )
                        }) : ""}

                      </Select>
                    </FormControl>
                    <FormControl style={{ margin: 10, width: "100%" }}>
                      <FormLabel style={{ color: "#FFF8E8" }}>State *</FormLabel>
                      <Select placeholder="Enter pincode" onChange={(event, newValue) => {
                        let ad = address;
                        ad.state = newValue;
                        setAddress(ad);
                      }}>
                        {pincodedata ? pincodedata.map((a) => {
                          return (
                            <Option value={a.State}>{a.State}</Option>
                          )
                        }) : ""}

                      </Select>
                    </FormControl>

                  </div>
                </div>



              </div>
            </>


          }

          <div className='cartcheck' >
            <div className='cc'>
              <p style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", height: 40 }}><span className='carttag'>Subtotal </span><span className='carttag1'>{"Rs. " + Number(total + discountTotal)}</span></p>
              <p style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", height: 40, marginBottom: 20 }}><span className='carttag'>Discount </span><span className='carttag1' style={{ color: "red" }}>{"- Rs. " + discountTotal}</span></p>
              <div style={{ width: "100%", height: 2, backgroundColor: "#FFF8E8", display: "flex" }} />
              <p style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", height: 40, marginBottom: 20 }}><span className='carttag'>Grand total </span><span className='carttag1' style={{ color: "green" }}>{"Rs. " + total}</span></p>
              {pos == "cart" ?
                <Button variant="contained" onClick={() => {
                  if (total >= 225) {
                    setPos("checkout")
                  } else {
                    let n = (225 - total) / 15;
                    alert("Add " + n + " more stickers to checkout");

                  }
                }} style={{
                  alignSelf: "center",
                  width: "80%",
                  margin: "20px auto",
                  display: "block" // Ensures it behaves as a block-level element for centering
                }}>Checkout</Button> :
                ""
              }

              {pos == "checkout" ? <Button variant="contained" onClick={async () => { handleRazorpayScreen(total) }} style={{
                alignSelf: "center",
                width: "80%",
                margin: "20px auto",
                display: "block" // Ensures it behaves as a block-level element for centering
              }}>Pay now</Button> : ""}

            </div>

          </div>




        </div>
      }

    </>

  )
}
