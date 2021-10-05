import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
import Production from "./pages/production";
import Navbar from "./components/navbar/navbar";
import useMediaQuery from '@mui/material/useMediaQuery';
import SimpleDialogDemo from "./components/dialog/dialog";
import {Resolution} from "./const";

function App() {
    const matches = useMediaQuery(Resolution.min);
    return (
        <div>
            {matches ? <Navbar/> : <SimpleDialogDemo/>}
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/production" component={Production}/>
            </Switch>
        </div>

    );
}

export default App;
