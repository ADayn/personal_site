import React from "react";
import "./FlowFix.css"

const FlowFix = ({ outerClassName, children }) =>
	<div>
		<div className={outerClassName + " fixed-fix"}>
			{children}
		</div>
		<div className={outerClassName}>
			{children}
		</div>
	</div>;

export default FlowFix;
