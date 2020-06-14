import React from "react";
import './Resume.css';
import resume from "../media/resume.pdf"

class Resume extends React.Component {
	render() {
		return <div className="content pdf-container">
			<embed className="preview" name="plugin"
			       src={resume}
			       type="application/pdf"/>

		</div>;
	}
}

export default Resume;
