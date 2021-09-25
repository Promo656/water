import React from 'react';
import {makeStyles} from "@material-ui/core";
import image from "../../assets/photo/logo6.png"
import {ReactComponent as Logo} from "../../assets/logo/logo1.svg";

const useStyles = makeStyles((theme) => ({
        about: {
            height: "100vh",
            width: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        imageLogo: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: -1
        },
        box: {
            width: 1110,
            height: 486,
            backgroundColor: "#F0F0F3",
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        textArea: {
            display: "flex",
            flexDirection: "column",
        },
        boxTitle: {
            fontFamily: "Inglobal",
            fontSize: 30,
            marginBottom:40
        },
        boxSubtitle: {
            fontFamily: "Inglobal",
            fontSize: 24,
            lineHeight:"40px"
        }
    }),
);

function AboutPart() {
    const classes = useStyles()
    return (
        <div className={classes.about}>
            <img className={classes.imageLogo} src={image} alt=""/>
            <div className={classes.box}>
                <div className={classes.textArea}>
                    <span className={classes.boxTitle}>Качество воды – наше <span style={{color: "#075AB4"}}>главное преимущество.</span></span>
                    <span className={classes.boxSubtitle}>
                        ООО «Вода Севера» начало свою деятельность в 2017 <br/>
                        году. От строительства завода до выпуска первых партий <br/>
                        бутилированной воды, мы провели трудоемкую работу <br/>
                        по выявлению уникального состава воды, ее полезных <br/>
                        и важных для организма человаека свойств . В 2021 году <br/>
                        был осуществлен запуск завода и организованы первые <br/>
                        поставки.
                    </span>
                </div>
                <Logo/>
            </div>
        </div>
    );
}

export default AboutPart;