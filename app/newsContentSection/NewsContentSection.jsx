import React,{Component} from 'react';
import SwiperComponent from 'react-swiper-tu';

var iScroll = require('iscroll');
import ReactIScroll from 'react-iscroll';



class NewsContentSection extends Component{
	componentDidUpdate (){
		this.props.updateContentSwiperComponent();
	}
	render (){
		switch(this.props.contentState){
			case "hide" : var classVal = "newsCon-section hide";break;
			case "show" : var classVal = "newsCon-section on";break;
			default : var classVal = "newsCon-section def";
		}
		return (
			<section className={classVal}>
				<p className="back-icon" onTouchTap={this.props.hideContent}>&lt;</p>
				<ReactIScroll 
					iScroll={iScroll} 
					options={this.props.iScroll} 
				>
					<section className="newsCon">
						<h2>{this.props.newsContent.title}</h2>
						<p className="n-source">
							<a href="javascript:void(0)">{this.props.newsContent.sourceName}</a>
							<span>  {this.props.newsContent.timeStr}</span>
						</p>
						<div className="aticle-con" dangerouslySetInnerHTML={{__html:this.props.newsContent.content}}>
						</div>
					</section>
				</ReactIScroll>
			</section>
		)
	}
}

module.exports = NewsContentSection;