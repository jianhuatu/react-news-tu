import React,{Component} from 'react';

class TitleTips extends Component{
	render (){
		return (
			<div className="loading">{this.props.tips}</div>
		);
	}
}

module.exports = TitleTips;