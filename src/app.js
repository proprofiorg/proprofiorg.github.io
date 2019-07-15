import './bootstrap.min.css';
import './app.css';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';
import HomeDiv from './components/home/home';
import ProfiDiv from './components/home/profi';
import AboutDiv from './components/home/about';
import TargetSection from './components/home/target';
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
				<ProfiDiv />
				<AboutDiv />
				<FeedbackDiv />
			</div>
			<Footer />
		 </div> 
			)
	}
}
ReactDOM.render(<Hello />,document.getElementById('root'));