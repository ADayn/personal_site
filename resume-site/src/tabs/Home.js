import React from "react";
import './Home.css';
import al from "../media/al.jpg"
import bologna from "../media/bologna_square.jpg"
import eclairs from "../media/eclairs_square.jpg"
import shramps from "../media/shramps_square.mp4"


class Home extends React.Component {
	render() {
		function scroll_down() {
			// Scroll certain amounts from current position
			document.getElementsByClassName("page-content")[0].scrollBy({
				top: 200, // could be negative value
				left: 0,
				behavior: 'smooth'
			})
		}

		return <div className="home-page">
			<div className="intro-panel"
			     style={{backgroundImage: `url(${al})`}}>
				<div className="intro-text">
					<div className="intro-greeting">hi i'm</div>
					<div className="intro-name">AL</div>
				</div>
			</div>
			<div className="pls-scroll">
				<div className="scroll-area" onClick={scroll_down}>
					<span>MORE</span>
					<div className="scroll-arrow"></div>
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
						<div className="hobby-cell-l">
							<img className="hobby-media" src={bologna}
							     alt={"Bologna"}/>
						</div>
						<div className="hobby-cell-r center-text text-1">This is
							my dog Balogna!
						</div>
						<div className="arrow-1 arrow"></div>
					</div>
					<div className="hobby-row">
						<div className="hobby-cell-l center-text text-2">Shramps
							had babies!
						</div>
						<div className="arrow-2 arrow"></div>
						<div className="hobby-cell-r">
							<video className="hobby-media" src={shramps}
							       autoPlay loop muted/>
						</div>
					</div>
					<div className="hobby-row">
						<div className="hobby-cell-l ">
							<img className="hobby-media" src={eclairs}
							     alt={"Eclairs"}/>
						</div>
						<div className="hobby-cell-r center-text text-3">This is
							my dog Balogna!
						</div>
						<div className="arrow-3 arrow"></div>
					</div>
				</div>
				<div className="hobbies-area">
					<div className="content">
						<div className="hobby-grid">
							<div className="bologna">
								<img className="hobby-media" src={bologna}
								     alt={"Bologna"}/>
								{/*<div className="arrow-up arrow"> </div>*/}
							</div>
							<div className="bologna hobby-text center-text">
								This is Balogna, doing what she does best:
								laying down. Also happens to be my favorite
								activity.
							</div>


							<div className="shramp hobby-text center-text">
								I grow plants and keep aquariums, and my 4
								shrimp moms all decided to have babies at the
								same time!
							</div>
							<div className="shramp">
								<video className="hobby-media" src={shramps}
								       autoPlay loop muted/>
							</div>

							{/* Row 2 */}
							<div className="eclair">
								<img className="hobby-media" src={eclairs}
								     alt={"Eclairs"}/>
							</div>
							<div className="eclair hobby-text center-text">
								The only thing more more frustrating, soul
								crushing and infuriating than programming
								is cooking, but C++ never tasted as good as th
							</div>
						</div>
					</div>
					<div className="hobby-row">
						<div className="hobby-cell-l">
							<img className="hobby-media" src={bologna}
							     alt={"Bologna"}/>
						</div>
						<div className="hobby-cell-r center-text text-1">This is
							my dog Balogna!
						</div>
						<div className="arrow-1 arrow"></div>
					</div>
					<div className="hobby-row">
						<div className="hobby-cell-l center-text text-2">Shramps
							had babies!
						</div>
						<div className="arrow-2 arrow"></div>
						<div className="hobby-cell-r">
							<video className="hobby-media" src={shramps}
							       autoPlay loop muted/>
						</div>
					</div>
					<div className="hobby-row">
						<div className="hobby-cell-l ">
							<img className="hobby-media" src={eclairs}
							     alt={"Eclairs"}/>
						</div>
						<div className="hobby-cell-r center-text text-3">This is
							my dog Balogna!
						</div>
						<div className="arrow-3 arrow"></div>
					</div>
				</div>
			</div>
		</div>;
	}
}

export default Home;
