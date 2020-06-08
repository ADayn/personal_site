import React from "react";
import './Header.css';

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="name">Albert Dayn</div>
				<div className="links">
					<a href="mailto:Albert.Dayn@Colorado.edu"
					   target="_blank"
					   rel="noopener noreferrer">Albert.Dayn@Colorado.edu</a>
					<a href="https://linkedin.com/in/albert-dayn"
					   target="_blank"
					   rel="noopener noreferrer">linkedin.com/in/albert-dayn</a>
					<a href="https://github.com/ADayn"
					   target="_blank"
					   rel="noopener noreferrer">github.com/ADayn</a>
				</div>
			</div>
		);
	}
}

export default Header
