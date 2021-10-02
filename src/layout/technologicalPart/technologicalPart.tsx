import React from 'react';
import {makeStyles} from "@material-ui/core";
import {ReactComponent as VerticalLine} from "../../assets/logo/verticalLine.svg";
import {ReactComponent as ArrowDown} from "../../assets/logo/arrowDown2.svg";
import {ReactComponent as ArrowDownMobile} from "../../assets/logo/arrowDown3.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Resolution} from "../../const";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
        technological: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        title: {
            fontFamily: "Inglobal",
        },
        title_mobile: {
            fontFamily: "Inglobal",
            fontSize: 18,
            margin: "60px 0 80px"
        },
        title_web: {
            fontSize: 40,
            margin: "150px 0 80px"
        },
        box: {
            backgroundColor: "#F0F0F3",
            borderRadius: 20,
            boxShadow: "10px 10px 30px 0px rgba(174, 174, 192, 0.4), -10px -10px 30px 0px rgba(255, 255, 255, 1)",
            display: "flex",
        },
        box_mobile: {
            width: 280,
            height: 222,
            marginBottom: 40,
            padding: "30px 0"
        },
        box_web: {
            width: 736,
            height: 340,
            marginBottom: 60
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
            justifyContent: "space-between"
        },
        textWrap_mobile: {
            display: "flex",
            flexDirection: "column",
            alignSelf: "stretch",
            justifyContent: "space-between"
        },
        textWrap_web: {
            display: "flex",
            flexDirection: "column",
            alignSelf: "stretch",
            justifyContent: "space-between",
            marginRight: 120
        },
        boxText: {
            fontFamily: "Inglobal"
        },
        boxText_mobile: {
            fontSize: 14
        },
        boxText_web: {
            fontSize: 24
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
            alignItems: "center"
        },
        circleArea_mobile: {
            flexDirection: 'column',
            marginBottom: 40
        },
        circleArea_web: {
            marginBottom: 80
        },
        circle: {
            borderRadius: "100%",
            backgroundColor: "#075AB4",
            boxShadow: "0px 4px 30px 0px rgba(7, 90, 180, 0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        circle_mobile: {
            width: 280,
            height: 280
        },
        circle_web: {
            width: 596,
            height: 596,
            margin: "0 60px"
        },
        circleTitle: {
            fontFamily: "Inglobal",
            color: "white",
            margin: "100px 0 30px",
        },
        circleTitle_mobile: {
            fontSize: 18,
            lineHeight: "20px",
            margin: "60px 0 20px",
        },
        circleTitle_web: {
            fontSize: 36,
            margin: "100px 0 30px",
        },
        circleSubTitle: {
            fontFamily: "Inglobal",
            textAlign: "center",
            color: "white",
        },
        circleSubTitle_mobile: {
            fontSize: 14,
            marginTop: 20
        },
        circleSubTitle_web: {
            fontSize: 24,
            marginTop: 30
        },
        subTitle: {
            textAlign: "center",
            fontFamily: "Inglobal",
        },
        subTitle_mobile: {
            lineHeight: "26px",
            fontSize: 14,
            marginBottom: 40
        },
        subTitle_web: {
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
    const minMatches = useMediaQuery(Resolution.min);
    const maxMatches = useMediaQuery(Resolution.max);
    const title = classNames(classes.title, {
        [classes.title_mobile]: maxMatches,
        [classes.title_web]: minMatches,
    })
    const box = classNames(classes.box, {
        [classes.box_mobile]: maxMatches,
        [classes.box_web]: minMatches,
    })
    const boxText = classNames(classes.boxText, {
        [classes.boxText_mobile]: maxMatches,
        [classes.boxText_web]: minMatches,
    })
    const textWrap = classNames(classes.textWrap, {
        [classes.textWrap_mobile]: maxMatches,
        [classes.textWrap_web]: minMatches,
    })
    const circle = classNames(classes.circle, {
        [classes.circle_mobile]: maxMatches,
        [classes.circle_web]: minMatches,
    })
    const circleArea = classNames(classes.circleArea, {
        [classes.circleArea_mobile]: maxMatches,
        [classes.circleArea_web]: minMatches,
    })
    const circleTitle = classNames(classes.circleTitle, {
        [classes.circleTitle_mobile]: maxMatches,
        [classes.circleTitle_web]: minMatches,
    })
    const circleSubTitle = classNames(classes.circleSubTitle, {
        [classes.circleSubTitle_mobile]: maxMatches,
        [classes.circleSubTitle_web]: minMatches,
    })
    const subTitle = classNames(classes.subTitle, {
        [classes.subTitle_mobile]: maxMatches,
        [classes.subTitle_web]: minMatches,
    })
    return (
        <div className={classes.technological}>
            <span className={title}>Наша технологическая цепочка</span>
            <div className={box}>
                <div className={classes.wrap}>
                    <VerticalLine/>
                    <div className={textWrap}>
                        <span className={boxText}>Добыча воды из скважины</span>
                        <span className={boxText}>Система водоподготовки</span>
                        <span className={boxText}>Система по розливу воды</span>
                    </div>
                </div>
            </div>
            <div className={classes.linesArea}>
                {
                    minMatches
                        ? <>
                            <VerticalLine className={classes.leftLine}/>
                            <VerticalLine className={classes.rightLine}/>
                        </>
                        : <VerticalLine/>
                }
            </div>
            <div className={circleArea}>
                <div className={circle}>
                    <span className={circleTitle}>Очищение</span>
                    {maxMatches ? <ArrowDownMobile/> : <ArrowDown/>}
                    <span className={circleSubTitle}>механический фильтр, угольный <br/>и обеззараживание ультрафиолетом</span>
                </div>
                {maxMatches && <VerticalLine style={{margin: "40px 0"}}/>}
                <div className={circle}>
                    <span className={circleTitle}>Фильтрация</span>
                    {maxMatches ? <ArrowDownMobile/> : <ArrowDown/>}
                    <span className={circleSubTitle}>не используется система <br/>обратного осмоса</span>
                </div>
            </div>
            {
                maxMatches ?
                    <span className={subTitle}>
                    При производстве используется<br/>
                        современное оборудование, а также <br/>
                        автоматизированная <span className={classes.underLine}>система контроля всех <br/>
                        технологических этапов</span> производства.
                </span> :
                    <span className={subTitle}>
                    При производстве используется современное <br/>
                    оборудование, а также автоматизированная <span className={classes.underLine}>система</span> <br/>
                   <span className={classes.underLine}>контроля всех технологических этапов</span> производства.
                </span>
            }
        </div>
    );
}

export default TechnologicalPart;