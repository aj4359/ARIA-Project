
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Roadmap from './components/Roadmap';
import Chat from './components/Chat';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/roadmap/:team" component={Roadmap} />
                <Route path="/chat" component={Chat} />
                <Route path="/" exact>
                    <h1>Welcome to ARIA</h1>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
