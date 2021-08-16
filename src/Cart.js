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

    handleIncreaseQuantity = (product) => {
        console.log("hey please inc the qty of product", product);
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            // products : products
            products  // short form 
        })
    }

    handleDecreaseQuantity = (product) => {
        console.log("Hey Please decrease the qty of product");
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty === 0){
            return;
        }

        products[index].qty -=1;

        this.setState({
            // products : products
            products  // short form 
        })
    }

    handleDeleteProduct = (id) =>{
        console.log("Hey please delete the selected product");
        const {products} = this.state;

        const items = products.filter((item) => item.id !== id)

        console.log(items);

        this.setState({
            products : items
        })
    }

    render(){
        const { products } = this.state
        return(
            <div className="cart">
                
                {products.map((product) => {
                    return <CartItem product = {product} 
                    key={product.id}
                    increaseQuantity = {this.handleIncreaseQuantity}
                    decreaseQuantity = {this.handleDecreaseQuantity}
                    deleteItems = {this.handleDeleteProduct}
                    />
                })}

            </div>
        )
    }
}

export default Cart;