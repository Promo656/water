import React from 'react';
import {makeStyles} from "@material-ui/core";

import mainImage from "../../assets/photo/logo1.png"
import {ReactComponent as Logo} from "../../assets/logo/logo1.svg"
import Navbar from "../../components/navbar/navbar";
import StyledButton from "../../components/button/styledButton";

const useStyles = makeStyles((theme) => ({
        welcomePart: {
            paddingTop: 60,
            paddingLeft: 304,
            height: "100vh",
            backgroundImage: `url(${mainImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
        },
        mainImage: {
            width: "100%",
        },
        logo: {
            display: "block",
            width: 290,
            height: 324,
            marginBottom: 60
        },
        title: {
            display: "block",
            fontFamily: "Inglobal",
            fontSize: 36
        }
    }),
);

function WelcomePart() {
    const classes = useStyles()
    return (
        <div className={classes.welcomePart}>
            {/*<img className={classes.mainImage} src={mainImage} alt=""/>*/}
            <Navbar margin={"0 0 140px 0"}/>
            <Logo className={classes.logo}/>
            <span className={classes.title}>Вода Севера - Идеальный Баланс</span>
            <StyledButton title="Подробнее" btnColor="#075AB4"/>
        </div>
    );
}

export default WelcomePart;