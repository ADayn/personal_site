import React from "react";
import './Home.css';
import al from "../media/al.jpg"
import bologna from "../media/bologna.jpg"
import eclairs from "../media/eclairs.jpg"
import shramps from "../media/shramps.mp4"

const Section = ({ title, children }) =>
	<div className="section">
		<h1>{title}</h1>
		<div className="section-content">
			{children}
		</div>
	</div>;

const Hobby = ({ comment, children }) =>
	<div className="hobby">
		<div className="hobby-comment">{comment}</div>
		{children}
	</div>;

class Home extends React.Component {
	render() {
		return <div className="home-page">
			<div className="intro-panel" style={{backgroundImage: `url(${al})`}}>
				<div className="intro-text">
					<span>Hi</span>
					<span>I'm</span>
					<span>Al</span>
				</div>
			</div>
			<Section title="My Hobbies!">
				<div className="hobbies">
					<Hobby comment="My dog Balogna chilling after a long hike">
						<img className="hobby-media" src={bologna} alt={"Bologna"} />
					</Hobby>
					<Hobby comment="These mediocre eclairs are maybe my proudest accomplishment in life">
						<img className="hobby-media" src={eclairs} alt={"Eclairs"} />
					</Hobby>
					<Hobby comment="My ">
						<video className="hobby-media" src={shramps} autoPlay loop muted/>
					</Hobby>
				</div>
			</Section>
		</div>;
	}
}

export default Home;
