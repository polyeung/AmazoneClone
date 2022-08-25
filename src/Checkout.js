import React from 'react'
import "./Checkout.css";
import add_img from "./checkout_add.jpg";
import Subtotal from "./Subtotal"
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";


function Checkout() {
    const [{basket},dispatch] = useStateValue();
  return (
    <div className = "checkout">
        <div className = "checkout__left">
            <img className = 'checkout__add' src = {add_img} 
            alt = "checkout_add_img"/>

            <div>
                <h2 className = "checkout__title">
                    Your Shopping Basket
                </h2>
                {basket.map(item => (
                    <CheckoutProduct 
                    id = {item.id}
                    tittle = {item.tittle}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                    />
                    
                ))}
                {/*CheckoutProduct*/}
                {/*BasketItem*/}
                {/*BasketItem*/}
                {/*BasketItem*/}
            </div>

        </div>

        <div className = "checkout__right">
            <Subtotal />
            
        </div>
      
    </div>
  )
}

export default Checkout
