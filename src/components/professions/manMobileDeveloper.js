import './manMobileDeveloper.css';
import React,{Component} from 'react';

class MobileDeveloper extends Component{
	render(){
		return(
			<div className="profi-demo-item mobile-dev">
			<h3 className="font_8">Разработчик мобильных приложений</h3>
				<iframe 
					width="560" height="315" src="https://www.youtube.com/embed/i_aYtRDZbDw"
					frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
					>
				</iframe>
			</div>
			)
	}
}
export default MobileDeveloper;