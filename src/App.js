import React, { Component } from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends Component {
    constructor() {
      super();
      this.state = {
          products : [
              {
                  title : 'Mobile',
                  price: 999,
                  qty : 1,
                  img: 'https://images.unsplash.com/photo-1452993912631-49cff82efb5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=974&q=80',
                  id: 1
            },
                  {
                      title : 'Watch',
                      price: 99,
                      qty : 1,
                      img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1059&q=80',
                      id: 2
              },
              {
                  title : 'Laptop',
                  price: 3999,
                  qty : 1,
                  img: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1119&q=80',
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

  getCountCart = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getTotalPrice = () => {
    const { products } = this.state;

    let totalPrice = 0;
    products.map((product) => {
       totalPrice = totalPrice + product.qty * product.price;
    })

    return totalPrice;
  }

  render(){

    const { products } = this.state;

    return (
      <div className="App">
        <header className="App-header">
        <Navbar count={this.getCountCart()}/>
          <Cart
          products = {products}
          increaseQuantity = {this.handleIncreaseQuantity}
          decreaseQuantity = {this.handleDecreaseQuantity}
          deleteItems = {this.handleDeleteProduct}/>

          <h1 style={{ fontSize: 20, padding: 20}}> Total Price : {this.getTotalPrice()}</h1>
        </header>
      </div>
    );

  }


}

export default App;
