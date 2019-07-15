import './feedback.css';
import React,{Component} from 'react';

class FeedbackDiv extends React.Component {
render(){
	return(
		<div id="feedback" className="section feedback-section">
			<h3 className="font_2">Мы на связи</h3>
			<p className="font_7">Если вы хотите помочь проекту, или у вас есть идеи - напишите нам!</p>
			<div className="feedback-form">
				
			<form method="POST" className="feeback-form" action="http://formspree.io/artys74@mail.ru">
				<div className="inputs">
				<input name="Имя" placeholder="Имя" required type="text" />
				<input name="_replyto" placeholder="Эл. почта" required type="email" />
				<input name="subj" placeholder="Тема кратко" required type="subj" />
				<textarea className="textareaContainer" name="Сообщение" required cols="30" rows="7" placeholder="Ваше сообщение"></textarea>
				<input className="btn feedback-form-submit" type="submit" value="Отправить" />
				</div>
			</form>
			</div>
		</div>
		)
}
}

export default FeedbackDiv;