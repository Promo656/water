import React from 'react';
import {makeStyles, Button} from "@material-ui/core";
import {ReactComponent as FooterIcon} from "../../assets/logo/footerIcon.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
        footer: {
            backgroundColor: "#FBFBFB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        footer_web: {
            height: 221
        },
        footerWrap: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        footerWrap_mobile: {
            flexDirection: "column"
        },
        footerIcon: {
            marginRight: 30
        },
        infoArea: {
            display: "flex",
            flexDirection: "column",
        },
        infoArea_mobile: {
            order: 1,
            marginBottom: 40
        },
        infoArea_web: {
            marginRight: 85
        },
        text: {
            fontFamily: "Inglobal",
            fontSize: 14,
            letterSpacing: 2
        },
        linksArea: {
            display: "flex",
            flexDirection: "column",
        },
        linksArea_mobile: {
            width: "100%",
            marginBottom: 20
        },
        linksArea_web: {
            marginRight: 126
        },
        button: {
            order: 1,
            width: 209,
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            border: "1px solid #DA442B",
            borderRadius: 9,
            color: "black",
            fontFamily: "Yrsa",
            '&:hover': {
                background: "#FBFBFB",
            }
        },
        button_mobile: {
            marginBottom: 40
        },
        reRoot: {
            textTransform: "none"
        }
    }),
);


function Footer() {
    const classes = useStyles()
    const minMatches = useMediaQuery('(min-width:376px)');
    const maxMatches = useMediaQuery('(max-width:376px)');
    const footer = classNames(classes.footer, {
        [classes.footer_web]: minMatches
    })
    const footerWrap = classNames(classes.footerWrap, {
        [classes.footerWrap_mobile]: maxMatches
    })
    const infoArea = classNames(classes.infoArea, {
        [classes.infoArea_mobile]: maxMatches,
        [classes.infoArea_web]: minMatches
    })
    const linksArea = classNames(classes.linksArea, {
        [classes.linksArea_mobile]: maxMatches,
        [classes.linksArea_web]: minMatches
    })
    const button = classNames(classes.button, {
        [classes.button_mobile]: maxMatches
    })
    return (
        <div className={footer}>
            <div className={footerWrap}>
                {minMatches && <FooterIcon className={classes.footerIcon}/>}
                <div className={infoArea}>
                    <span className={classes.text} style={{marginBottom: 17}}>Email: 1@69paralel.ru</span>
                    <span className={classes.text} style={{marginBottom: 17}}>Телефон: +7(8152)65-25-50</span>
                    <span className={classes.text} style={{marginBottom: 20}}>Адрес: Мурманская область, <br/> Кольский район,поселок Пушной</span>
                    {maxMatches && <div style={{border: "1px solid #075AB4", width: "100%"}}></div>}
                </div>
                <div className={linksArea}>
                    <div className={classes.text} style={{marginBottom: 20}}>О компании</div>
                    <div className={classes.text} style={{marginBottom: 20}}>Партнеры</div>
                    <div className={classes.text} style={{marginBottom: 20}}>Производство</div>
                    {maxMatches && <div style={{border: "1px solid #075AB4", width: "100%"}}></div>}
                </div>
                <Button
                    className={button}
                    classes={{root: classes.reRoot}}
                >
                    Заказать звонок
                </Button>
            </div>
        </div>
    );
}

export default Footer;