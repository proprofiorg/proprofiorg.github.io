import './about.css';
import React,{Component} from 'react';

class About extends React.Component {
render(){
	return(
		<div id="about" className="section about-section">
			<h3 className="font_2">О нас</h3>
			<History />
		</div>
		)
	}
}

class History extends Component{
	render(){
		return(
<section id="history" className="history">
	<div className="article">
		<h3 className="font_2">Наша история</h3>
		<p className="font_7">
		Это сайт разработан в рамках весеннего хакатона.  Идея придумана учителями с активной жизненной позицией для тех кто ищет себя и свое будущее призвание.
		</p>
		<img src="" alt="" />
	</div>
</section>
			)
	}
}

export default About;