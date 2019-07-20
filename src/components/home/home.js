import './home.css';
import React,{Component} from 'react';

class Home extends React.Component {
render(){
	return(
		<div id="home" className="section home-section">
			<div className="home-title">
				<h2 className="font_2">Путь в</h2>
				<h2 className="font_2">
					<span>Профессию</span>
				</h2>
			</div>
		</div>
		)
	}
}

export default Home;