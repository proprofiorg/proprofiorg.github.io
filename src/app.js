import './bootstrap.min.css';
import './app.css';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';

import NavBar from './navbar';
import Home from './components/home/home';
import About from './components/home/about';
import TargetSection from './components/home/target';

import FeedbackDiv from './components/home/feedback';
import Footer from './components/footer';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__&&__REDUX_DEVTOOLS_EXTENSION__());
class App extends React.Component {
	render() {
		return(
			<div className="app">
<noscript><div class="noscript">К сожалению, Ваш браузер не поддерживает скрипты.</div></noscript>
				<NavBar />
				<div className="container">
					<Home />
					<TargetSection />
					<About />
					<FeedbackDiv />
				</div>
				<Footer />
			 </div> 
			)
	}
}
ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.getElementById('root')
	);