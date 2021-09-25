import React from 'react';
import {makeStyles} from "@material-ui/core";
import {ReactComponent as ArrowDown} from "../../assets/logo/arrowDown.svg";
import {ReactComponent as X} from "../../assets/logo/x.svg";


const useStyles = makeStyles((theme) => ({
        harmful: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh"
        },
        title: {
            fontFamily: "Inglobal",
            fontSize: 36,
            letterSpacing: 2,
            lineHeight: "50px",
            textAlign: "center",
            marginBottom: 60
        },
        underLine: {
            borderBottom: "2px solid #DA442B"
        },
        subTitle: {
            fontFamily: "Inglobal",
            fontSize: 36,
            letterSpacing: 2,
            lineHeight: "50px",
            marginBottom: 50
        },
        arrowIcon: {
            marginBottom: 100
        },
        xArea: {
            position: "relative",
            display: "flex",
            alignItems: "center"
        },
        xItem: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "80px 100px"
        },
        xLogo: {
            position: "absolute"
        },
        xTitle: {
            fontFamily: "Inglobal",
            fontSize: 36,
            letterSpacing: 2,
        }
    }),
);

const xItems = [
    <span>Хлориды</span>,
    <span>Соли</span>,
    <span>Изотопные <br/> молекулы</span>
]

function HarmfulPart() {
    const classes = useStyles()
    return (
        <div className={classes.harmful}>
            <span className={classes.title}>
                Главным преимуществом употребления талой <br/>
                воды становится ее <span className={classes.underLine}>чистота.</span>
            </span>
            <span className={classes.subTitle}>В ней полностью отсутствуют</span>
            <ArrowDown className={classes.arrowIcon}/>
            <div className={classes.xArea}>
                {
                    xItems.map((el, index) => (
                        <div className={classes.xItem} key={index}>
                            <X className={classes.xLogo}/>
                            <div className={classes.xTitle}>{el}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default HarmfulPart;