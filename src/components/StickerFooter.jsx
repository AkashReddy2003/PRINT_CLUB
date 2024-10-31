import React from 'react'
import Cup from "../assets/img/cupsticker.webp"
import Pc from "../assets/img/lapsticker.webp"
import Book from "../assets/img/booksticker.webp"
export default function StickerFooter() {
    return (
        <div style={{ width: "100vw", minHeight: "100vh" }}>
            <div style={{ display: "flex", flexDirection: "row", backgroundColor: "black", width: "100vw", minHeight: "100vh", padding: 100, paddingBottom: 0 }}>
                <div style={{ width: "100%", textAlign: "left" }}>
                    <h1 className='protest-guerrilla-regular' style={{ color: "#FFF8E8", fontSize: 30, }}>Key features: </h1><br />
                    <p className='poppins-medium' style={{ color: "#FFF8E8", fontSize: 20, }}>
                        <ul>
                            <li>‣ Weatherproof, waterproof, and scratch-resistant.</li>
                            <li>‣ Vibrant colors with a glossy finish.</li>
                            <li>‣ Suitable for all surfaces: laptops, phones, water bottles.</li>
                        </ul>
                    </p>
                    <br /><br />
                    <h1 className='protest-guerrilla-regular' style={{ color: "#FFF8E8", fontSize: 30, }}>Size & Dimensions: </h1><br />
                    <p className='poppins-medium' style={{ color: "#FFF8E8", fontSize: 20, }}>
                        <ul>
                            <li>‣ Small 3"x3"</li>

                        </ul>
                    </p>
                    <br /><br />
                    <h1 className='protest-guerrilla-regular' style={{ color: "#FFF8E8", fontSize: 30, }}>Materials: </h1><br />
                    <p className='poppins-medium' style={{ color: "#FFF8E8", fontSize: 20, }}>
                        <ul>
                            <li>‣ Premium, waterproof vinyl.</li>
                            <li>‣ UV-resistant to prevent fading.</li>

                        </ul>
                    </p>

                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", }}>
                    <img className='block' src={Cup} style={{ height: "60vh", }} />
                </div>


            </div>
            <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#FFF8E8", width: "100vw", minHeight: "100vh", padding: 100, paddingLeft: 0,paddingTop:20,paddingBottom:20 }}>
                <div style={{ display: "flex", width: "100%", }}>
                    <img className='block' src={Pc} style={{ height: "100vh", }} />
                </div>
                <div style={{ width: "100%", textAlign: "left" ,marginTop: 100,}}>
                    <h1 className='protest-guerrilla-regular' style={{ color: "black", fontSize: 30, }}>Usage Ideas: </h1><br />
                    <p className='poppins-medium' style={{ color: "black", fontSize: 20, }}>
                        <ul>
                            <li>‣ Laptops</li>
                            <li>‣ Water Bottles</li>
                            <li>‣ Notebooks</li>
                            <li>‣ Car Windows</li>


                        </ul>
                    </p>
                    <br/><br/>
                    <h1 className='protest-guerrilla-regular' style={{ color: "black", fontSize: 30, }}>Care Instructions: </h1><br />
                    <p className='poppins-medium' style={{ color: "black", fontSize: 20, width: "90%",}}>
                        <ul>
                            <li>‣ Clean surface before applying for best results.</li>
                            <li>‣ Stickers can be repositioned and removed without leaving residue.</li>
                           


                        </ul>
                    </p>
                </div>
                <div style={{ display: "flex", width: "100%", }}>
                    <img className='block' src={Book} style={{ height: "100vh", }} />
                </div>

            </div>

        </div>
    )
}
