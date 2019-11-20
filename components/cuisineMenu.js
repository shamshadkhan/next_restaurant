import '../scss/cuisine.scss';
import data from '../services/data.json';
import React, { Component } from 'react';
import { addToCart } from '../redux/actions/index';
import { connect } from 'react-redux';

class CuisineMenu extends Component {
	constructor(props){
	    super(props);
	    this.handleAddToCart = this.handleAddToCart.bind(this)
	}

	handleAddToCart(item){
		this.props.dispatch(addToCart(item));
	}

	render() {
		const cuisine = this.props
		return (
		  	<div className="cuisine-wrapper">
		  		{cuisine.cuisines.map((item,index) =>{
					return (
							<div key={index} className="wrapper pad_bot1 cols">
								<div className="menu-wrapper">
									<figure className="menu-figure">
										<img src={data.constants.site_image_url+item.image} alt=""/>
										{
											item.discount ? (
													<div className="menu-discount">{item.discount_amount}% off Sale</div>
												) : ""
										}
									</figure>
									<div className="menu-description">
										<p>{item.title}</p>
										{
											item.discount ? (
													<p className="menu-discount-price"><span>{data.constants.price}<strike>${item.price}</strike></span><span>${(item.price  - ((item.price * item.discount_amount)/100))}</span></p>
												) : (
													<p>{data.constants.price}${item.price}</p>
												)
										}									
									</div>
									<div className="menu-overlay"><p onClick={()=>{this.handleAddToCart(item)}}>Add to Cart</p></div>
								</div>
							</div>
						)
				})}
			</div>  		
	  	)
	}
}

const mapStateToProps = state => ({
  	cartItems: state.cartItems,
});
export default connect(mapStateToProps)(CuisineMenu)
