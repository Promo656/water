import React from 'react';
import {makeStyles} from "@material-ui/core";
import productionLogo from "../../assets/photo/logo3.png";

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
            fontFamily: "Inglobal",
            fontSize: 48
        },
        wrapText: {
            borderRadius: 14,
            backgroundColor: "#075AB4",
            color: "white",
            fontFamily: "Inglobal",
            fontSize: 48,
            padding: "20px 40px"
        }
    }),
);

function ForestPart() {
    const classes = useStyles()
    return (
        <div className={classes.production}>
            <img className={classes.image} src={productionLogo} alt=""/>
            <div>
                <span className={classes.text}>Можете спать спокойно - </span>
                <span className={classes.wrapText}>мы все доставим во время.</span>
            </div>
        </div>
    );
}

export default ForestPart;