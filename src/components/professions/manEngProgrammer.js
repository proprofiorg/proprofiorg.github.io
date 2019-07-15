import "./manEngProgrammer.css";
import React,{Component} from 'react';

class EngProgrammer extends Component{
	render(){
		return(
			<div className="profi-demo-item eng-test">
				<h3 className="font_8">Инженер программист</h3>
				<iframe 
					width="560" height="315" src="https://www.youtube.com/embed/Wp-gffjMo54"
					frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
					>
				</iframe>
			</div>
			)
	}
}
export default EngProgrammer;