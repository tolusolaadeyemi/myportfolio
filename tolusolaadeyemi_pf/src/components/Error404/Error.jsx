import './Error.scss';
import errorImg from '../../assets/faces/hero5.png'

const Error = () => {

    return (
		<div className="error">
			<img src={errorImg} alt="error404" />
			<div className="text">
				<p>Oops... Page not found</p>
				<a href="/">Back Home</a>
			</div>
		</div>
	);
}

export default Error;