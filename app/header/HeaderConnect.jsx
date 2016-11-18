import {connect} from 'react-redux'; 

const Header = require('./Header');

const HeaderConnect = connect(
function(state,props){
	return state;
},function(dispatch,props){
	return {}
})(Header);

module.exports = HeaderConnect;