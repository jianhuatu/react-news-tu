import React,{Component} from 'react';

var NoNewImgNewsConnect = require("../NoNewImgNews/NoNewImgNewsConnect");
var OneNewImgNewsConnect = require("../OneNewImgNews/OneNewImgNewsConnect");
var ManyNewImgNewsConnect = require("../ManyNewImgNews/ManyNewImgNewsConnect");

class NewList extends Component{
	componentDidUpdate (){
		this.props.updateSwiperComponent();
	}
	render (){
		var list = [];
		for(var i=0,ilen=this.props.list.length;i<ilen;i++){
			var thisData = this.props.list[i];
			if(thisData.imgNum==0){
				list.push(<NoNewImgNewsConnect key={i} data={thisData}/>)
			}else if(thisData.imgNum==1){
				list.push(<OneNewImgNewsConnect key={i} data={thisData}/>)
			}else if(thisData.imgNum>=3){
				list.push(<ManyNewImgNewsConnect key={i} data={thisData}/>)
			}
		}
		return (
			<section className="newsWrap">
				{list}
			</section>
		);
	}
}

module.exports = NewList;