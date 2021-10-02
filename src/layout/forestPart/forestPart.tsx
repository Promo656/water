import React from 'react';
import {makeStyles} from "@material-ui/core";
import productionLogo from "../../assets/photo/logo3.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Resolution} from "../../const";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
        production: {
            height: "100vh",
            width: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        image: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: -1
        },
        text: {
            fontFamily: "Inglobal"
        },
        text_mobile: {
            fontSize: 24
        },
        text_web: {
            fontSize: 48
        },
        wrapText: {
            backgroundColor: "#075AB4",
            color: "white",
            fontFamily: "Inglobal"
        },
        wrapText_mobile: {
            width: 238,
            height: 41,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            fontSize: 18,
            margin: "15px 25px 0 70px"
        },
        wrapText_web: {
            borderRadius: 14,
            fontSize: 48,
            padding: "20px 40px"
        }
    }),
);

function ForestPart() {
    const classes = useStyles()
    const minMatches = useMediaQuery(Resolution.min);
    const maxMatches = useMediaQuery(Resolution.max);
    const text = classNames(classes.text, {
        [classes.text_mobile]: maxMatches,
        [classes.text_web]: minMatches,
    })
    const wrapText = classNames(classes.wrapText, {
        [classes.wrapText_mobile]: maxMatches,
        [classes.wrapText_web]: minMatches,
    })
    return (
        <>
            <img className={classes.image} src={productionLogo} alt=""/>
            <div className={classes.production}>
                <div style={{width: "100%", textAlign: "center"}}>
                    <span className={text}>Можете спать спокойно</span>
                    {minMatches && <span className={text}>&ensp;&mdash;&ensp;</span>}
                    <span className={wrapText}>мы все доставим во время.</span>
                </div>
            </div>
        </>

    );
}

export default ForestPart;