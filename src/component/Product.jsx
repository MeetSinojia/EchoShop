import React from 'react'
import './Product.css';
import { useStateValue } from "../StateProvider";
import { useState, useEffect } from 'react';
import axios from './axios';

function Product({ id, title, price, image, rating, sellerLocation }) {

    const [location, setLocation] = useState(null);
    const [deliveryTime, setDeliveryTime] = useState(null);
    const [buyerLocation, setbuyerLocation] = useState(null); // State to store the buyer's city
    const [{ basket }, dispatch] = useStateValue();
    useEffect(() => {
        // Assuming you have sellerLocation and buyerLocation variables
        getLocation();
    }, []);

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

    const checkDeliveryTime = async (sellerLocation, buyerLocation) => {
        getLocation();
        console.log(buyerLocation);
        try {
            const response = await axios.get(`/estimatedDeliveryTime`, {
                params: { sellerLocation, buyerLocation }
            });

            const { estimatedDeliveryTime } = response.data;
            setDeliveryTime(estimatedDeliveryTime);
            console.log(estimatedDeliveryTime);
        } catch (error) {
            // Handle error if necessary
            console.error(error);
        }
    };


    const getLocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;

                    try {
                        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
                        const data = await response.json();
                        const city = data.locality;
                        setLocation({ latitude, longitude, city });
                        setbuyerLocation(city); // Update the buyer's city state variable
                    } catch (error) {
                        console.error('Error getting location data:', error);
                    }
                },
                (error) => {
                    console.error('Error getting location:', error.message);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
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
            <button onClick={() => checkDeliveryTime(sellerLocation, buyerLocation)}>Check Delivery Time</button>
            {location && (
                <div>
                    <h2>Your Location:</h2>
                    <p>City: {location.city}</p>
                </div>
            )}
        </div>
    );
}

export default Product
