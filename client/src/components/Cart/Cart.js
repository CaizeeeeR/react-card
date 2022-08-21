import React, { useState } from 'react';
import "../../css/Cart/Cart.css"
import Checkout from '../CheckoutForm/Checkout';

function Cart(props) {

    const [showForm, setShowForm] = useState(false);

    const [value, setValue] = useState("");

    const submitOrder = (e) => {
        e.preventDefault();
        const order = {
            name : value.name,
            email: value.email
        }

        console.log(order);
    }

    const handleChange = (e) => {
        setValue((prevState) => ({...prevState, [e.target.name] : e.target.value}))
    }

  return (
    <div className='cart-wrapper'>
        <div className='cart-title'>{props.cardItems.length == 0 ? "Cart Empty" : <p>
            There Is {props.cardItems.length} in cart
            </p>}</div>
        <div className='cart-items'>
            {props.cardItems.map(item => (
                <div className='cart-item'>
                <img src={item.imageUrl} alt="" />
                <div className='cart-info'>
                    <div>
                        <p>title: {item.title}</p>
                        <p> qty : {item.qty}</p>
                        <p>price: ${item.price}</p>
                    </div>
                    <button onClick={() => props.remove(item)}>
                        Remove
                    </button>
                </div>
            </div>
            ))}
        </div>
        {
            props.cardItems.length != 0 && (
            <div className='cart-footer'>
                <div className='total'>Total : ${props.cardItems.reduce((acc, p) => {
                    return acc + p.price
                }, 0)}</div>
                <button onClick={() => setShowForm(true)}>Select Products</button>
            </div>
        )
        }

        <Checkout 
            showForm={showForm}
            submitOrder={submitOrder}
            handleChange={handleChange}
            setShowForm={setShowForm}
        />

    </div>
  )
}

export default Cart