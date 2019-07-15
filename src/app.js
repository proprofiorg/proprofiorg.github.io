import './bootstrap.min.css';
import './app.css';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';
import HomeDiv from './components/home/home';
import AboutDiv from './components/home/about';
import TargetSection from './components/home/target';

import EngTest from './components/professions/manEngTest';
import MobileDeveloper from './components/professions/manMobileDeveloper';
import EngProgrammer from './components/professions/manEngProgrammer';

import FeedbackDiv from './components/home/feedback';
import Footer from './components/footer';

class Hello extends React.Component {
	render() {
		return(
		<div className="app">
		<noscript><div class="noscript">К сожалению, Ваш браузер не поддерживает скрипты.</div></noscript>
			<NavBar />
			<div className="container">
				<HomeDiv />
				<TargetSection />
			<div id="video" className="section video-section">
				<h3 className="font_2">Видео про профессии</h3>
				<EngTest /><MobileDeveloper /><EngProgrammer />
			</div>
				<AboutDiv />
				<FeedbackDiv />
			</div>
			<Footer />
		 </div> 
			)
	}
}
ReactDOM.render(<Hello />,document.getElementById('root'));