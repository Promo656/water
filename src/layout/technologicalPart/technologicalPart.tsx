import React from 'react';
import {makeStyles} from "@material-ui/core";
import {ReactComponent as VerticalLine} from "../../assets/logo/verticalLine.svg";
import {ReactComponent as ArrowDown} from "../../assets/logo/arrowDown2.svg";

const useStyles = makeStyles((theme) => ({
        technological: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        title: {
            fontFamily: "Inglobal",
            fontSize: 40,
            margin: "150px 0 80px"
        },
        box: {
            width: 736,
            height: 340,
            backgroundColor: "#F0F0F3",
            borderRadius: 20,
            boxShadow: "10px 10px 30px 0px rgba(174, 174, 192, 0.4), -10px -10px 30px 0px rgba(255, 255, 255, 1)",
            marginBottom: 60,
            display: "flex",
        },
        wrap: {
            width: "100%",
            display: "flex",
            alignSelf: "center",
            justifyContent: "space-around"
        },
        textWrap: {
            display: "flex",
            flexDirection: "column",
            alignSelf: "stretch",
            justifyContent: "space-between",
            marginRight: 120
        },
        boxText: {
            fontFamily: "Inglobal",
            fontSize: 24,
        },
        linesArea: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 60
        },
        leftLine: {
            transform: "rotate(30deg)",
            padding: "0 200px"
        },
        rightLine: {
            transform: "rotate(330deg)",
            padding: "0 200px"
        },
        circleArea: {
            display: "flex",
            alignItems: "center",
            marginBottom: 80
        },
        circle: {
            width: 596,
            height: 596,
            borderRadius: "100%",
            backgroundColor: "#075AB4",
            boxShadow: "0px 4px 30px 0px rgba(7, 90, 180, 0.3)",
            margin: "0 60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        circleTitle: {
            fontFamily: "Inglobal",
            fontSize: 36,
            color: "white",
            margin: "100px 0 30px",
        },
        circleSubTitle: {
            fontFamily: "Inglobal",
            fontSize: 24,
            textAlign: "center",
            color: "white",
            marginTop: 30
        },
        subTitle: {
            textAlign: "center",
            fontFamily: "Inglobal",
            fontSize: 36,
            marginBottom: 150
        },
        underLine: {
            borderBottom: "2px solid #DA442B"
        },
    }),
);

function TechnologicalPart() {
    const classes = useStyles()
    return (
        <div className={classes.technological}>
            <span className={classes.title}>Наша технологическая цепочка</span>
            <div className={classes.box}>
                <div className={classes.wrap}>
                    <VerticalLine/>
                    <div className={classes.textWrap}>
                        <span className={classes.boxText}>Добыча воды из скважины</span>
                        <span className={classes.boxText}>Система водоподготовки</span>
                        <span className={classes.boxText}>Система по розливу воды</span>
                    </div>
                </div>
            </div>
            <div className={classes.linesArea}>
                <VerticalLine className={classes.leftLine}/>
                <VerticalLine className={classes.rightLine}/>
            </div>
            <div className={classes.circleArea}>
                <div className={classes.circle}>
                    <span className={classes.circleTitle}>Очищение</span>
                    <ArrowDown/>
                    <span className={classes.circleSubTitle}>механический фильтр, угольный <br/>и обеззараживание ультрафиолетом</span>
                </div>
                <div className={classes.circle}>
                    <span className={classes.circleTitle}>Фильтрация</span>
                    <ArrowDown/>
                    <span className={classes.circleSubTitle}>не используется система <br/>обратного осмоса</span>
                </div>
            </div>
            <span className={classes.subTitle}>
                    При производстве используется современное <br/>
                    оборудование, а также автоматизированная <span className={classes.underLine}>система</span> <br/>
                   <span className={classes.underLine}>контроля всех технологических этапов</span> производства.
                </span>
        </div>
    );
}

export default TechnologicalPart;