import React from 'react';
import {makeStyles} from "@material-ui/core";
import logo from "../../assets/photo/logo4.png"

const useStyles = makeStyles((theme) => ({
        container: {
            position: "relative",
            height: 903,
            background: 'linear-gradient(180deg, #075AB4 0%, rgba(7, 90, 180, 0) 100%)',
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
        },
        title: {
            position: "absolute",
            zIndex: 1,
            right: "10%",
            top: "-5%",
            width: 736,
            height: 94,
            borderRadius: 10,
            backgroundColor: "#F0F0F3",
            fontFamily: "Inglobal",
            fontSize: 40,
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        logo: {
            width: 390,
            height: 657
        },
        leftContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            height: 650
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
            justifyContent: "space-between",
            width: 330
        },
        itemText: {
            fontFamily: "Inglobal",
            fontSize: 24,
            color: "white"
        }
    }),
);

function ContainerPart() {
    const classes = useStyles()
    return (
        <div style={{position: "relative"}}>
            <div className={classes.title}>
                Убедитесь в уникальности состава
            </div>
            <div className={classes.container}>
                <div className={classes.leftContainer}>
                    <div className={classes.leftItem}>
                        <div className={classes.dot}></div>
                        <div className={classes.textWrap}>
                            <span className={classes.itemText}>Хлориды /CL -</span>
                            <span className={classes.itemText}>&lt; 150</span>
                        </div>
                    </div>
                    <div className={classes.leftItem}>
                        <div className={classes.dot}></div>
                        <div className={classes.textWrap}>
                            <span className={classes.itemText}>Кальций /Ca²+</span>
                            <span className={classes.itemText}>25-80</span>
                        </div>
                    </div>
                    <div className={classes.leftItem}>
                        <div className={classes.dot}></div>
                        <div className={classes.textWrap}>
                            <span className={classes.itemText}>Сульфаты /SO4²+</span>
                            <span className={classes.itemText}>&lt; 150</span>
                        </div>
                    </div>
                    <div className={classes.leftItem}>
                        <div className={classes.dot}></div>
                        <div className={classes.textWrap}>
                            <span className={classes.itemText}>Калий /K+ </span>
                            <span className={classes.itemText}>&lt; 20</span>
                        </div>
                    </div>
                </div>
                <img className={classes.logo} src={logo} alt=""/>
                <div className={classes.leftContainer}>
                    <div className={classes.leftItem}>
                        <div className={classes.dot}></div>
                        <div className={classes.textWrap}>
                            <span className={classes.itemText}>Магний /Mg²+</span>
                            <span className={classes.itemText}>5-50</span>
                        </div>
                    </div>
                    <div className={classes.leftItem}>
                        <div className={classes.dot}></div>
                        <div className={classes.textWrap}>
                            <span className={classes.itemText}>Натрий /Na+</span>
                            <span className={classes.itemText}>&lt; 200</span>
                        </div>
                    </div>
                    <div className={classes.leftItem}>
                        <div className={classes.dot}></div>
                        <div className={classes.textWrap}>
                            <span className={classes.itemText}>Общая <br/> минерализация</span>
                            <span className={classes.itemText}>100-500 мг/л</span>
                        </div>
                    </div>
                    <div className={classes.leftItem}>
                        <div className={classes.dot}></div>
                        <div className={classes.textWrap}>
                            <span className={classes.itemText}>Общая <br/> жесткость</span>
                            <span className={classes.itemText}>1,5-7 мг-экв./л</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContainerPart;