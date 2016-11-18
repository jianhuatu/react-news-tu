import {createStore} from 'redux';
import $ from 'jquery';

const objectAssign = require('object-assign');

var startRequireData = function(state,action){
	if(state.state!="rest")return state;
	var newState = objectAssign(state,{
		state : "wait"
	})
	$.ajax({
		url : "http://101.200.200.177:3811/newsList",
		data : {page:state.page,num:state.newsNum},
		dataType : "json",
		type : "post",
		success : function(msg){
			action.success(msg);
		}
	});
	return newState;
}

var appendRequrieData = function(state,action){
	if(state.state!=="rest")return state;
	var newData = {
		page: state.page+1
	}
	var newState = objectAssign(state,newData);

	startRequireData(newState,{
		success : (msg) => action.success(msg)
	});

	return newState;
}

var createNewsListData = function(state,action){
	if(state.state!=="wait")return state;
	var data = action.data;
	var newState = objectAssign({},state);
	if(data.code!=="0000"){
		newState.state = "error";
		newState.error = data.msg;
	}else{
		if(data.info.length<state.newsNum){
			newState.state = "over";
			newState.error = "";
		}
		if(!state.bannerData.length){
			var newsListData = [];
			var bannerData = [];
			for(var i=0,b=0,ilen=data.info.length;i<ilen;i++){
				if(b<3 && data.info[i]['imgNum']>0){
					b++;
					bannerData.push(data.info[i]);
				}else{
					newsListData.push(data.info[i]);
				}

			}
			newState.bannerData = bannerData;
			newState.newsListData = newState.newsListData.concat(newsListData);
		}else{
			newState.newsListData = newState.newsListData.concat(data.info);
		}
	}
	return newState;
}

var saveNewsSectionSwiper = function(state,action){
	action.swiper.resetSwitch = false;
	return objectAssign(state,{swiper:action.swiper});
}

var saveNewsContentSwiper = function(state,action){
	return objectAssign(state,{contentSwiper:action.swiper});
}

var updateSwiperComponent = function(state,action){
	if(state.swiper && state.swiper.refresh){
		state.swiper.nowRefresh = true;
		state.swiper.refresh();
		state.swiper.nowRefresh = false;
	}
	state.swiper.resetSwitch = false;
	if(state.state=="over")return state;
	return objectAssign(state,{
		state : "rest",
		error : ""
	});
}

var updateContentSwiperComponent = function(state,action){
	if(state.contentSwiper && state.contentSwiper.update)state.contentSwiper.update();
	return state;
}

var promptUserDownUpdateData = function(state,action){
	var newData = objectAssign({},state);
	newData.tips = "向下拉更新数据";
	return newData;
}

var promptUserReleaseUpdateData = function(state,action){
	var newData = objectAssign({},state);
	newData.tips = "松手更新数据";
	newData.swiper.checkReset = true;
	return newData;
}

var resetRequrieData = function(state,action){
	if(state.state!="rest")return state;
	var newState = objectAssign({},state);

	newState.page=1;
	newState.page.bannerData = [];
	newState.newsListData = [];
	newState.state = "rest";

	newState.swiper.resetSwitch = true;
	newState.swiper.checkReset = false;

	startRequireData(newState,{
		success : (msg) => action.success(msg)
	},"reset");

	return newState;
}

var showContent = function(state,action){
	var newState = objectAssign({},state);
	newState.contentState = "show";
	newState.newsContent = {
		title : "",
		sourceName : "",
		timeStr : "",
		content : "",
		url : ""
	}

	$.ajax({
		url : "http://101.200.200.177:3811/newsContent",
		data : {id:action.id},
		type : "post",
		dataType : "json",
		success : function(msg){
			action.success(msg);
		}
	});
	return newState;
}

var hideContent = function(state,action){
	var newState = objectAssign({},state);
	newState.contentState = "hide";
	return newState;
}

var createNewsContent = function(state,action){
	var data = action.data;
	if(data.code!=="0000"){
		newState.state = "error";
		newState.error = data.msg;
	}
	var newState = objectAssign({},state);
	newState.newsContent = {
		title : data.info.title,
		sourceName : data.info.sourceName,
		timeStr : data.info.timeStr,
		content : data.info.content,
		url : data.info.url
	}
	return newState;
}


var store = createStore(function(state,action){
	switch(action.type){
		case "startRequireData" : return startRequireData(state,action);
		case "createNewsListData" : return createNewsListData(state,action);
		case "saveNewsSectionSwiper" : return saveNewsSectionSwiper(state,action);
		case "saveNewsContentSwiper" : return saveNewsContentSwiper(state,action);
		case "updateSwiperComponent" : return updateSwiperComponent(state,action);
		case "updateContentSwiperComponent" : return updateContentSwiperComponent(state,action);
		case "promptUserDownUpdateData" : return promptUserDownUpdateData(state,action);
		case "promptUserReleaseUpdateData" : return promptUserReleaseUpdateData(state,action);
		case "appendRequrieData" : return appendRequrieData(state,action);
		case "resetRequrieData" : return resetRequrieData(state,action);
		case "showContent" : return showContent(state,action);
		case "createNewsContent" : return createNewsContent(state,action);
		case "hideContent" : return hideContent(state,action);
		default : return state;
	}
},{
	page : 1,
	newsNum : 50,
	newsListData : [],
	bannerData : [],
	state : "rest",
	error : "",
	swiper : {resetSwitch : false,checkReset : false},
	contentSwiper : void 0,
	tips : "向下拉更新数据",
	contentState : "def",
	newsContent : {
		title : "",
		sourceName : "",
		timeStr : "",
		content : "",
		url : ""
	}
})

module.exports = store