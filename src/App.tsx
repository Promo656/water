import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
import Production from "./pages/production";


function App() {
    return (
        <div>
            {/*<Navbar margin={"0 0 140px 0"}/>*/}
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/production" component={Production}/>
            </Switch>
        </div>

    );
}

export default App;
