import './target.css';
import React,{Component} from 'react';

class TargetSection extends Component{
render(){
	return(
	<section id="target" className="section target-section">
		<div className="anonce">
			<h3 className="font_2">Наша цель</h3>
			<div className="font_7">
				<p>Ты выбираешь профессию?​</p>
				<p>Ты не знаешь  кем хочешь стать?​</p>
				<p>Мы поможем определиться с выбором!</p>
			</div>
			<div className="target-button">
				<a href=""><span>Читать про профессии</span></a>
			</div>
		</div>
	</section>
		)
	}
}
export default TargetSection;