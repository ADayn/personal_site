import React from "react";
import './Resume.css';
import resume from "../media/resume.pdf"

class Resume extends React.Component {
	render() {
		return <div className="content pdf-page">
			<iframe title="resume"
				    className="preview"
			        src={resume}/>
			<a href={resume} download="Al_Dayn_Resume.pdf">
				<button className="download">
					Download
				</button>
			</a>
		</div>;
	}
}

export default Resume;
