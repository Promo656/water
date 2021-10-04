import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
import Production from "./pages/production";
import Navbar from "./components/navbar/navbar";
import useMediaQuery from '@mui/material/useMediaQuery';
import SimpleDialogDemo from "./components/dialog/dialog";

function App() {
    const matches = useMediaQuery('(min-width:376px)');
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
