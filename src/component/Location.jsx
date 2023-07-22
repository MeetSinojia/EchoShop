import React from 'react'
import './Product.css';
import { useStateValue } from "../StateProvider";
import { useState, useEffect } from 'react';
import axios from './axios';
import { getGeolocation } from 'geolocation-utils';
import LocationDisplay from './Location';

function Product({ id, title, price, image, rating, sellerLocation, city }) {

    const [location, setLocation] = useState(null);
    const [deliveryTime, setDeliveryTime] = useState(null); // State to store the estimated delivery time
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    const checkDeliveryTime = (sellerLocation, buyerLocation) => {
        // Call the backend API to check estimated delivery time
        axios.get('/estimatedDeliveryTime', {
            params: {
                sellerLocation,
                buyerLocation,
            },
        })
            .then((response) => {
                const { estimatedDeliveryTime } = response.data;
                setDeliveryTime(estimatedDeliveryTime);
                console.log(buyerLocation);
            })
            .catch((error) => {
                console.error('Error fetching delivery time:', error);
                setDeliveryTime('N/A');
            });
    };

    return (
        <div className='product'>
            <div className='product-info'>
                <p>{title}</p>
                <p className='product-prize'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='product-rating'>{'🌟'.repeat(rating)}</div>
                <p>Seller Location: {sellerLocation}</p>
                <p>Estimated Delivery Time: {deliveryTime || 'N/A'}</p>
            </div>

            <img src={image} alt={title} />

            <button className='add-to-basket-button' onClick={addToBasket}>
                Add to Basket
            </button>
            <LocationDisplay />

        </div>
    );
}

export default Product
