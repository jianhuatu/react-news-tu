import {connect} from 'react-redux'; 

const Section = require('./Section');

const SectionConnect = connect(
function(state,props){
	return state;
},function(dispatch,props){
	return {}
})(Section);

module.exports = SectionConnect;