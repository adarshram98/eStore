import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import NavBar from './Navbar.js'

function Checkout() {
    const [{basket},dispatch] = useStateValue()
    return (
        <div className="checkout">
            
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
    )
}

export default Checkout
