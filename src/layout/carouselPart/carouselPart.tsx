import React from 'react';
import {ReactComponent as Logo69} from "../../assets/logo/69logo.svg";
import {ReactComponent as Parallel} from "../../assets/logo/paralel.svg";
import {makeStyles} from "@material-ui/core";
import CarouselMui from "../../components/carousel/carouselMUI";
import classNames from "classnames";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Resolution} from "../../const";

const useStyles = makeStyles((theme) => ({
        carouselPage: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        carouselPage_mobile: {
            marginBottom: 60
        },
        carouselPage_web: {
            marginBottom: 100
        },
        title: {
            fontFamily: "Inglobal",
        },
        title_mobile: {
            fontSize: 24,
            marginBottom: 30,
            textAlign: "center"
        },
        title_web: {
            fontSize: 40,
            marginBottom: 80
        },
        informationWrap: {
            display: "flex",
            alignItems: "center",
        },
        informationWrap_mobile: {
            flexDirection: "column",
            width: "100%"
        },
        leftInfo: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
        },
        leftInfo_web: {
            marginRight: 50
        },
        rightInfo: {
            display: "flex",
            flexDirection: "column"
        },
        rightInfo_mobile: {
            alignItems: "center",
            width: "100%"
        },
        rightInfo_web: {
            marginLeft: 50
        },
        informationText: {
            fontFamily: "Inglobal",
            letterSpacing: 2
        },
        informationText_mobile: {
            fontSize: 12,
            lineHeight: "20px"
        },
        informationText_web: {
            fontSize: 18,
            lineHeight: "30px"
        },
        leftLogo_mobile: {
            width: 84,
            height: 56,
            marginBottom: 40
        },
        leftLogo_web: {
            width: 185,
            height: 122,
            marginBottom: 50
        },
        rightLogo_mobile: {
            width: 280,
            height: 43,
            marginBottom: 40
        },
        rightLogo_web: {
            width: 461,
            height: 65,
            marginTop: 20
        },
        wrap_mobile: {
            width: "100%"
        }
    }),
);

function CarouselPart() {
    const classes = useStyles()
    const minMatches = useMediaQuery(Resolution.min);
    const maxMatches = useMediaQuery(Resolution.max);
    const carouselPage = classNames(classes.carouselPage, {
        [classes.carouselPage_mobile]: maxMatches,
        [classes.carouselPage_web]: minMatches,
    })
    const title = classNames(classes.title, {
        [classes.title_mobile]: maxMatches,
        [classes.title_web]: minMatches,
    })
    const informationText = classNames(classes.informationText, {
        [classes.informationText_mobile]: maxMatches,
        [classes.informationText_web]: minMatches,
    })
    const leftInfo = classNames(classes.leftInfo, {
        [classes.leftInfo_web]: minMatches
    })
    const rightInfo = classNames(classes.rightInfo, {
        [classes.rightInfo_mobile]: maxMatches,
        [classes.rightInfo_web]: minMatches
    })
    const leftLogo = classNames({
        [classes.leftLogo_mobile]: maxMatches,
        [classes.leftLogo_web]: minMatches,
    })
    const rightLogo = classNames({
        [classes.rightLogo_mobile]: maxMatches,
        [classes.rightLogo_web]: minMatches,
    })
    const informationWrap = classNames(classes.informationWrap, {
        [classes.informationWrap_mobile]: maxMatches
    })
    const wrap = classNames({
        [classes.wrap_mobile]: maxMatches
    })

    return (
        <div className={carouselPage}>
            {
                maxMatches
                    ? <span className={title}>Уникальный состав <br/> для тебя</span>
                    : <span className={title}>Уникальный состав для тебя</span>
            }

            <div className={wrap}>
                <CarouselMui/>
            </div>
            <div className={informationWrap}>
                <div className={leftInfo}>
                    <Logo69 className={leftLogo}/>
                    {
                        minMatches
                        && <span className={informationText}>Талая вода - оптимально сбалансированна, <br/> содержит все необходимые макро и микроэлементы</span>
                    }

                </div>
                <div className={rightInfo}>
                    {
                        minMatches
                        && <span className={informationText}>
                        Польза талой воды для организма выражается в <br/>
                        следующем: ускорение обменных процессов, удаление из <br/>
                        организма токсинов и шлаков, укрепление иммунитета, <br/>
                        улучшение пищеварения, повышение работоспособности, <br/>
                        улучшение сна.
                    </span>
                    }

                    <Parallel className={rightLogo}/>
                    {
                        maxMatches
                        && <span className={informationText}>
                                Талая вода - оптимально <br/>
                                сбалансированна, содержит все <br/>
                                необходимые макро и микроэлементы
                        </span>

                    }
                </div>
            </div>
        </div>
    );
}

export default CarouselPart;