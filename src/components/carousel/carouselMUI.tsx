// @ts-nocheck
import React, {useState} from 'react';
import leftLogo from "../../assets/photo/logo8.png"
import centerLogo from "../../assets/photo/logo9.png"
import rightLogo from "../../assets/photo/logo10.png"
import {ReactComponent as LeftArrow} from "../../assets/logo/leftArrowMobile.svg";
import {ReactComponent as RightArrow} from "../../assets/logo/rightArrowMobile.svg";
import {makeStyles} from "@material-ui/core";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Resolution} from "../../const";
import classNames from "classnames";
import {Fade} from "@mui/material";

const useStyles = makeStyles((theme) => ({
    carousel: {
        position: "relative",
        width: "100%",
        display: "flex",
        overflow: "hidden",
        justifyContent: "center"
    },
    carousel_mobile: {
        minHeight: 450,
        maxHeight: 450
    },
    carousel_web: {
        minHeight: 890,
        maxHeight: 890,
        marginBottom: 100
    },
    wrap: {
        display: "flex",
        flexDirection: "column"
    },
    mainPhoto: {
        margin: "0 40px 20px"
    },
    mainPhoto_mobile: {
        width: 196,
        height: 279,
        margin: "0 40px 56px"
    },
    mainPhoto_web: {
        width: 530,
        height: 754,
        margin: "0 40px 20px"
    },
    otherPhoto: {
        margin: "70px 0 20px"
    },
    otherPhoto_mobile: {
        width: 145,
        height: 207,
        margin: "30px 0 20px"
    },
    otherPhoto_web: {
        width: 346,
        height: 493,
        margin: "70px 0 20px"
    },
    mainSubTitle: {
        fontFamily: "Inglobal",
        textAlign: "center"
    },
    mainSubTitle_mobile: {
        fontSize: 14,
        lineHeight: "20px",
    },
    mainSubTitle_web: {
        fontSize: 18,
        lineHeight: "30px",
    },
    otherSubTitle: {
        fontFamily: "Inglobal",
        fontSize: 14,
        lineHeight: "24px",
        textAlign: "center"
    },
    otherSubTitle_mobile: {
        display: "none"
    },
    leftArrow: {
        cursor: "pointer",
        position: "absolute!important" as any,
        '&:hover': {
            opacity: .9
        }
    },
    leftArrow_mobile: {
        left: 108,
        bottom: 135,
    },
    leftArrow_web: {
        width: 158,
        height: 38,
        left: 0,
        bottom: 170,
    },
    rightArrow: {
        cursor: "pointer",
        position: "absolute!important" as any,
        '&:hover': {
            opacity: .9
        }
    },
    rightArrow_mobile: {
        right: 108,
        bottom: 135,
    },
    rightArrow_web: {
        width: 158,
        height: 38,
        right: 0,
        bottom: 170,
    },
}));

const webPhotos = [
    {
        id: 0,
        subTitle: <div>
            В процессе очищения все посторонние примеси <br/>
            и грязь удаляются, а заморозка и оттаивание <br/>
            дополнительно очищают воду.
        </div>,
        photo: leftLogo
    },
    {
        id: 1,
        subTitle: <div>
            Добыча воды осуществляется из скважины <br/>
            в экологически чистом районе Крайнего Севера - <br/>
            идентична с талой водой.
        </div>,
        photo: centerLogo
    },
    {
        id: 2,
        subTitle: <div>
            Талая вода проходит двойную очистку - <br/>
            испарение (дистилляцию).
        </div>,
        photo: rightLogo
    }
]

const mobilePhotos = [
    {
        id: 0,
        subTitle: <div>
            В процессе очищения все посторонние<br/>
            примеси и грязь удаляются, а заморозка <br/>
            и оттаивание дополнительно очищают воду.
        </div>,
        photo: leftLogo
    },
    {
        id: 1,
        subTitle: <div>
            Добыча воды осуществляется из <br/>
            скважины в экологически чистом районе <br/>
            Крайнего Севера - идентична с талой <br/>
            водой.
        </div>,
        photo: centerLogo
    },
    {
        id: 2,
        subTitle: <div>
            Талая вода проходит двойную очистку - <br/>
            испарение (дистилляцию).
        </div>,
        photo: rightLogo
    }
]


function CarouselMui() {
    const classes = useStyles()
    const minMatches = useMediaQuery(Resolution.min);
    const maxMatches = useMediaQuery(Resolution.max);
    const mainPhoto = classNames(classes.mainPhoto, {
        [classes.mainPhoto_mobile]: maxMatches,
        [classes.mainPhoto_web]: minMatches,
    })
    const otherPhoto = classNames(classes.otherPhoto, {
        [classes.otherPhoto_mobile]: maxMatches,
        [classes.otherPhoto_web]: minMatches,
    })
    const otherSubTitle = classNames(classes.otherSubTitle, {
        [classes.otherSubTitle_mobile]: maxMatches,
    })
    const mainSubTitle = classNames(classes.mainSubTitle, {
        [classes.mainSubTitle_mobile]: maxMatches,
        [classes.mainSubTitle_web]: minMatches,
    })
    const leftArrow = classNames(classes.leftArrow, {
        [classes.leftArrow_mobile]: maxMatches,
        [classes.leftArrow_web]: minMatches,
    })
    const rightArrow = classNames(classes.rightArrow, {
        [classes.rightArrow_mobile]: maxMatches,
        [classes.rightArrow_web]: minMatches,
    })
    const carousel = classNames(classes.carousel, {
        [classes.carousel_mobile]: maxMatches,
        [classes.carousel_web]: minMatches,
    })


    const [photos, setPhotos] = useState(maxMatches ? webPhotos : mobilePhotos)

    const nextPhoto = () => {
        const newPhoto = photos.reduce((t, c, i) => {
            if (i === 2) {
                c.id = 0
                t.push(c)
            } else if (i === 1) {
                c.id = 2
                t.push(c)
            } else if (i === 0) {
                c.id = 1
                t.push(c)
            }
            return t
        }, [])

        newPhoto.sort((a, b) => a.id - b.id)

        setPhotos(newPhoto)
    }

    const prevPhoto = () => {
        const newPhoto = photos.reduce((t, c, i) => {
            if (i === 2) {
                c.id = 1
                t.push(c)
            } else if (i === 1) {
                c.id = 0
                t.push(c)
            } else if (i === 0) {
                c.id = 2
                t.push(c)
            }
            return t
        }, [])

        newPhoto.sort((a, b) => a.id - b.id)

        setPhotos(newPhoto)
    }

    return (
        <div className={carousel}>

            {
                photos.map((el, index) => (
                    <div key={index} className={classes.wrap}>
                        <img
                            src={el.photo}
                            alt=""
                            className={el.id === 1 ? mainPhoto : otherPhoto}
                        />
                        <div className={el.id === 1 ? mainSubTitle : otherSubTitle}>
                            <Fade in={el.subTitle}>{el.subTitle}</Fade>
                        </div>
                    </div>
                ))
            }

            <LeftArrow className={leftArrow} onClick={nextPhoto}/>

            <RightArrow className={rightArrow} onClick={prevPhoto}/>

        </div>
    );
}

export default CarouselMui;