import {connect} from 'react-redux'; 

const NewList = require('./NewList');

const NewListConnect = connect(
function(state,props){
	return {
		list : state.newsListData,
		swiper : state.swiper
	}
},function(dispatch,props){
	return {
		updateSwiperComponent : function(){
			dispatch({type:"updateSwiperComponent"})
		}
	}
})(NewList);

module.exports = NewListConnect;