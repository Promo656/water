import React from 'react';
import {makeStyles} from "@material-ui/core";
import mainImage from "../../assets/photo/logo1.png"
import mainImage_mobile from "../../assets/photo/logo1_mobile.png"
import {ReactComponent as Logo} from "../../assets/logo/logo1.svg"
import StyledButton from "../../components/button/styledButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import classNames from "classnames";
import {useHistory} from "react-router-dom";
import {Resolution} from "../../const";

const useStyles = makeStyles((theme) => ({
        welcomePart: {
            position: "relative",
            height: "100vh",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
        },
        welcomePart_mobile: {
            marginBottom: 60
        },
        welcomePart_web: {
            marginBottom: 120
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
    const history = useHistory()
    const classes = useStyles()
    const minMatches = useMediaQuery(Resolution.min);
    const maxMatches = useMediaQuery(Resolution.max);
    const welcomePart = classNames(classes.welcomePart, {
        [classes.welcomePart_mobile]: maxMatches,
        [classes.welcomePart_web]: minMatches,
    })
    const title = classNames(classes.title, {
        [classes.title_mobile]: maxMatches,
        [classes.title_web]: minMatches,
    })
    const infoWrap = classNames({
        [classes.infoWrap_mobile]: maxMatches,
        [classes.infoWrap_web]: minMatches,
    })
    const changePath = () => {
        history.push('/production')
    }
    return (
        <>
            <img className={classes.image} src={minMatches ? mainImage : mainImage_mobile} alt=""/>
            <div className={welcomePart}>
                <div className={infoWrap}>
                    {minMatches && <Logo className={classes.logo}/>}
                    <div className={title}>Вода Севера - Идеальный Баланс</div>
                    <StyledButton title="Подробнее" btnColor="#075AB4" matches={minMatches} onClick={changePath}/>
                </div>
            </div>
        </>

    );
}

export default WelcomePart;