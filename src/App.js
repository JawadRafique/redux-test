import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { TaskGrid } from "./components/TaskGrid";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/libraries/anything/programs" />
                </Route>
                <Route exact path="/libraries/anything/programs">
                    <Programs />
                </Route>
            </Switch>
        </Router>
    );
}

function Programs() {
    return <TaskGrid />;
}
export default App;
