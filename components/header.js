import Link from 'next/link';
import Head from 'next/head';
import '../scss/header.scss';
import data from '../services/data.json';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Cart from '../Components/Cart';

class Header extends Component{
	constructor(){
		super();
		this.state={
			enableFlag:false
		}
		this.handleClick=this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({enableFlag: !this.state.enableFlag})
	}
    render(){
    	return (
			<div>
				<Head>
					<script type="text/javascript" src="/static/js/jquery-1.6.js" ></script>
					<script type="text/javascript" src="/static/js/tms-0.3.js"></script>
					<script type="text/javascript" src="/static/js/tms_presets.js"></script>
					<script type="text/javascript" src="/static/js/atooltip.jquery.js"></script> 
				</Head>
				{
					this.state.enableFlag? (
						<Cart/>
					):""
				}
				<header className="header">
					<h1><Link href="#"><a id="logo">Deliccio Classic European Cuisine</a></Link></h1>
					<nav>
						<ul id="top_nav">
							<li><Link href="#"><a><img src="/static/images/icon_1.gif" alt=""/></a></Link></li>
							<li><Link href="#"><a><img src="/static/images/icon_2.gif" alt=""/></a></Link></li>
							<li><Link href="#"><a><img src="/static/images/icon_3.gif" alt=""/></a></Link></li>
							<li className="end"><Link href="#"><a onClick={this.handleClick}><img src="/static/images/cart.gif" alt=""/>
								{
									this.props.quantity > data.constants.numbers.zero ? (
										<span>{this.props.quantity}</span>

										) : ""
								}
								</a></Link></li>
						</ul>
					</nav>
					<nav>
						<ul id="menu">
							{data.menu.map(function(item,index){
								return (
										<li key={index}><Link href={item.target}><a>{item.title}</a></Link></li>
									)
							})}
						</ul>
					</nav>
				</header>
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

export default connect(mapStateToProps)(Header)
