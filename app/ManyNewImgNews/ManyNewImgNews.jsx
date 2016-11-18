import React from 'react';

const ManyNewImgNews = React.createClass({
	render : function(){
		var img = [];
		return (
			<div className="n-aticle" onTouchTap={this.props.showContent}>
				<h2>{this.props.data.shortTitle}</h2>
				<ul className="imgcon">
					<li><img src={this.props.data.imgSrc[0]} /></li>
					<li><img src={this.props.data.imgSrc[1]} /></li>
					<li><img src={this.props.data.imgSrc[2]} /></li>
				</ul>
				<p className="n-source">
					<span>{this.props.data.sourceName}</span>
					<span>{this.props.data.dateCnStr}</span>
				</p>
			</div>
		);
	}
});

module.exports = ManyNewImgNews;