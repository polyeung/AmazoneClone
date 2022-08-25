import React from 'react';
import './Product.css';
import m4_img from './m4.jpg';
import { useStateValue } from "./StateProvider";
function Product({id,tittle,image,price,rating}) {
  const [state , dispatch] = useStateValue();

  const addToBasket = () =>{
    //dispatch the item to data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id: id,
        tittle: tittle,
        image: image,
        price: price,
        rating: rating,
      },
    });
  }

  return (
    <div className = "product">
        <div className = "product__info">
            <p>{tittle}</p>

            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className = "product__rating">
                {Array(rating)
                .fill()
                .map((_, i) => (<p>🌟</p>))}
            </div>    
        </div>

        <img src = {image} alt = "m4_img" 
        className = "product_img"></img>

        <button onClick = {addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
