import { Button } from '@material-ui/core'
import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getSubtotal } from './reducer'

const Subtotal = () => {
    const [{basket}] = useStateValue()
    return (
        <div className="subtotal">
            {/* price */}
            <CurrencyFormat
                renderText={
                    (value) => (
                        <div>
                            <p>
                                SubTotal ({basket.length} items) 
                                <br></br>
                                <strong>{value}</strong>
                            </p>
                        </div>
                    )
                }
                decimalScale={2}
                prefix={"Rs "}
                value={getSubtotal(basket)}
                thousandSeperator={true}
                displayType={"text"}
            >

            </CurrencyFormat>
            <Button className="subtotal__button">Checkout</Button>
        </div>
    )
}

export default Subtotal
