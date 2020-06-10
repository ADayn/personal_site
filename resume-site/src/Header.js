import React from "react";
import './Header.css';

/*
Deep water:     98, 160, 146
Shallow water: 134, 178, 166
Wet Sand:      192, 193, 180
Foam:          230, 232, 226
Sand:          235, 221, 199
Dark Sand:     235, 205, 171
 */

/*
Night sky:     25, 39, 48
Evening sky:   37, 95, 117
Gentle purple: 190, 185, 215
Sunset pink:   232, 163, 186
Foam Blue:     225, 243, 248
 */

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="name">Albert Dayn</div>
			</div>
		);
	}
}

export default Header
