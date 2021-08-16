import React, { Component } from 'react';
import CartItem from './CartItem';

class Cart extends Component{
    constructor() {
        super();
        this.state = {
            products : [
                {
                    title : 'Mobile',
                    price: 999,
                    qty : 1,
                    img: '',
                    id: 1
               },
                    {
                        title : 'Watch',
                        price: 99,
                        qty : 1,
                        img: '',
                        id: 2
                },
                {
                    title : 'Laptop',
                    price: 3999,
                    qty : 1,
                    img: '',
                    id: 3
            }
            ]
        }
    }

    render(){
        const { products } = this.state
        return(
            <div className="cart">
                
                {products.map((product) => {
                    return <CartItem product = {product} 
                    key={product.id}
                    />
                })}

            </div>
        )
    }
}

export default Cart;