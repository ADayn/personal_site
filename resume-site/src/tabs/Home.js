import React from "react";

const Section = ({ title, children }) =>
	<div className="section">
		<h1>{title}</h1>
		<div className="section-content">
			{children}
		</div>
	</div>;

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
