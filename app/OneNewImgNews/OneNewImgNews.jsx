import React from 'react';

const OneNewImgNews = React.createClass({
	render : function(){
		return (
			<div className="n-aticle clearfix" onTouchTap={this.props.showContent}>
				<div className="fr n-side">
					<h2>{this.props.data.shortTitle}</h2>
					<p className ="n-source">
						<span>{this.props.data.sourceName}</span>
						<span>{this.props.data.dateCnStr}</span>
					</p>
				</div>
				<div className="fl imgcon-one">
					<img src={this.props.data.imgSrc[0]} />
				</div>
			</div>
		);
	}
});

module.exports = OneNewImgNews;