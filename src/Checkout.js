import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket},dispatch] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
            {basket?.length ===0 ?(
                    <h2>
                        No Products In your basket
                    </h2>
                ):(
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket </h2>
                        { basket?.map( 
                                (item) => (
                                    
                                    <CheckoutProduct
                                    id = {item.id}
                                    title = {item.title}
                                    price = {item.price}
                                    rating = {item.rating}
                                    image = {item.image}
                                     ></CheckoutProduct>
                        )
                            )
                        }
                    </div>
                )}
            
            </div>
            {basket?.length>=0 &&(
                <div className="checkout__right">
                    <Subtotal></Subtotal>
                </div>
            )}
            

        </div>
    )
}

export default Checkout
