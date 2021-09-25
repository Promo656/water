import React from 'react';
import {makeStyles} from "@material-ui/core";
import buyLogo from "../../assets/photo/logo2.png"

const useStyles = makeStyles((theme) => ({
        buyPart: {
            height: "100vh",
            width: "100%",
            position: "relative"
        },
        image: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: -1
        },
        buyArea: {
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            width: 800,
            '&>:nth-child(1)': {
                margin: "0 70px 60px 0"
            },
            '&>:nth-child(2)': {
                marginBottom: "60px"
            },
            '&>:nth-child(3)': {
                margin: "0 70px 60px 0"
            },
            '&>:nth-child(4)': {
                marginBottom: "60px"
            }
        },
        buyIcon: {
            width: 276,
            height: 188,
            backgroundColor: "#F0F0F3",
            borderRadius: 23,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        buyText: {
            fontFamily: "Inglobal",
            fontSize: 36,
            letterSpacing: 2,
            lineHeight: "54px",
        }
    }),
);

const values = [
    "0,6 литра",
    "1,5 литра",
    "5 литров",
    "19 литров"
]

function BuyPart() {
    const classes = useStyles()
    return (
        <div className={classes.buyPart}>
            <img className={classes.image} src={buyLogo} alt=""/>
            <div className={classes.buyArea}>
                {
                    values.map((el, index) => (
                        <div key={index} className={classes.buyIcon}>
                            <span className={classes.buyText}>{el}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default BuyPart;