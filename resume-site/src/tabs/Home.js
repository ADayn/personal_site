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
		return <div className="home-page parallax">
			<div className="intro-panel" style={{backgroundImage: `url(${al})`}}>
				<div className="intro-text">
					<div className="intro-greeting">hi i'm</div>
					<div className="intro-name">AL</div>
				</div>
			</div>
			<div className="about content center-text">
				Take a look below for a bit about my hobbies <br/><br/>
				Contact info is at the footer of every page <br/><br/>
				Professional info is in the tabs on the upper right <br/><br/>
			</div>
			<div className="hobbies-area">
				<div className="content">
					<div className="hobby-row">
						<div className="img-parallax-helper parallax__layer--back">
							<div className="hobby-cell-l ">
								<img className=" " src={bologna} alt={"Bologna"} />
							</div>
						</div>
						<div className="hobby-cell-r center-text">This is my dog Balogna!</div>
					</div>
				</div>
			</div>
			<Section title="My Hobbies!">
				<div className="hobbies">
					<Hobby comment="My dog Balogna chilling after a long hike">
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
