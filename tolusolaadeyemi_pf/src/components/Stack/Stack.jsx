import './Stack.scss';
import react from '../../assets/logos/react.png';
import node from '../../assets/logos/node.png';
import postman from '../../assets/logos/postman.png';
import github from '../../assets/logos/github.png';
import netlify from '../../assets/logos/netlify.png';
import docker from '../../assets/logos/docker.png';
import postgres from '../../assets/logos/postgres.png';
import heroku from '../../assets/logos/heroku.png';
import mongodb from '../../assets/logos/mongodb.png';
import javascript from '../../assets/logos/javascript.png';
import cpp from '../../assets/logos/cpp.png';
import python from '../../assets/logos/python.png';
import django from '../../assets/logos/django.png';
import aws from '../../assets/logos/aws.png';

const Stack = () => {
	const images = [
		javascript,
		react,
		node,
		python,
		django,
		github,
		netlify,
		postman,
		mongodb,
		docker,
		postgres,
		heroku,
		aws,
		cpp,
	];

	return (
		<div id="stack">
			<p className="header">Stack</p>
			<div className="images">
				{images.map((image, index) => (
					<img key={index} src={image} alt="technologies" />
				))}
			</div>
		</div>
	);
};

export default Stack;
