import { Button } from '@material-ui/core'
import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
const Product = ({id,title,image,price,rating}) => {
    const [{basket},dispatch] = useStateValue()
    const addToBasket = () =>{
        dispatch(
            {
                type : 'ADD_TO_BASKET',
                item:{
                    id,title,image,price,rating
                }
            }
        )
    }       
    return (

        
        <div className="product">
            <div className="product__info">

            
            <p>{title}</p>
            <p className="product__price">
                <small>Rs </small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    // Create an array fill it with empty values and loop through to print 
                    // stars
                    Array(rating).fill().map(
                        (_) => (
                            <p>⭐</p>
                        )
                    )
                }
            </div>
            </div>
            <img src={image} alt="" className="product__image"/>
            <Button onClick={addToBasket} className="product__button">
                Add to Basket
            </Button>
        </div>
    )
}

export default Product
