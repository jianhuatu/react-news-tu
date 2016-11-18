import {connect} from 'react-redux'; 

const ManyNewImgNews = require('./ManyNewImgNews');

const ManyNewImgNewsConnect = connect(function(state,props){
	var nowTime = new Date().getTime();
	var newsTime = Number(props.data.timeStr);

	if(nowTime-newsTime>=3*24*60*60*1000){
		props.data.dateCnStr = "三天前";
	}else if(nowTime-newsTime>=2*24*60*60*1000){
		props.data.dateCnStr = "两天前";
	}else if(nowTime-newsTime>=1*24*60*60*1000){
		props.data.dateCnStr = "昨天";
	}else{
		var hours = Math.floor((nowTime-newsTime)/(60*60*1000));
		props.data.dateCnStr = hours+"小时前";
	}

	return state;
},function(dispatch,props){
	return {
		showContent : function(){
			dispatch({type:"showContent",id:props.data._id,success : (data)=>dispatch({type:"createNewsContent",data:data})})
		}
	}
})(ManyNewImgNews);


module.exports = ManyNewImgNewsConnect;