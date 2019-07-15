import './footer.css';
import React,{Component} from 'react';

class Footer extends Component{
	render(){
		return(
<footer id="footer" className="site-footer">
	<div className="footer-nav">
	<ul className="footer-nav-list">
			<li className="footer-nav-item"><a className="nav-link" href="#root">Главная</a></li>
			<li className="footer-nav-item"><a className="nav-link" href="#video">Видео</a></li>
			<li className="footer-nav-item"><a className="nav-link" href="#about">О нас</a></li>
			<li className="footer-nav-item"><a className="nav-link" href="#feedback">Контакты</a></li>
	</ul>
	</div>
	<div className="copyright">
			<p className="footer-copy"> © 2019&nbsp;- Путь в Профессию.&nbsp; Сделано на Eduthon 2019 </p>
			<p className="footer-author">Дизайн: Сергей Борисюк, Программирование: Сергей Артихович</p>
	</div>
</footer>		
			)
	}
}
export default Footer;