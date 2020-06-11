import React from "react";

class Section extends React.Component {
	render() {
		return <div className="section">
			<h1>{this.props.title}</h1>
			<div className="section-content">
				{this.props.children}
			</div>
		</div>;
	}
}

class Home extends React.Component {
	render() {
		return <div className="content">
			<Section title="First sect">
				stuff is in here
			</Section>
		</div>;
	}
}

export default Home;
