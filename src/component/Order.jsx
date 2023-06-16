import React from 'react'
import './Order.css'
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
// import CurrencyFormat from "react-currency-format";

function Order({ order }) {

    return (

        <div div className='order' >
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {
                order.data.basket?.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        hideButton
                    />
                ))
            }
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'blue' }}>
                Order Total: ₹{(order.data.amount).toFixed(2)}
            </div>

        </div >
    )
}

export default Order