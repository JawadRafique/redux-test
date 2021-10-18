import React from "react";
import "./App.css";
import { Task } from "./components/Task";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

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
    return (
        <section className="main">
            <Task />
        </section>
    );
}
export default App;
