import React,{Component} from 'react';
// import SwiperComponent from 'react-swiper-tu';


var iScroll = require('iscroll/build/iscroll-probe');
import ReactIScroll from 'react-iscroll';

import Banner from '../banner/BannerConnect.jsx';
import NewList from '../newList/NewListConnect.jsx';
import TitleTips from '../TitleTips/TitleTipsConnect.jsx';

class NewsSection extends Component{
	componentDidMount (){
		this.props.startRequireData();
	}
	render (){
		return (
			<section className="news-section">
				<ReactIScroll 
					iScroll={iScroll} 
					options={this.props.iScroll} 
					onRefresh={this.props.onRefresh}
					onScroll={this.props.onScroll}
					onScrollEnd={this.props.onScrollEnd}
				>
				<div>
					<TitleTips />
					<Banner />
					<NewList />
				</div>
				</ReactIScroll>
			</section>
		);
	}
}

module.exports = NewsSection;