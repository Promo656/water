import React from 'react';
import {makeStyles, Button} from "@material-ui/core";
import {ReactComponent as FooterIcon} from "../../assets/logo/footerIcon.svg";

const useStyles = makeStyles((theme) => ({
        footer: {
            height: 221,
            backgroundColor: "#FBFBFB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        footerWrap: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        footerIcon: {
            marginRight: 30
        },
        infoArea: {
            display: "flex",
            flexDirection: "column",
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
            marginRight: 126
        },
        button: {
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
        reRoot: {
            textTransform: "none"
        }
    }),
);


function Footer() {
    const classes = useStyles()
    return (
        <div className={classes.footer}>
            <div className={classes.footerWrap}>
                <FooterIcon className={classes.footerIcon}/>
                <div className={classes.infoArea}>
                    <span className={classes.text} style={{marginBottom: 17}}>Email: 1@69paralel.ru</span>
                    <span className={classes.text} style={{marginBottom: 17}}>Телефон: +7(8152)65-25-50</span>
                    <span className={classes.text}>Адрес: Мурманская область, <br/> Кольский район,поселок Пушной</span>
                </div>
                <div className={classes.linksArea}>
                    <span className={classes.text} style={{marginBottom: 20}}>О компании</span>
                    <span className={classes.text} style={{marginBottom: 20}}>Партнеры</span>
                    <span className={classes.text}>Производство</span>
                </div>
                <div>
                    <Button
                        className={classes.button}
                        classes={{root: classes.reRoot}}
                    >
                        Заказать звонок
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Footer;