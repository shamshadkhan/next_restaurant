import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {connect} from "react-redux";
import MainLayout from '../components/mainLayout';
import Slider from '../components/slider';
import Service from '../components/service';
import Testimonial from '../components/testimonial';
import EventWrapper from '../components/eventWrapper';
import data from '../services/data.json';
import Loader from 'react-loader-spinner';
import {fetchCuisine,fetchService,fetchSlider,fetchEvent,fetchTestimonial} from "../redux/actions/index";

class Index extends React.Component {

	static async getInitialProps(props) {
		const { store, isServer } = props.ctx
		  	store.dispatch(fetchService())
		  	store.dispatch(fetchSlider())
		  	store.dispatch(fetchEvent())
		  	store.dispatch(fetchTestimonial())
		return { isServer }
	}

	constructor(props) {
		super(props);
	}

	render(){
		const { sliderInfo,serviceInfo,eventInfo,testimonialInfo } = this.props;
		return(
				<MainLayout>
					<article id="content">
						{
							sliderInfo && sliderInfo.length > data.constants.numbers.zero ? (
									<Slider items={sliderInfo}/>
								) : (
									<Loader
								         type="Oval"
								         color="#00BFFF"
								         height={100}
								         width={100}
								         className="spin-loader"
								      />
								)
						}
						{
							serviceInfo && serviceInfo.length > data.constants.numbers.zero ? (
									<Service services={serviceInfo}/>
								) : ""
						}
					</article>
					<div className="main-container">
						<div className="main">
							<article id="content2">
								<div className="wrapper">
									<section className="col1 pad_left1">
										<h2>{data.constants.event_title}</h2>
										{
											eventInfo && eventInfo.length > data.constants.numbers.zero ? (
													<EventWrapper events={eventInfo}/>
												) : ""
										}
									</section>
									<section className="col2 pad_left1">
										<h2>{data.constants.testimonial_title}</h2>
										{
											testimonialInfo && testimonialInfo.length > data.constants.numbers.zero ? (
													<Testimonial testimonials={testimonialInfo}/>
												) : ""
										}
									</section>
								</div>
							</article>
						</div>
					</div>
				</MainLayout>
			);

	}
}

const mapStateToProps = state => ({
  sliderInfo: state.sliderInfo,
  serviceInfo: state.serviceInfo,
  eventInfo: state.eventInfo,
  testimonialInfo: state.testimonialInfo,
});

export default connect(mapStateToProps)(Index);