import React from 'react';
import {makeStyles} from "@material-ui/core";
import mainLogo from "../../assets/photo/logo4.png"
import useMediaQuery from "@mui/material/useMediaQuery";
import {Resolution} from "../../const";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
        container: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
        },
        container_mobile: {
            height: 820,
            flexDirection: "column",
            background: 'linear-gradient(180deg, #075AB4 0%, rgba(7, 90, 180, 0) 200%)',
        },
        container_web: {
            height: 903,
            background: 'linear-gradient(180deg, #075AB4 0%, rgba(7, 90, 180, 0) 100%)',
        },
        title: {
            position: "absolute",
            zIndex: 1,
            borderRadius: 10,
            backgroundColor: "#F0F0F3",
            fontFamily: "Inglobal",
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        title_mobile: {
            right: 0,
            top: "-5%",
            width: "100%",
            height: 62,
            fontSize: 18
        },
        title_web: {
            right: "10%",
            top: "-5%",
            width: 736,
            height: 94,
            fontSize: 40
        },
        logo_mobile: {
            width: 170,
            height: 286
        },
        logo_web: {
            width: 390,
            height: 657
        },
        leftContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        },
        leftContainer_mobile: {
            height: 160,
            alignSelf: "flex-start",
            marginLeft: 30,
            '&:nth-child(1)': {
                marginTop: 50
            },
            '&:nth-child(3)': {
                marginBottom: 100
            }
        },
        leftContainer_web: {
            height: 500
        },
        leftItem: {
            display: "flex",
            alignItems: "center",
        },
        dot: {
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: "#DA442B",
            marginRight: 20
        },
        textWrap: {
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between"
        },
        textWrap_mobile: {
            width: 195
        },
        textWrap_web: {
            width: 330
        },
        itemText: {
            fontFamily: "Inglobal",
            color: "white"
        },
        itemText_mobile: {
            fontSize: 14,
        },
        itemText_web: {
            fontSize: 24,
        }
    }),
);

function ContainerPart() {
    const classes = useStyles()
    const minMatches = useMediaQuery(Resolution.min);
    const maxMatches = useMediaQuery(Resolution.max);
    const title = classNames(classes.title, {
        [classes.title_mobile]: maxMatches,
        [classes.title_web]: minMatches,
    })
    const logo = classNames({
        [classes.logo_mobile]: maxMatches,
        [classes.logo_web]: minMatches,
    })
    const container = classNames(classes.container, {
        [classes.container_mobile]: maxMatches,
        [classes.container_web]: minMatches,
    })
    const itemText = classNames(classes.itemText, {
        [classes.itemText_mobile]: maxMatches,
        [classes.itemText_web]: minMatches,
    })
    const leftContainer = classNames(classes.leftContainer, {
        [classes.leftContainer_mobile]: maxMatches,
        [classes.leftContainer_web]: minMatches,
    })
    const textWrap = classNames(classes.textWrap, {
        [classes.textWrap_mobile]: maxMatches,
        [classes.textWrap_web]: minMatches,
    })
    return (
        <div style={{position: "relative"}}>
            <div className={title}>
                Убедитесь в уникальности состава
            </div>
            <div className={container}>
                <div className={leftContainer}>
                    <div className={classes.leftItem}>
                        <div className={classes.dot}></div>
                        <div className={textWrap}>
                            <span className={itemText}>Хлориды /CL -</span>
                            <span className={itemText}>&lt; 150</span>
                        </div>
                    </div>
                    <div className={classes.leftItem}>
                        <div className={classes.dot}></div>
                        <div className={textWrap}>
                            <span className={itemText}>Кальций /Ca²+</span>
                            <span className={itemText}>25-80</span>
                        </div>
                    </div>
                    <div className={classes.leftItem}>
                        <div className={classes.dot}></div>
                        <div className={textWrap}>
                            <span className={itemText}>Сульфаты /SO4²+</span>
                            <span className={itemText}>&lt; 150</span>
                        </div>
                    </div>
                    <div className={classes.leftItem}>
                        <div className={classes.dot}></div>
                        <div className={textWrap}>
                            <span className={itemText}>Калий /K+ </span>
                            <span className={itemText}>&lt; 20</span>
                        </div>
                    </div>
                </div>
                <img className={logo} src={mainLogo} alt=""/>
                <div className={leftContainer}>
                    <div className={classes.leftItem}>
                        <div className={classes.dot}></div>
                        <div className={textWrap}>
                            <span className={itemText}>Магний /Mg²+</span>
                            <span className={itemText}>5-50</span>
                        </div>
                    </div>
                    <div className={classes.leftItem}>
                        <div className={classes.dot}></div>
                        <div className={textWrap}>
                            <span className={itemText}>Натрий /Na+</span>
                            <span className={itemText}>&lt; 200</span>
                        </div>
                    </div>
                    <div className={classes.leftItem}>
                        <div className={classes.dot}></div>
                        <div className={textWrap}>
                            <span className={itemText}>Общая <br/> минерализация</span>
                            <span className={itemText}>100-500 мг/л</span>
                        </div>
                    </div>
                    <div className={classes.leftItem}>
                        <div className={classes.dot}></div>
                        <div className={textWrap}>
                            <span className={itemText}>Общая <br/> жесткость</span>
                            <span className={itemText}>1,5-7 мг-экв./л</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContainerPart;