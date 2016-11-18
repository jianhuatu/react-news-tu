import {connect} from 'react-redux'; 

const NewsContentSection = require('./NewsContentSection');

const objectAssign = require('object-assign');

var padStart = function(number){
	return number < 10 ? "0"+number : number;
}

const NewsContentSectionConnect = connect(
function(state,props){
	if(state.contentState=="hide")return state;
	var timeStr = state.newsContent.timeStr;
	var dateObj = new Date(timeStr);

	var newState = objectAssign({},state);
	newState.newsContent.timeStr = ([[padStart(dateObj.getFullYear()),padStart(dateObj.getMonth()+1),padStart(dateObj.getDate())].join("-"),[padStart(dateObj.getHours()),padStart(dateObj.getMinutes()),padStart(dateObj.getSeconds())].join(":")]).join(" ")
	return state;
},function(dispatch,props){
	return {
		swiperOption : {
			onInit : function(swiper){
				dispatch({type:"saveNewsContentSwiper",swiper:swiper})
			},
		},
		iScroll : {
			mouseWheel: true,
			scrollbars: true
		},
		onRefresh : function(swiper){
			dispatch({type:"saveNewsContentSwiper",swiper:swiper})
		},
		updateContentSwiperComponent : function(){
			dispatch({type:"updateContentSwiperComponent"})
		},
		hideContent : function(){
			dispatch({type:"hideContent"});
		}
	}
})(NewsContentSection);

module.exports = NewsContentSectionConnect;