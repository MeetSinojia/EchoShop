import React from 'react'
import './Checkout.css'
import ad_image from '../assets/checkout-ad.jpeg'
import Subtotal from './Subtotal'
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";

export default function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout-left'>
                <img
                    className='checkout-ad'
                    src={ad_image}
                />
                {user && (
                    <h3>Hello, {user.email}</h3>
                )}
                <h2 className='checkout-title'>Your shopping basket</h2>

                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>

            <div className='checkout-right'>
                <Subtotal />
            </div>
        </div>
    )
}
