import React from 'react';
import {makeStyles} from "@material-ui/core";
import mainImage from "../../assets/photo/logo1.png"
import {ReactComponent as Logo} from "../../assets/logo/logo1.svg"
import StyledButton from "../../components/button/styledButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
        welcomePart: {
            position: "relative",
            height: "100vh",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
        },
        image: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: -1
        },
        logo: {
            display: "block",
            width: 290,
            height: 324,
            marginBottom: 60
        },
        title: {
            fontFamily: "Inglobal"
        },
        title_mobile: {
            fontSize: 14,
            marginBottom: 20
        },
        title_web: {
            fontSize: 36,
            marginBottom: 40
        },

        infoWrap_web: {
            paddingTop: 275,
            paddingLeft: 304
        },
        infoWrap_mobile: {
            paddingTop: 100,
            paddingLeft: 20
        }
    }),
);

function WelcomePart() {
    const classes = useStyles()
    const mimMatches = useMediaQuery('(min-width:376px)');
    const maxMatches = useMediaQuery('(max-width:376px)');
    const title = classNames(classes.title, {
        [classes.title_mobile]: maxMatches,
        [classes.title_web]: mimMatches,
    })
    const infoWrap = classNames({
        [classes.infoWrap_mobile]: maxMatches,
        [classes.infoWrap_web]: mimMatches,
    })
    return (
        <>
            <img className={classes.image} src={mainImage} alt=""/>
            <div className={classes.welcomePart}>
                <div className={infoWrap}>
                    {mimMatches && <Logo className={classes.logo}/>}
                    <div className={title}>Вода Севера - Идеальный Баланс</div>
                    <StyledButton title="Подробнее" btnColor="#075AB4" matches={mimMatches}/>
                </div>
            </div>
        </>

    );
}

export default WelcomePart;