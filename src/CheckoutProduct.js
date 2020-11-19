import { Button } from '@material-ui/core'
import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

const CheckoutProduct = ({id,title,rating,price,image}) => {

    const [{basket},dispatch] = useStateValue()
    const removeFromBasket =() =>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                <small>Rs </small>
                <strong>{price}</strong>
            </p>
            <Button onClick={removeFromBasket}>Remove from Basket</Button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
