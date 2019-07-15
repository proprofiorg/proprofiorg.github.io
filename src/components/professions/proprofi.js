import './proprofi.css';
import React,{Component} from 'react';
import EngTest from './manEngTest';
import MobileDeveloper from './manMobileDeveloper';
import EngProgrammer from './manEngProgrammer';

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
			<div className="profi-demo">
				<EngTest /><MobileDeveloper /><EngProgrammer />
			</div>
		</section>
			)
	}
}
export default ProProfi;