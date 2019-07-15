import './navbar.css';
import React,{Component} from 'react';

class NavBar extends React.Component{
	constructor(props){
		super(props);
		this.state ={activeNav: false};
	}
	render(){
		return(
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
				    <div className="navbar-header">
				      	<h1 className="navbar-brand">
				      	<a href="#">
					      	Путь в профессию
				      	</a>
				      	</h1>
				    </div>
			      <button type="button" className="button navbar-right" 
				      data-toggle="collapse" data-target="#navbarNav" 
				      onClick={() =>this.setState({activeNav: !this.state.activeNav})}>
					      <img src="/images/menu.png" />
			      </button>    				
					<div className= { this.state.activeNav ? "sidebar active" : "collapse" } id="navbarNav">
							<a className="nav-link" href="#root">Главная</a>
							<a className="nav-link" href="#video">Видео</a>
							<a className="nav-link" href="#about">О нас</a>
							<a className="nav-link" href="#feedback">Контакты</a>
							<button type="button" className="button-sidebar" 
								onClick={() =>this.setState({activeNav: !this.state.activeNav})}>X
							</button>
					</div>				    			
				</div>
			</nav>
			)
	}
}
export default NavBar;