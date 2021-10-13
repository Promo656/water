import React from 'react';
import {ReactComponent as Logo69} from "../../assets/logo/69logo.svg";
import {ReactComponent as Parallel} from "../../assets/logo/paralel.svg";
import {makeStyles} from "@material-ui/core";
import {Slider} from "../../components/carousel/carousel";
import NewCarousel from "../../components/carousel/newCarousel";
import CarouselMui from "../../components/carousel/carouselMUI";

const useStyles = makeStyles((theme) => ({
        carouselPage: {
            // height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom:100
        },
        title: {
            fontFamily: "Inglobal",
            fontSize: 40,
            marginBottom: 80
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
            alignItems: "flex-start",
            marginLeft: 50
        },
        informationText: {
            fontFamily: "Inglobal",
            fontSize: 18,
            letterSpacing: 2
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
            <div>
                <CarouselMui/>
            </div>
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