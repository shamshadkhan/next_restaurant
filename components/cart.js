import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import data from '../services/data.json';
import { removeFromCart,addQuantityToCart,subtractQuantityFromCart,emptyCart } from '../redux/actions/index'
import {clearState} from '../localStorage';
import '../scss/cart.scss';

class Cart extends Component{

    handleRemove(id){
        this.props.dispatch(removeFromCart(id));
    }

    handleAddQuantity(item){
        this.props.dispatch(addQuantityToCart(item));
    }
    
    handleSubtractQuantity(item){
        this.props.dispatch(subtractQuantityFromCart(item));
    }

    handleCartCheckout(){
        clearState();
        this.props.dispatch(emptyCart());
    }

    render(){
        return (
            <div id="cart">
                <a className="cart_dropdown" href="#"><img src="images/icons/cart_icon.png" alt=""/></a>
                <b className="cart_content_arrow"></b>
                <div className="cart_content">
                    <ul>
                    {
                        this.props.cartItems.length ?
                            (  
                                this.props.cartItems.map((item,index)=>{
                                    return(
                                        <li key={index} className="clearfix">
                                            <div className="cart_product_name">
                                                <img src={data.constants.image_url+item.image} alt="product image"/>
                                                <span>
                                                    <strong><a href="#">{item.title}</a></strong><br></br>
                                                    Discount Percent: {item.discount_amount}<br></br>
                                                    Price: {item.price}<br></br>
                                                </span>
                                            </div>
                                            <div className="cart_product_price">
                                                <span>
                                                    <strong>{item.quantity}x - ${item.discount_price}</strong><br></br>
                                                    <span className="remove_item" onClick={()=>{this.handleRemove(item.id)}}><img src={data.constants.image_url+"delete.png"} alt="delete image"/></span>
                                                    <span className="decrease_item" onClick={()=>{this.handleSubtractQuantity(item)}}><img src={data.constants.image_url+"minus.png"} alt="minus image"/></span>
                                                    <span className="increase_item" onClick={()=>{this.handleAddQuantity(item)}}><img src={data.constants.image_url+"plus.png"} alt="plus image"/></span>
                                                </span>
                                            </div>
                                            <div className="clear"></div>
                                        </li>
                                        )
                                })
                            ):
                             (
                                <p>Nothing.</p>
                             )
                    }
                    </ul>
                    <div className="dropdown_cart_info clearfix">
                        <div className="cart_buttons">
                            <span className="red_btn" onClick={()=>{this.handleCartCheckout()}}>Checkout</span>
                        </div>

                        <div className="cart_total_price">
                            <span>
                                <strong>TOTAL : ${this.props.total}</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

const mapStateToProps = (state)=>{
    return{
        cartItems: state.cartItems,
        quantity: state.quantity,
        total: state.total,
    }
}

export default connect(mapStateToProps)(Cart)