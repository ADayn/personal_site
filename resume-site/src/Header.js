import React from "react";
import './Header.css';
import { NavLink } from 'react-router-dom';

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

class Home extends React.Component {
	render() {
		return <div>
			Hello!
		</div>;
	}
}

class Projects extends React.Component {
	render() {
		return <div>
			Bye :( !
		</div>;
	}
}

const tab_blueprints = [
	["Home", "/", <Home/>],
	["Projects", "/projects", <Projects/>],
	["Experience", "/experience", <Home/>],
	["Resume", "/resume", <Home/>],
	["Sites", "/sites", <Home/>],
];

function to_link(blueprint) {
	const [title, to, _] = blueprint
	return <NavLink to={to} className="tab" activeClassName="active"  exact={true} title={title}>{title}</NavLink>
}

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="name">Albert Dayn</div>
				<div className="tabs">
					{tab_blueprints.map(to_link)}
					{/*<NavLink to="/" className="tab" activeClassName="active"  exact={true}>Home</NavLink>*/}
					{/*<NavLink to="/projects" className="tab" activeClassName="active">Projects</NavLink>*/}
					{/*<NavLink to="/experience" className="tab" activeClassName="active">Experience</NavLink>*/}
					{/*<NavLink to="/resume" className="tab" activeClassName="active">Resume</NavLink>*/}
					{/*<NavLink to="/sites" className="tab" activeClassName="active">Sites</NavLink>*/}
				</div>
			</div>
		);
	}
}

export default Header
