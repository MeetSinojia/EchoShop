import React from "react";
import "./Home.css";
import { colors } from "@mui/material";
import banner from '../assets/home-banner.jpg'
import Product from "./Product";
import product_1 from '../assets/product-1.jpg'
import product_2 from '../assets/product-2.jpg'
import product_3 from '../assets/product-3.jpg'
import product_4 from '../assets/product-4.jpg'

function Home() {

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={banner}
          alt=""
        />

        <div className="home-row">
          <Product
            id={1}
            title='PiBOX India, HDMI to VGA with Audio and power, Gold-Plated Male to Female VGA for Compute'
            price={30}
            image={product_1}
            rating={5}
          />
          <Product
            id={2}
            title='PiBOX India, HDMI to VGA with Audio and power, Gold-Plated Male to Female VGA for Compute'
            price={30}
            image={product_2}
            rating={3}
          />
        </div>
        <div className="home-row">
          <Product
            id={3}
            title='PiBOX India, HDMI to VGA with Audio and power, Gold-Plated Male to Female VGA for Compute'
            price={30}
            image={product_3}
            rating={2}
          />
          <Product
            id={4}
            title='PiBOX India, HDMI to VGA with Audio and power, Gold-Plated Male to Female VGA for Compute'
            price={30}
            image={product_4}
            rating={5}
          />
          <Product
            id={5}
            title='PiBOX India, HDMI to VGA with Audio and power, Gold-Plated Male to Female VGA for Compute'
            price={30}
            image={product_1}
            rating={4}
          />
        </div>
        <div className="home-row">
          <Product
            id={6}
            title='PiBOX India, HDMI to VGA with Audio and power, Gold-Plated Male to Female VGA for Compute'
            price={30}
            image={product_2}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;