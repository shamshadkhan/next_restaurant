import data from '../services/data.json';
import Event from './event';
import React, { Component } from 'react';

class EventWrapper extends Component {
	constructor(props){
	    super(props);
	}
	render(){
		const event = this.props;
		return(
			<div className="wrap">
			{event.events.map(function(item, index){
	            return (
	            	<div key={index} className={index == data.constants.numbers.zero ? "cols" : "cols pad_left1"}>
						<Event items={item}/>
					</div>
				);
	        })}
		</div>
		)
	}
}

export default EventWrapper;