import React,{Component} from 'react';
import SwiperComponent from 'react-swiper-tu';


class BannerImg extends Component{
	showContent (){
		this.props.showContent(this.props.data['_id'])
	}
	render (){
		return (<div className="banner-img" onTouchTap={this.showContent.bind(this)}><img src={this.props.data['imgSrc'][0]} /><div className="banner-title">{this.props.data['shortTitle']}</div></div>);
	}
}


class Banner extends Component{
	render (){
		var lis = [];
		for(var i=0,ilen=this.props.list.length;i<ilen;i++){
			lis.push(<BannerImg key={i} showContent={this.props.showContent} data={this.props.list[i]} />);
		}

		return (
			<SwiperComponent swiperOption={this.props.swiperOption}>
				{lis}
			</SwiperComponent>
		);
	}
}

module.exports = Banner;