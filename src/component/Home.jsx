import React from "react";
import "./Home.css";
import { colors } from "@mui/material";
import banner from '../assets/imgonline-com-ua-resize-d8RjqcwYVs.jpg';
import SimpleImageSlider from "react-simple-image-slider";
import Product from "./Product";
import product_1 from '../assets/product-1.jpg';
import product_2 from '../assets/product-2.jpg';
import product_3 from '../assets/product-3.jpg';
import product_4 from '../assets/product-4.jpg';
import product_5 from '../assets/product-5.jpg';
import product_6 from '../assets/product-6.jpg';

function Home() {
  const sliderImages = [
    {
      url: 'https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1060&t=st=1690032299~exp=1690032899~hmac=971630bbaf6e4a6c28d741add99966d2ad463b2b6ec4cfddba07aa43c9a7bf82',
    },
    {
      url: 'https://img.freepik.com/free-photo/front-view-woman-with-shopping-bag-concept_23-2148674158.jpg?w=1380&t=st=1690032345~exp=1690032945~hmac=c6cae7ac20ffd32c0e6a33d7e56675da0d0f6aa342f0d85ad5d4375caf760ab7',
    },
    {
      url: 'https://img.freepik.com/free-photo/woman-holding-various-shopping-bags-copy-space_23-2148674122.jpg?w=1380&t=st=1690032364~exp=1690032964~hmac=93c82eaf99f34f5b91a249bfcf5ec8947c34ac39efd5533c8a85ad44d4ceb45a',
    },
    {
      url: 'https://img.freepik.com/free-psd/horizontal-banner-template-online-fashion-sale_23-2148585405.jpg?w=1060&t=st=1690032417~exp=1690033017~hmac=e307fd79b4d13f62cabcf4b06d2c34b989cb6a3c49f76279d16af5953e59f788',
    },
  ];

  return (
    <div className="home">
      <SimpleImageSlider
        width={1480}
        height={500}
        images={sliderImages}
        showNavs={true}
      />

      <div className="home__container">
        <div className="home-row">
          <Product
            id={1}
            title='Rockland Fashion Softside Upright Luggage Set, Expandable'
            price={1000}
            image={product_1}
            rating={5}
            sellerLocation="Delhi"
          />
          <Product
            id={2}
            title='SAMSUNG Galaxy Watch 4 40mm Smartwatch with ECG Monitor Tracker for Health.'
            price={4000}
            image={product_2}
            rating={3}
            sellerLocation="Delhi"
          />
        </div>
        <div className="home-row">
          <Product
            id={3}
            title='Skechers Mens Afterburn Memory-Foam '
            price={800}
            image={product_3}
            rating={2}
            sellerLocation="Mumbai"
          />
          <Product
            id={4}
            title='Dott Arts LED Desk Lamp'
            price={500}
            image={product_4}
            rating={5}
            sellerLocation="Mumbai"
          />
          <Product
            id={5}
            title='Pigeon Food and Water Containers'
            price={200}
            image={product_5}
            rating={4}
            sellerLocation="Mumbai"
          />
        </div>
        <div className="home-row">
          <Product
            id={6}
            title='SHW L-Shaped Home Office Wood Corner Desk with 3 Drawers'
            price={5000}
            image={product_6}
            rating={3}
            sellerLocation="Pune"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
