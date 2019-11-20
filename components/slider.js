import '../scss/slider.scss';
import data from '../services/data.json';
import React, { Component } from 'react';

class Slider extends Component {
	constructor(props){
	    super(props);
	}
	componentDidMount(){
		const script = document.createElement("script");
		script.async = true;
		script.src = "/static/js/script.js";
		this.div.appendChild(script);
	}
	render() {
		const sliders = this.props
		return (
			<div className="slider_bg">
				<div className="slider" ref={el => (this.div = el)}>
					<ul className="items">
						{sliders.items.map(function(item, index){
		                    return (
		                    	<li key={index}>
									<img src={data.constants.site_image_url+item.image} alt=""/>
									<div className="banner">
										<strong>{item.title}</strong>
										<b>{item.subTitle}</b>
										<p>
											<span>{item.description}</span>
										</p>
									</div>
								</li>
							);
		                })}
					</ul>
				</div>
			</div>
		)
	}
}

export default Slider;