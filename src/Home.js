import React from "react";
import './Home.css';
import banner from '../src/images/banner.jpg'
import Product from "./Product";
import lean from '../src/images/products/lean.webp'
import bose from '../src/images/products/bose.jpg'
import slipper from '../src/images/products/slipper.jfif'
import dog from '../src/images/products/dog.webp'
import screen from '../src/images/products/screen.webp'
import fridge from '../src/images/products/fridge.webp'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src={banner}
            />

            <div className="home__row">
                <Product title='The Lean Startup: How Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses' 
                price={29.99} 
                image={lean} rating={5}
                />

            <Product 
                title='Bose SoundLink Micro,
                       Portable Outdoor Speaker, 
                       (Wireless Bluetooth Connectivity), Black' 
                price={329.99} 
                image={bose} rating={5}
                />
            </div>

            <div className="home__row">
                <Product title='Warm Cotton Knit Memory Foam Slippers Soft Yarn House Slippers with Anti Slip Sole' 
                price={39.99} 
                image={slipper} rating={4}
                />

            <Product title='Rabbitgoo Tactical Dog Harness for Large Dogs' 
                price={59.99} 
                image={dog} rating={5}
                />

            <Product title='RS5300T SBS with Large Capacity, 27.4 cu.ft' 
                price={1999.99} 
                image={fridge} rating={5}
                />    
            </div>

            <div className="home__row">
                <Product title='49" Premium Curved Monitor with 32:9 Super Ultra-wide screen' 
                price={4999.99} 
                image={screen} rating={5}
                />
            </div>

            </div>
        </div>
    )
}

export default Home