import React from 'react';
import {makeStyles} from "@material-ui/core";
import {ReactComponent as VerticalLine} from "../../assets/logo/verticalLine.svg";

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
            // lineHeight: 36
        }
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
        </div>
    );
}

export default TechnologicalPart;