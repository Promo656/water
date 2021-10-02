import React from 'react';
import {makeStyles} from "@material-ui/core";
import image from "../../assets/photo/logo6.png"
import {ReactComponent as Logo} from "../../assets/logo/logo1.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Resolution} from "../../const";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
        about: {
            height: "100vh",
            width: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        imageLogo: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: -1
        },
        box: {
            backgroundColor: "#F0F0F3",
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        box_mobile: {
            width: 280,
            height: 418
        },
        box_web: {
            width: 1110,
            height: 486
        },
        textArea: {
            display: "flex",
            flexDirection: "column",
        },
        boxTitle: {
            fontFamily: "Inglobal"
        },
        boxTitle_mobile: {
            fontSize: 14,
            lineHeight: "20px",
            marginBottom: 20,
            textAlign: "center"
        },
        boxTitle_web: {
            fontSize: 30,
            lineHeight: "30px",
            marginBottom: 48
        },
        boxSubtitle: {
            fontFamily: "Inglobal",
        },
        boxSubtitle_mobile: {
            fontSize: 14,
            lineHeight: "28px"
        },
        boxSubtitle_web: {
            fontSize: 24,
            lineHeight: "40px"
        }
    }),
);

function AboutPart() {
    const classes = useStyles()
    const minMatches = useMediaQuery(Resolution.min);
    const maxMatches = useMediaQuery(Resolution.max);
    const box = classNames(classes.box, {
        [classes.box_mobile]: maxMatches,
        [classes.box_web]: minMatches,
    })
    const boxTitle = classNames(classes.boxTitle, {
        [classes.boxTitle_mobile]: maxMatches,
        [classes.boxTitle_web]: minMatches,
    })
    const boxSubtitle = classNames(classes.boxSubtitle, {
        [classes.boxSubtitle_mobile]: maxMatches,
        [classes.boxSubtitle_web]: minMatches,
    })

    return (
        <div className={classes.about}>
            <img className={classes.imageLogo} src={image} alt=""/>
            <div className={box}>
                <div className={classes.textArea}>
                    {
                        maxMatches
                            ? <span className={boxTitle}>Качество воды – наше <span
                                style={{color: "#075AB4"}}>главное <br/> преимущество.</span></span>
                            : <span className={boxTitle}>Качество воды – наше <span style={{color: "#075AB4"}}>главное преимущество.</span></span>
                    }
                    {
                        maxMatches
                            ? <span className={boxSubtitle}>
                                ООО «Вода Севера» начало свою <br/>
                                деятельность в 2017 году. <br/>
                                От строительства завода до выпуска <br/>
                                первых партий бутилированной воды, <br/>
                                мы провели трудоемкую работу <br/>
                                по выявлению уникального состава <br/>
                                воды, ее полезных и важных <br/>
                                для организма человаека свойств. <br/>
                                В 2021 году был осуществлен запуск <br/>
                                завода и организованы первые <br/>
                                поставки.
                    </span>
                            : <span className={boxSubtitle}>
                        ООО «Вода Севера» начало свою деятельность в 2017 <br/>
                        году. От строительства завода до выпуска первых партий <br/>
                        бутилированной воды, мы провели трудоемкую работу <br/>
                        по выявлению уникального состава воды, ее полезных <br/>
                        и важных для организма человаека свойств . В 2021 году <br/>
                        был осуществлен запуск завода и организованы первые <br/>
                        поставки.
                    </span>
                    }
                </div>
                {minMatches && <Logo/>}
            </div>
        </div>
    );
}

export default AboutPart;