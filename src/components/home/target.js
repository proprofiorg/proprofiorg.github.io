import './target.css';
import React,{Component} from 'react';

class TargetSection extends Component{
	constructor(props){
		super(props)
		this.state={
			isActive:false
			}

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
					<p>Ты не знаешь  кем хочешь стать?​</p>
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
			return(
		<div className="section profi-section get-links">
			<h3 className="font_2">Профессии</h3>
			<ProProfi />
		</div>
		)
	}
}

class ProProfi extends Component{
	render (){
		return(
		<section id="proprofi" className="proprofi">
			<div className="div-nav-profi">
				<div className="anonce">
					<h5 className="font_8">Инженер по качеству</h5>
					<p className="font_7">
						Это специалист, который занимается тестированием программного обеспечения, контролирует его качество.  
						<a href="#">Читать про профессию → </a></p>
				</div>
				<div className="anonce">
					<h5 className="font_8">Разработчик мобильных приложений</h5>
					<p className="font_7">Мобильный разработчик — это специалист, разрабатывающий программные приложения для различных мобильных устройств: планшетов, смартфонов. Профессия на данный момент самая модная, перспективная и востребованная. ​<a href="#">Читать про професcию →</a></p>
				</div>
				<div className="anonce">
					<h5 className="font_8">Инженер-программист</h5>
					<p className="font_7">Суть профессии программиста заключается в разработке, проектировании и создании программного обеспечения, а так же в обеспечении правильной работы этих программ.<a href="#">Читать про професcию →</a></p>
				</div>
			</div>
		</section>
			)
	}
}

export default TargetSection;