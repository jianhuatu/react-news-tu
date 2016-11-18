import React from 'react';



const NoNewImgNews = React.createClass({
	render : function(){
		return (
			<div className="n-aticle" onTouchTap={this.props.showContent}>
				<h2>{this.props.data.shortTitle}</h2>
				<p className="n-source">
					<span>{this.props.data.sourceName}</span>
					<span>{this.props.data.dateCnStr}</span>
				</p>
			</div>
		);
	}
});

module.exports = NoNewImgNews;