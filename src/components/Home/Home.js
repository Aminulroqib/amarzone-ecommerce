import React from 'react';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
               <img className="home-image" src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3740_.jpg" alt="" />
            </div>
            <div className="home-row">
                <Product
                id="1234" 
                tittle="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                price={29.99}
                image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
                rating={5}
                />
                 <Product
                id="1234" 
                tittle='Acer Predator Helios 300 PH315-54-760S Gaming Laptop | Intel i7-11800H | NVIDIA GeForce RTX 3060'
                price={1229.99}
                image='https://m.media-amazon.com/images/I/719Hcr4vHPS._AC_UL480_FMwebp_QL65_.jpg'
                rating={5}
                />
               
            </div>
            <div className="home-row">
            <Product
                id="1234" 
                tittle='Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light'
                price={229.99}
                image='https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UL480_FMwebp_QL65_.jpg'
                rating={4}
                />
                  <Product
                id="1234" 
                tittle='Google Nest Learning Thermostat - Programmable Smart Thermostat for Home - 3rd Generation Nest Thermostat - Works with Alexa - Stainless Steel'
                price={230.99}
                image='https://images-na.ssl-images-amazon.com/images/I/31xvozI2-8L._AC_SX368_.jpg'
                rating={3}
                />
                  <Product
                id="1234" 
                tittle="Gildan Men's Fleece Zip Hooded Sweatshirt, Style G18600"
                price={19.99}
                image='https://m.media-amazon.com/images/I/619BuzmiXAS._AC_UL480_FMwebp_QL65_.jpg'
                rating={5}
                />
            </div>
            <div className="home-row">
            <Product
                id="1234" 
                tittle="SAMSUNG 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED"
                price={699.99}
                image='https://m.media-amazon.com/images/I/71cWNfXecfL._AC_SL1500_.jpg'
                rating={5}
                />
            </div>
           
        </div>
    );
};

export default Home;