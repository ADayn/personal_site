import React from "react";
import './Resume.css';
import resume from "../media/resume.pdf"

class Resume extends React.Component {
	render() {
		return <div className="content pdf-container">
			<embed className="preview" name="plugin"
			       src={resume}
			       type="application/pdf"/>
			<a href={resume} download="Al_Dayn_Resume.pdf">
				<button>
					Download
				</button>
			</a>
		</div>;
	}
}

export default Resume;
