import {connect} from 'react-redux'; 

const NewsSection = require('./NewsSection');

const NewsSectionConnect = connect(
function(state,props){
	return state;
},function(dispatch,props){
	return {
		iScroll : {
			mouseWheel: true,
			probeType : 2
		},
		onRefresh : function(swiper){
			if(!swiper.nowRefresh)dispatch({type:"saveNewsSectionSwiper",swiper:swiper})
		},
		onScroll : function(swiper){
			if(swiper.y>0 && swiper.y<44){
				dispatch({type:"promptUserDownUpdateData"})
			}else if(swiper.resetSwitch===false && swiper.y>=44){
				dispatch({type:"promptUserReleaseUpdateData"})
			}else if(swiper.scrollerHeight>swiper.wrapperHeight && Math.abs(swiper.y)>(swiper.scrollerHeight*1/3)){
				dispatch({type:"appendRequrieData",success : (data) => dispatch({type:"createNewsListData",data:data})})
			}
		},
		onScrollEnd : function(swiper){
			if(swiper.checkReset && swiper.y==0){
				dispatch({type:"resetRequrieData",success : (data) => dispatch({type:"createNewsListData",data:data})})
			}
		},
		startRequireData : function(){
			dispatch({type:"startRequireData",success : (data)=>dispatch({type:"createNewsListData",data:data})})
		}
	}
})(NewsSection);

module.exports = NewsSectionConnect;