import {connect} from 'react-redux'; 

const Banner = require('./Banner');


const BannerConnect = connect(
function(state,props){
	var data = state.newsListData;
	return {
		list : state.bannerData
	}
},function(dispatch,props){
	return {
		swiperOption : {
			direction : "horizontal",
			preloadImages : false,
			observer : true,
			autoplay : 1200
		},
		showContent : function(id){
			dispatch({type:"showContent",id:id,success : (data)=>dispatch({type:"createNewsContent",data:data})})
		}
	}
})(Banner);

module.exports = BannerConnect;