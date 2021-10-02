import React from 'react';
import {makeStyles} from "@material-ui/core";
import image from "../../assets/photo/logo7.png"
import useMediaQuery from "@mui/material/useMediaQuery";
import {Resolution} from "../../const";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
        suppliers: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        title: {
            fontFamily: "Inglobal"
        },
        title_mobile: {
            fontSize: 18,
            margin: "60px 0 100px"
        },
        title_web: {
            fontSize: 40,
            margin: "150px 0 300px"
        },
        cardInfo: {
            backgroundColor: "#075AB4",
            borderRadius: 10,
            boxShadow: "0px 4px 30px rgba(7, 90, 180, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        cardInfo_mobile: {
            width: 250,
            height: 262,
            margin: "-70px 40px 40px"
        },
        cardInfo_web: {
            width: 450,
            height: 443,
            margin: "-70px 100px 0 78px"
        },
        cardText: {
            fontFamily: "Inglobal",
            textAlign: "center",
            color: "white"
        },
        cardText_mobile: {
            fontSize: 14,
            lineHeight: "25px",
        },
        cardText_web: {
            fontSize: 26,
            lineHeight: "45px",
        },
        logo_mobile: {
            width: 180,
            height: 227,
            position: "absolute",
            bottom: -95
        },
        logo_web: {
            width: 560,
            height: 707,
            margin: "-240px 80px 0 0"
        },
        wrap: {
            display: "flex",
            border: "1px solid #DA442B",

        },
        wrap_mobile: {
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            height: 360
        },
        wrap_web: {
            height: 603
        },
    })
);

function SuppliersPart() {
    const classes = useStyles()
    const minMatches = useMediaQuery(Resolution.min);
    const maxMatches = useMediaQuery(Resolution.max);

    const title = classNames(classes.title, {
        [classes.title_mobile]: maxMatches,
        [classes.title_web]: minMatches,
    })
    const cardText = classNames(classes.cardText, {
        [classes.cardText_mobile]: maxMatches,
        [classes.cardText_web]: minMatches,
    })
    const cardInfo = classNames(classes.cardInfo, {
        [classes.cardInfo_mobile]: maxMatches,
        [classes.cardInfo_web]: minMatches,
    })
    const logo = classNames({
        [classes.logo_mobile]: maxMatches,
        [classes.logo_web]: minMatches,
    })
    const wrap = classNames(classes.wrap, {
        [classes.wrap_mobile]: maxMatches,
        [classes.wrap_web]: minMatches,
    })
    return (
        <div className={classes.suppliers}>
            <span className={title}>Наши поставщики</span>
            <div style={{border: "1px solid #DA442B", padding: "5px", marginBottom: "100px"}}>
                <div className={wrap}>
                    <div className={cardInfo}>
                            <span className={cardText}>
                                Мы не осуществляем прямые <br/>
                                продажи бутилированной воды. <br/>
                                Для выполенения этой миссии <br/>
                                мы сотрудничаем с диллерами, <br/>
                                которые осуществляют <br/>
                                поставки - ООО «Юг Аква <br/>
                                Сервис» и ООО «Катруся».
                            </span>
                    </div>
                    <img className={logo} src={image} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default SuppliersPart;