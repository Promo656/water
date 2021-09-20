import React from 'react';
import {ReactComponent as Logo69} from "../../assets/logo/69Logo.svg";
import {ReactComponent as Parallel} from "../../assets/logo/paralel.svg";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
        carouselPage: {
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        title: {
            fontFamily: "Inglobal",
            fontSize: 40
        },
        informationWrap: {
            display: "flex",
            alignItems: "center",

        },
        leftInfo: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            marginRight: 50
        },
        rightInfo: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            marginLeft: 50
        },
        informationText: {
            fontFamily: "Inglobal",
            fontSize: 18
        },
        leftLogo: {
            marginBottom: 50
        },
        rightLogo: {
            marginTop: 20
        }
    }),
);

function CarouselPart() {
    const classes = useStyles()
    return (
        <div className={classes.carouselPage}>
            <span className={classes.title}>Уникальный состав для тебя</span>
            <div className={classes.informationWrap}>
                <div className={classes.leftInfo}>
                    <Logo69 className={classes.leftLogo}/>
                    <span className={classes.informationText}>Талая вода - оптимально сбалансированна, <br/> содержит все необходимые макро и микроэлементы</span>
                </div>
                <div className={classes.rightInfo}>
                    <span className={classes.informationText}>
                        Польза талой воды для организма выражается в <br/>
                        следующем: ускорение обменных процессов, удаление из <br/>
                        организма токсинов и шлаков, укрепление иммунитета, <br/>
                        улучшение пищеварения, повышение работоспособности, <br/>
                        улучшение сна.
                    </span>
                    <Parallel className={classes.rightLogo}/>
                </div>
            </div>
        </div>
    );
}

export default CarouselPart;