import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import Experience from "./Experience";
import Resume from "./Resume";

class Tab {
	constructor(title, path, component) {
		this.title = title;
		this.path = path;
		this.component = component;
	}
}

const tabs = [];

function register(title, path, component) {
	tabs.push(new Tab(title, path, component));
}

register("Home", "/", <Home/>);
register("Projects", "/projects", <Projects/>);
register("Experience", "/experience", <Experience/>);
register("Resume", "/resume", <Resume/>);

export default tabs;
