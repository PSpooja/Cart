import React, { Component } from 'react';

class CartItem extends Component {


    render() {
        const { title, price, qty} = this.props.product;
         console.log("this.props", this.props);
   
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs : {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="action-icons">
                        {/* {Buttons} */}
                        <img src="https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
                         alt="increase" className="action-icons"
                         onClick={() => this.props.increaseQuantity(this.props.product)}
                         />
                        <img src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" 
                        alt="decrease" className="action-icons"
                        onClick ={this.decreaseQuantity}
                        />
                        <img src="https://as2.ftcdn.net/v2/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" alt="delete" className="action-icons"/>
                    </div>
                </div>
            </div>
        )
    }
}

// style through style object
const styles = {
       image:{
           height : 110,
           width : 110,
           borderRadius: 20,
           backgroundColor: '#777',
       } 
}

export default CartItem
