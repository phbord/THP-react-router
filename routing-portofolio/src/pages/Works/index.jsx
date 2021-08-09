import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Exercises from 'components/Exercises';
import Study from 'components/Study';
import Case from 'components/Case';

const Works = () => {
    return (<>
        <h1>Works</h1>
        <Router>
            <nav>
                <Link to="/works/" className="navbar-brand me-2">Exercises</Link>
                <Link to="/works/study" className="navbar-brand me-2">Study</Link>
                <Link to="/works/case" className="navbar-brand me-2">Case</Link>
            </nav>
            <Switch>
                <Route path="/works/" component={Exercises} exact />
                <Route path="/works/study" component={Study} />
                <Route path="/works/case" component={Case} />
            </Switch>
        </Router>
    </>)
}

export default Works