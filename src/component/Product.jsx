import React from 'react'
import './Product.css';
import { useStateValue } from "../StateProvider";

function Product({ id, title, price, image, rating }) {


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

    return (
        <div className='product'>
            <div className='product-info'>
                <p>{title}</p>
                <p className='product-prize'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='product-rating'>
                    {"🌟".repeat(rating)}
                </div>
            </div>

            <img src={image} />

            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    )
}

export default Product
