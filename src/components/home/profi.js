import './profi.css';
import React,{Component} from 'react';
import ProProfi from '../professions/proprofi';

class ProfiDiv extends React.Component {
render(){
	return(
		<div id="profi" className="section profi-section">
			<h3 className="font_2">Профессии</h3>
			<ProProfi />
		</div>
		)
}
}

export default ProfiDiv;