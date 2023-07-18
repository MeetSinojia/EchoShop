import React from "react";
import "./Home.css";
import { colors } from "@mui/material";
import banner from '../assets/imgonline-com-ua-resize-d8RjqcwYVs.jpg'
import Product from "./Product";
import product_1 from '../assets/product-1.jpg'
import product_2 from '../assets/product-2.jpg'
import product_3 from '../assets/product-3.jpg'
import product_4 from '../assets/product-4.jpg'
import product_5 from '../assets/product-5.jpg'
import product_6 from '../assets/product-6.jpg'

function Home() {

  return (
    <div className="home">
      <div className="home__container">
        <img id="overlay"
          className="home__image"
          src={banner}
          alt=""
        />


        <div className="home-row">
          <Product
            id={1}
            title='Rockland Fashion Softside Upright Luggage Set, Expandable'
            price={1000}
            image={product_1}
            rating={5}
          />
          <Product
            id={2}
            title='SAMSUNG Galaxy Watch 4 40mm Smartwatch with ECG Monitor Tracker for Health, Fitness, Running, Sleep Cycles, GPS Fall Detection, Bluetooth, US Version, SM-R860NZDAXAA, Pink Gold'
            price={4000}
            image={product_2}
            rating={3}
          />
        </div>
        <div className="home-row">
          <Product
            id={3}
            title='Skechers Mens Afterburn Memory-Foam Lace-up Sneaker'
            price={800}
            image={product_3}
            rating={2}
          />
          <Product
            id={4}
            title='Dott Arts LED Desk Lamp, Touch Control Desk Lamp with 3 Levels Brightness, Dimmable Office Lamp with Adjustable Arm, Foldable Table Desk Lamp for Table Bedroom Bedside Office Study, 5000K, 8W, Black'
            price={500}
            image={product_4}
            rating={5}
          />
          <Product
            id={5}
            title='Pigeon Food and Water Containers'
            price={200}
            image={product_5}
            rating={4}
          />
        </div>
        <div className="home-row">
          <Product
            id={6}
            title='SHW L-Shaped Home Office Wood Corner Desk with 3 Drawers'
            price={5000}
            image={product_6}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;