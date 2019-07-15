import './about.css';
import React,{Component} from 'react';
import AboutHistory from '../about/history';

class AboutDiv extends React.Component {
render(){
	return(
		<div id="about" className="section about-section">
			<h3 className="font_2">О нас</h3>
			<AboutHistory />
		</div>
		)
}
}

export default AboutDiv;