import React from 'react';
import {Route, Switch} from "react-router"
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import tabs from "./tabs/Tabs"
import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

function to_route(tab) {
    return <Route key={tab.title} exact path={tab.path}>{tab.component}</Route>
}

function App() {
  return (
    <Router>
        <div className="App">
            <Header/>
            <div className="page-content" id="page-conten">
                <Switch>
                    {tabs.map(to_route)}
                </Switch>
            </div>
            <Footer/>
        </div>
    </Router>
  );
}

export default App;
