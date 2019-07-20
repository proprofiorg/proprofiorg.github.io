import React,{Component} from 'react';
import {connect} from 'react-redux';

class ProProfi extends Component{
	render (){
		return(
		<section id="proprofi" className="proprofi">
			<div className="div-nav-profi" style={{display:"flex"}}>{
				this.props.profi.map((item) => 
				<div className="anonce" key={item.id} style={{width:'390px',margin:'5px'}}>
					<h5 className="font_8" style={{height:'50px'}}>{item.title}</h5>
					<iframe 
				width="380" height="220" src={ `https://www.youtube.com/embed/${item.video}` }
				frameBorder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope;" 
				allowFullScreen
					/>
					<p className="font_7">{item.description}</p>
				</div>)
			}</div>
		</section>
			)
	}
}
export default connect(
	state => ({
		profi: state.professionsDB.professions
	}),
	dispatch => ({
		onAddProfession: (ProfItem) => {
			dispatch({type:'ADD_PROF',payload:ProfItem})
		}
	})
)(ProProfi)