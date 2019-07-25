import './target.css';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import ProProfi from '../proprofi';

class TargetSection extends Component{
	constructor(props){
		super(props)
		this.state={isActive:false }

		this.readActive = () =>{
			this.setState({
				isActive:!this.state.isActive
			});
		}
	}
	render(){
		return(
		<section id="target" className="section target-section">
			<div className="anonce">
				<h3 className="font_2">Наша цель</h3>
				<div className="font_7">
					<p>Ты выбираешь профессию?​</p>
					<p>Ты не знаешь кем хочешь стать?​</p>
					<p>Мы поможем определиться с выбором!</p>
				</div>
				<div className="target-button-div" >
					<button type='button' className="target-button" onClick={this.readActive}>
					Читать про профессии
					</button>
				 </div>
					{this.getLinks()}
			</div>
		</section>
			)
	}

	getLinks(){
		const {isActive} = this.state;
		if(!isActive) return null
			return(<div className="section profi-section get-links">
			<ProProfi />
		</div> )
	}
}

export default TargetSection;