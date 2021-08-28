import React, { Component } from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';

class App extends Component {
    constructor() {
      super();
      this.state = {
          products : [],
          loading : true,
      }
  }

  componentDidMount () {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //       console.log(snapshot);

    //       snapshot.docs.map((doc) => {
    //         console.log(doc.data());
    //       })

    //       // first take a product
    //       const products = snapshot.docs.map((doc) => {
    //         const data = doc.data();

    //         data['id'] = doc.id;

    //         return data;
    //       })

    //       this.setState ({
    //         products: products,
    //         loading : false
    //       })
    //   } )


    //updating the data without refreshing while changing in firebase by using event Listener- it will happen automatically

    firebase
    .firestore()
    .collection('products')
    // .where('price', '>=', 999)
    // .where('price', '<', 999)
    // .orderBy('price', 'desc')
    .onSnapshot((snapshot) => {
      console.log(snapshot);

      snapshot.docs.map((doc) => {
        console.log(doc.data());
      })

      // first take a product
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();

        data['id'] = doc.id;

        return data;
      })

      this.setState ({
        products: products,
        loading : false
      })
  })
    

  }

  handleIncreaseQuantity = (product) => {
      console.log("hey please inc the qty of product", product);
      const {products} = this.state;
      const index = products.indexOf(product);

      // products[index].qty += 1;

      // this.setState({
      //     // products : products
      //     products  // short form 
      // })

      const docRef = firebase
      .firestore()
      .collection('products').doc(products[index].id);

      console.log("choose me",docRef);

      docRef
      .update({
        qty : products[index].qty + 1
      })
      .then(() => {
        console.log("updated Successfully");
      })
      .catch((error) => {
        console.log("Error : ", error);
      })

  }

  handleDecreaseQuantity = (product) => {
      console.log("Hey Please decrease the qty of product");
      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].qty === 0){
          return;
      }

      // products[index].qty -=1;

      // this.setState({
      //     // products : products
      //     products  // short form 
      // })

      // fetch the docRef
      const docRef = firebase.firestore().collection('products').doc(products[index].id);

      // update the docRef
      docRef
      .update({
        qty : products[index].qty - 1
      })
      .then(() => {
        console.log("updated Successfully");
      })
      .catch((error) => {
        console.log("Error : ", error);
      })
      
  }

  handleDeleteProduct = (id) =>{
    console.log("Hey please delete the selected product");
    const {products} = this.state;

    // const items = products.filter((item) => item.id !== id)

    // console.log(items);

    // this.setState({
    //     products : items
    // })

    const docRef = firebase.firestore().collection('products').doc(id);

    docRef
    .delete()
    .then(() => {
      console.log("deleted Successfully");
    })
    .catch((error) => {
      console.log("Error : ", error);
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

  addProduct = () => {
    firebase
    .firestore()
    .collection('products')
    .add({
      title : 'Earphones',
      price : 199,
      qty : 2,
      img : ''
    })
    .then((docRef) => {
      console.log("Product is Added", docRef);
    })
    .catch((error) => {
      console.log("Error : ", error);
    })
  }

  render(){

    const { products, loading } = this.state;

    return (
      <div className="App">
        <header className="App-header">
        <Navbar count={this.getCountCart()}/>
        {/* <button onClick={this.addProduct} style={{ fontSize: 20, padding: 20 }}>Add a product</button> */}
          <Cart
          products = {products}
          increaseQuantity = {this.handleIncreaseQuantity}
          decreaseQuantity = {this.handleDecreaseQuantity}
          deleteItems = {this.handleDeleteProduct}/>

          {loading && <h1>Loading Product.....</h1>}

          <h1 style={{ fontSize: 20, padding: 20}}> Total Price : {this.getTotalPrice()}</h1>
        </header>
      </div>
    );

  }


}

export default App;
