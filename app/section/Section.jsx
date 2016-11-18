import React,{Component} from 'react';

import Header from '../header/HeaderConnect';
import NewsSection from '../NewsSection/NewsSectionConnect';
import NewsContentSection from '../newsContentSection/NewsContentSectionConnect';


class Section extends Component{
	render (){
		return (
			<section className="all-section">
				<Header />
				<NewsSection />
				<NewsContentSection />
			</section>
		);
	}
}

module.exports = Section;