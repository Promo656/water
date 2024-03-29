import React from 'react';
import {makeStyles} from "@material-ui/core";
import {ReactComponent as ArrowDown} from "../../assets/logo/arrowDown.svg";
import {ReactComponent as X} from "../../assets/logo/x.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import classNames from "classnames";
import {Resolution} from "../../const";


const useStyles = makeStyles((theme) => ({
        harmful: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%"
        },
        harmful_mobile: {
            marginBottom: 73
        },
        harmful_web: {
            marginBottom: 163
        },
        title: {
            fontFamily: "Inglobal",
            letterSpacing: 2,
            textAlign: "center",
        },
        title_mobile: {
            fontFamily: "Inglobal",
            fontSize: 12,
            letterSpacing: 2,
            lineHeight: "20px",
            marginBottom: 40
        },
        title_web: {
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
            letterSpacing: 2,
            marginBottom: 20
        },
        subTitle_mobile: {
            fontFamily: "Inglobal",
            fontSize: 14
        },
        subTitle_web: {
            fontFamily: "Inglobal",
            fontSize: 36,
            lineHeight: "50px",
        },
        arrowIcon_mobile: {
            marginBottom: 10,
            width: 16,
            height: 45
        },
        arrowIcon_web: {
            marginBottom: 100,
            width: 38,
            height: 158
        },
        xArea: {
            position: "relative",
            display: "flex",
            alignItems: "center"
        },
        xArea_mobile: {
            flexDirection: "column"
        },
        xItem: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "100px 100px"
        },
        xLogo: {
            position: "absolute"
        },
        xLogo_mobile: {
            width: 149,
            height: 208,

        },
        xLogo_web: {
            width: 242,
            height: 338
        },
        xTitle: {
            fontFamily: "Inglobal",
            letterSpacing: 2,
        },
        xTitle_mobile: {
            fontFamily: "Inglobal",
            fontSize: 24,
            letterSpacing: 2,
        },
        xTitle_web: {
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
    const minMatches = useMediaQuery(Resolution.min);
    const maxMatches = useMediaQuery(Resolution.max);
    const harmful = classNames(classes.harmful, {
        [classes.harmful_mobile]: maxMatches,
        [classes.harmful_web]: minMatches,
    })
    const title = classNames(classes.title, {
        [classes.title_mobile]: maxMatches,
        [classes.title_web]: minMatches,
    })
    const subTitle = classNames(classes.subTitle, {
        [classes.title_mobile]: maxMatches,
        [classes.title_web]: minMatches,
    })
    const arrowIcon = classNames({
        [classes.arrowIcon_mobile]: maxMatches,
        [classes.arrowIcon_web]: minMatches,
    })
    const xArea = classNames(classes.xArea, {
        [classes.xArea_mobile]: maxMatches
    })
    const xLogo = classNames(classes.xLogo, {
        [classes.xLogo_mobile]: maxMatches,
        [classes.xLogo_web]: minMatches,
    })
    const xTitle = classNames(classes.xTitle, {
        [classes.xTitle_mobile]: maxMatches,
        [classes.xTitle_web]: minMatches,
    })
    return (
        <div className={harmful}>
            <span className={title}>
                Главным преимуществом употребления талой <br/>
                воды становится ее <span className={classes.underLine}>чистота.</span>
            </span>
            <span className={subTitle}>В ней полностью отсутствуют</span>
            <ArrowDown className={arrowIcon}/>
            <div className={xArea}>
                {
                    xItems.map((el, index) => (
                        <div className={classes.xItem} key={index}>
                            <X className={xLogo}/>
                            <div className={xTitle}>{el}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default HarmfulPart;