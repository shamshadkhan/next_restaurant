import React from 'react';
import {connect} from "react-redux";
import Link from 'next/link';
import MainLayout from '../components/mainLayout';
import Service from '../components/service';
import CuisineMenu from '../components/cuisineMenu';
import data from '../services/data.json';
import Loader from 'react-loader-spinner';
import {fetchCuisine,fetchService} from "../redux/actions/index";
import Pagination from "react-js-pagination";

class Index extends React.Component {

	static async getInitialProps(props) {
		const { store, isServer } = props.ctx
		if (!store.getState().serviceInfo) {
		  	store.dispatch(fetchService())
		}
		if (!store.getState().cuisineInfo) {
		  	store.dispatch(fetchCuisine(data.constants.numbers.one))
		}
		return { isServer }
	}

  	constructor(props) {
		super(props);
		this.state = {
		  activePage: data.constants.numbers.one
		};
		this.props.dispatch(fetchCuisine(data.constants.numbers.one));
	}

	handlePageChange(page){
		this.setState({activePage: page});
		this.props.dispatch(fetchCuisine(page));
	}

	render(){
		const { serviceInfo,cuisineInfo} = this.props;
		return(
			<MainLayout>
				<article id="content">
					{
						serviceInfo && serviceInfo.length > data.constants.numbers.zero ? (
								<Service services={serviceInfo}/>
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
				</article>
				<div className="main-container">
					<div className="main">
						<article id="content2">
							<div className="wrapper">
								<section className="pad_left1">
									{
										cuisineInfo && cuisineInfo.data && cuisineInfo.data.length > data.constants.numbers.zero ? (
												<>
													<CuisineMenu cuisines={cuisineInfo.data}/>
													<Pagination
													  hideDisabled
											          activePage={this.state.activePage}
											          itemsCountPerPage={cuisineInfo.per_page}
											          totalItemsCount={cuisineInfo.total}
											          pageRangeDisplayed={5}
											          onChange={this.handlePageChange.bind(this)}
											        />
										        </>
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
	serviceInfo: state.serviceInfo,
  	cuisineInfo: state.cuisineInfo,
});

export default connect(mapStateToProps)(Index)
