import React from 'react';
import {makeStyles} from "@material-ui/core";
import buyLogo from "../../assets/photo/logo2.png"
import useMediaQuery from "@mui/material/useMediaQuery";
import classNames from "classnames";
import StyledButton from "../../components/button/styledButton";

const useStyles = makeStyles((theme) => ({
        buyPart: {
            width: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center"
        },
        buyPart_mobile: {
            height: "100%",
            justifyContent: "center",
            marginBottom: 60
        },
        buyPart_web: {
            height: "100vh",
            justifyContent: "flex-end"
        },
        wrap: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        title: {
            fontFamily: "Inglobal",
            letterSpacing: 2,
            marginBottom: 60,
        },
        title_mobile: {
            fontSize: 24,
            color: "black",
        },
        title_web: {
            fontSize: 36,
            color: "white"
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
        },
        buyArea_mobile: {
            flexDirection: "column",
            '&>:nth-child(1)': {
                margin: "0 0 60px 0"
            },
            '&>:nth-child(2)': {
                marginBottom: "60px"
            },
            '&>:nth-child(3)': {
                margin: "0 0 60px 0"
            },
            '&>:nth-child(4)': {
                marginBottom: "40px"
            }
        },
        buyArea_web: {
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
    const minMatches = useMediaQuery('(min-width:376px)');
    const maxMatches = useMediaQuery('(max-width:376px)');
    const buyArea = classNames(classes.buyArea, {
        [classes.buyArea_mobile]: maxMatches,
        [classes.buyArea_web]: minMatches,
    })
    const buyPart = classNames(classes.buyPart, {
        [classes.buyPart_mobile]: maxMatches,
        [classes.buyPart_web]: minMatches,
    })
    const title = classNames(classes.title, {
        [classes.title_mobile]: maxMatches,
        [classes.title_web]: minMatches,
    })
    return (
        <>
            {minMatches && <img className={classes.image} src={buyLogo} alt=""/>}
            <div className={buyPart}>
                <div className={classes.wrap}>
                    <div className={title}>Выбери свой объем</div>
                    <div className={buyArea}>
                        {
                            values.map((el, index) => (
                                <div key={index} className={classes.buyIcon}>
                                    <span className={classes.buyText}>{el}</span>
                                </div>
                            ))
                        }
                    </div>
                    <StyledButton title="Купить" btnColor="#DA442B"/>
                </div>
            </div>
        </>

    );
}

export default BuyPart;