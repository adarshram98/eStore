import React from 'react'
import  './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
           <img className="home__image" src="https://images.unsplash.com/photo-1577538928305-3807c3993047?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
           {/* <img src="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="home__image"/> */}


           {/* Product props - id, title , price, rating, image */}
           <div className="home__row">
           <Product
           id="2312321"
           title="shoe"
           price={999}
           rating={4}
           image="https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
           >
               
           </Product>
           <Product
           id="2312321"
           title="shoe"
           price={999}
           rating={4}
           image="https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
           >
               
           </Product>
           
           </div>
           <div className="home__row">
           <Product
           id="2312321"
           title="shoe"
           price={999}
           rating={4}
           image="https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
           >
               
           </Product>
           <Product
           id="2312321"
           title="shoe"
           price={999}
           rating={4}
           image="https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
           >
               
           </Product>
           <Product
           id="2312321"
           title="shoe"
           price={999}
           rating={4}
           image="https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
           >
               
           </Product>
           
           </div>
           <div className="home__row">
           <Product
           id="2312321"
           title="shoe"
           price={999}
           rating={4}
           image="https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
           >
               
           </Product>
           
           
           </div>

           
        </div>
    )
    
}

export default Home
