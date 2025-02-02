import React from 'react'
import Cup from "../assets/img/cupsticker.webp"
import Pc from "../assets/img/lapsticker.webp"
import Book from "../assets/img/booksticker.webp"
import pw1 from "../assets/img/posterwall1.webp"
import pw2 from "../assets/img/posterwall2.webp"
import "../css/Productpage.css"
export default function PosterFooter() {
    return (
        <div style={{ width: "100vw", minHeight: "100vh" }}>
            <div className='productfooter' style={{ display: "flex",  backgroundColor: "black", width: "100vw", minHeight: "100vh", paddingBottom: 0,justifyContent:"center",alignItems:"center" }}>
                <div style={{ width: "80%", textAlign: "left" }}>
                    <h1 className='protest-guerrilla-regular' style={{ color: "#FFF8E8", fontSize: 30, }}>Key features: </h1><br />
                    <p className='poppins-medium' style={{ color: "#FFF8E8", fontSize: 20, }}>
                        <ul>
                            <li>‣ Durable & High-Quality Print: Made with premium materials for long-lasting vibrancy and detail.</li>
                            <li>‣ Scratch-Resistant Glossy Finish: Bold colors with a sleek, professional appearance.</li>
                            <li>‣ Versatile Display Options: Perfect for framing, pinning, or hanging on walls.</li>
                        </ul>
                    </p>
                    <br /><br />
                    <h1 className='protest-guerrilla-regular' style={{ color: "#FFF8E8", fontSize: 30, }}>Size & Dimensions: </h1><br />
                    <p className='poppins-medium' style={{ color: "#FFF8E8", fontSize: 20, }}>
                        <ul>
                            <li>‣ A4 (8.3" x 11.7")</li>

                        </ul>
                    </p>
                    <br /><br />
                    <h1 className='protest-guerrilla-regular' style={{ color: "#FFF8E8", fontSize: 30, }}>Materials: </h1><br />
                    <p className='poppins-medium' style={{ color: "#FFF8E8", fontSize: 20, }}>
                        <ul>
                            <li>‣ Premium Paper: High-quality print with a smooth finish for a stunning display.</li>
                            <li>‣ Fade-Resistant Ink: UV-protected to maintain vibrant colors even in direct sunlight.</li>

                        </ul>
                    </p>

                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", }}>
                    <img className='block' src={pw2} style={{ height: window.screen.width>1300?"60vh":"300px",marginTop: window.screen.width>1300?0:"50px", objectFit:"contain"}} />
                </div>


            </div>
            <div className='productfooter' style={{ display: "flex",  backgroundColor: "#FFF8E8", width: "100vw", minHeight: "100vh", padding: window.screen.width>1300?100:0, paddingLeft: 0,paddingTop:20,paddingBottom:20 ,justifyContent:"center",alignItems:"center"}}>
                <div style={{ display: "flex", width: "80%",justifyContent:"center",alignItems:"center" }}>
                    <img className='block' src={pw1} style={{ height: window.screen.width>1300?"80vh":"350px",objectFit:"contain", }} />
                </div>
                <div style={{ width: "100%", textAlign: "left" ,marginTop: window.screen.width>1300?100:0,paddingLeft:window.screen.width>1300?0:30,marginLeft: 30,}}>
                    <h1 className='protest-guerrilla-regular' style={{ color: "black", fontSize: 30, }}>Usage Ideas: </h1><br />
                    <p className='poppins-medium' style={{ color: "black", fontSize: 20, }}>
                        <ul>
                            <li>‣ Home Decor</li>
                            <li>‣ Office Spaces</li>
                            <li>‣ Event Signage</li>
                            <li>‣ Custom Gifts</li>


                        </ul>
                    </p>
                    <br/><br/>
                    <h1 className='protest-guerrilla-regular' style={{ color: "black", fontSize: 30, }}>Care Instructions: </h1><br />
                    <p className='poppins-medium' style={{ color: "black", fontSize: 20, width: "90%",}}>
                        <ul>
                            <li>‣ Easy to Display: Can be attached to walls using tape, gum, or poster hangers.</li>
                            <li>‣ Handle with Care: Avoid creasing or folding for the best display quality.</li>
                           


                        </ul>
                    </p>
                </div>
                

            </div>

        </div>
    )
}
