// @ts-nocheck
import React, {useState} from 'react';
import leftLogo from "../../assets/photo/logo8.png"
import centerLogo from "../../assets/photo/logo9.png"
import rightLogo from "../../assets/photo/logo10.png"

import {ReactComponent as LeftArrow} from "../../assets/logo/leftArrow.svg";
import {ReactComponent as RightArrow} from "../../assets/logo/rightArrow.svg";
import {makeStyles} from "@material-ui/core";
import {Button} from "@mui/material";

const useStyles = makeStyles((theme) => ({
    carousel: {
        // marginBottom: 100,
        position: "relative",
        width: "100%",
        display: "flex",
        minHeight: 864,
        maxHeight: 864,
        marginBottom: 100
    },
    wrap: {
        display: "flex",
        flexDirection: "column"
    },
    mainPhoto: {
        width: 530,
        height: 754,
        margin: "0 40px 20px"
    },
    otherPhoto: {
        width: 346,
        height: 493,
        margin: "70px 0 20px"
    },
    mainSubTitle: {
        fontFamily: "Inglobal",
        fontSize: 18,
        lineHeight: "30px",
        textAlign: "center"
    },
    otherSubTitle: {
        fontFamily: "Inglobal",
        fontSize: 14,
        lineHeight: "24px",
        textAlign: "center"
    },
    leftArrow: {
        cursor: "pointer",
        position: "absolute!important" as any,
        left: 0,
        bottom: 170,
        '&:hover': {
            opacity: .9
        }
    },
    rightArrow: {
        cursor: "pointer",
        position: "absolute!important" as any,
        right: 0,
        bottom: 170,
        '&:hover': {
            opacity: .9
        }
    }
}));

const photosArray = [
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


function CarouselMui() {
    const classes = useStyles()
    const [photos, setPhotos] = useState(photosArray)

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
        <div className={classes.carousel}>

            {
                photos.map((el, index) => (
                    <div key={index} className={classes.wrap}>
                        <img
                            src={el.photo}
                            alt=""
                            className={el.id === 1 ? classes.mainPhoto : classes.otherPhoto}
                        />
                        <div className={el.id === 1 ? classes.mainSubTitle : classes.otherSubTitle}>
                            {el.subTitle}
                            {/* {
                                index === 0
                                && <div>
                                    В процессе очищения все посторонние примеси <br/>
                                    и грязь удаляются, а заморозка и оттаивание <br/>
                                    дополнительно очищают воду.
                                </div>
                            }
                            {
                                index === 1
                                && <>
                                    Добыча воды осуществляется из скважины <br/>
                                    в экологически чистом районе Крайнего Севера - <br/>
                                    идентична с талой водой.
                                </>
                            }
                            {
                                index === 2
                                && <>
                                    Талая вода проходит двойную очистку - <br/>
                                    испарение (дистилляцию).
                                </>
                            }*/}
                        </div>
                    </div>
                ))
            }


            {/* <div className={classes.wrap}>
                <img src={leftLogo} alt="" className={classes.otherPhoto}/>
                <div className={classes.otherSubTitle}>
                    В процессе очищения все посторонние примеси <br/>
                    и грязь удаляются, а заморозка и оттаивание <br/>
                    дополнительно очищают воду.
                </div>
            </div>

            <div className={classes.wrap}>
                <img src={centerLogo} alt="" className={classes.mainPhoto}/>
                <div className={classes.mainSubTitle}>
                    Добыча воды осуществляется из скважины <br/>
                    в экологически чистом районе Крайнего Севера - <br/>
                    идентична с талой водой.
                </div>
            </div>

            <div className={classes.wrap}>
                <img src={rightLogo} alt="" className={classes.otherPhoto}/>
                <div className={classes.otherSubTitle}>
                    Талая вода проходит двойную очистку - <br/>
                    испарение (дистилляцию).
                </div>
            </div>*/}


            <LeftArrow className={classes.leftArrow} onClick={prevPhoto}/>

            <RightArrow className={classes.rightArrow} onClick={nextPhoto}/>

        </div>
    );
}

export default CarouselMui;