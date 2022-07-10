import './Home.scss';
import { useState, useRef } from 'react';
import { SiTwitter, SiGithub, SiLinkedin } from 'react-icons/si';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import hero1 from '../../assets/faces/hero1.png';
import hero2 from '../../assets/faces/hero2.png';
import hero3 from '../../assets/faces/hero3.png';
import hero4 from '../../assets/faces/hero4.png';

const Home = () => {
	const indexRef = useRef(1);
	const [faceIndex, setFaceIndex] = useState(1);
	const [aboutIndex, setAboutIndex] = useState(1);

	const updateFace = () => {
		indexRef.current === 4 ? (indexRef.current = 1) : (indexRef.current = indexRef.current + 1);
		setFaceIndex(indexRef.current);
	};

	const pickFace = () => {
		switch (faceIndex) {
			case 1:
				return hero1;
			case 2:
				return hero2;
			case 3:
				return hero3;
			case 4:
				return hero4;
			default:
				return hero1;
		}
	};

	const scrollDown = () => {
		const scrollTo = document.querySelector('#stack')
		scrollTo.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
	};

	return (
		<div id="home">
			<div className="container">
				<img src={pickFace()} alt="tolu memoji" onClick={updateFace} />
				<div className="intro">
					<p className="mainText">Hey there 👋🏾, I'm</p>
					<p className="myName">Toluwanimi Sola-Adeyemi</p>
					{aboutIndex === 1 ? (
						<p className="subText">
							A self-taught/bootcamp Software Engineer & current Computer Science Bridge student at NYU. I enjoy discovering the whys and hows of how computers run and then building things that run on computers.{' '}
							<span className="icon">
								<FaChevronDown onClick={() => setAboutIndex(2)} />
							</span>
						</p>
					) : (
						<p className="subText">
							Apart from programming, I also enjoy working out, listening to music 🎧, watching Netflix and hanging out with friends 🌟. 
							<span className="icon">
								<FaChevronUp onClick={() => setAboutIndex(1)} />
							</span>
						</p>
					)}

					<div className="socialIcons">
						<a href="http://www.github.com/tolusolaadeyemi" target="_blank" rel="noopener noreferrer">
							<SiGithub />
						</a>
						<a href="http://www.twitter.com/tolusolaadeyemi" target="_blank" rel="noopener noreferrer">
							<SiTwitter />
						</a>
						<a
							href="https://www.linkedin.com/in/toluwanimi-sola-adeyemi-3b530116a/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<SiLinkedin />
						</a>
					</div>

					<div className="scrollDown">
						<FaChevronDown onClick={() => scrollDown()} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
