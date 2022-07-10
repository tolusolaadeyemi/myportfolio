import './Contact.scss';
import contactImg from '../../assets/faces/hero7.png';
import { SiTwitter, SiInstagram, SiGmail, SiLinkedin } from 'react-icons/si';

const Contact = () => {
	return (
		<div className="contact">
			<div className="intro">
				<p className="contactText">Reach Out</p>
				<img src={contactImg} alt="contact" />
				<div className="contactIcons">
					<a
						href="https://www.linkedin.com/in/toluwanimi-sola-adeyemi-3b530116a/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SiLinkedin />
					</a>
					<a href="mailto:tolusolaadeyemi@gmail.com">
						{' '}
						<SiGmail />
					</a>
					<a href="http://twitter.com/tolusolaadeyemi" target="_blank" rel="noopener noreferrer">
						{' '}
						<SiTwitter />
					</a>
					<a href="http://instagram.com/tolusolaadeyemi" target="_blank" rel="noopener noreferrer">
						{' '}
						<SiInstagram />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
