import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Production from "./pages/Production";

function App() {
    return (
        <Switch>
            <Route path="/" component={Main}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/production" component={Production}/>
        </Switch>
    );
}

export default App;
