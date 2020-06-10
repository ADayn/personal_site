import React from "react";
import './Footer.css';

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<div className="links">
					<a href="mailto:Albert.Dayn@Colorado.edu"
					   target="_blank"
					   rel="noopener noreferrer"
					   className="link">Albert.Dayn@Colorado.edu</a> &#124;
					<a href="https://linkedin.com/in/albert-dayn"
					   target="_blank"
					   rel="noopener noreferrer"
					   className="link">linkedin.com/in/albert-dayn</a> &#124;
					<a href="https://github.com/ADayn"
					   target="_blank"
					   rel="noopener noreferrer"
					   className="link">github.com/ADayn</a>
				</div>
			</div>
		);
	}
}

export default Footer
