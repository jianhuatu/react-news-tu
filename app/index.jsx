import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';


var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


import store from './store';
import SectionConnect from './section/SectionConnect'


$(function(){
	ReactDom.render(
		(	
			<Provider store={store}>
				<SectionConnect />
			</Provider>
		),
		document.getElementById("wrapObj")
	);
})