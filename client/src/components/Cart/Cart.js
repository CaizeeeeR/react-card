import React from 'react';
import "../../css/Cart/Cart.css"

function Cart(props) {
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
    </div>
  )
}

export default Cart