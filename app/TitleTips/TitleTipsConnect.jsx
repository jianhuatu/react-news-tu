import {connect} from 'react-redux'; 

const TitleTips = require('./TitleTips');

const TitleTipsConnect = connect(
function(state,props){
	return state;
},function(dispatch,props){
	return {}
})(TitleTips);

module.exports = TitleTipsConnect;