import React from 'react';
import {makeStyles} from "@material-ui/core";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Resolution} from "../../const";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
        wrap: {
            display: "flex",
        },
        contactsArea: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        contactsArea_mobile: {
            marginBottom: 60
        },
        contactsArea_web: {
            marginBottom: 100
        },
        contactTitle: {
            fontFamily: "Inglobal",
        },
        contactTitle_mobile: {
            fontSize: 24,
            margin: "45px 0 40px",
            textAlign: "center"
        },
        contactTitle_web: {
            fontSize: 36,
            marginBottom: "60px"
        },
        textPhone: {
            fontFamily: "Inglobal",
            color: "#075AB4"
        },
        textPhone_mobile: {
            fontSize: 18,
            marginBottom: "40px"
        },
        textPhone_web: {
            fontSize: 36,
            marginBottom: "37px"
        },
        textEmail: {
            fontFamily: "Inglobal",
            color: "#075AB4"
        },
        textEmail_mobile: {
            fontSize: 18,
            marginBottom: 40
        },
        textEmail_web: {
            fontSize: 36,
        },
        descriptionCard: {
            backgroundColor: "#075AB4",
            borderRadius: 10,
            fontFamily: "Inglobal",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white"
        },
        descriptionCard_mobile: {
            width: 280,
            height: 160,
            lineHeight: "20px",
            fontSize: 14,
        },
        descriptionCard_web: {
            width: 560,
            height: 320,
            marginLeft: 30,
            lineHeight: "40px",
            fontSize: 24,
        },
        contacts_mobile: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
    }),
);

function ContactsPart() {
    const classes = useStyles()
    const minMatches = useMediaQuery(Resolution.min);
    const maxMatches = useMediaQuery(Resolution.max);
    const contactTitle = classNames(classes.contactTitle, {
        [classes.contactTitle_mobile]: maxMatches,
        [classes.contactTitle_web]: minMatches,
    })
    const textPhone = classNames(classes.textPhone, {
        [classes.textPhone_mobile]: maxMatches,
        [classes.textPhone_web]: minMatches,
    })
    const textEmail = classNames(classes.textEmail, {
        [classes.textEmail_mobile]: maxMatches,
        [classes.textEmail_web]: minMatches,
    })
    const descriptionCard = classNames(classes.descriptionCard, {
        [classes.descriptionCard_mobile]: maxMatches,
        [classes.descriptionCard_web]: minMatches,
    })
    const contactsArea = classNames(classes.contactsArea, {
        [classes.contactsArea_mobile]: maxMatches,
        [classes.contactsArea_web]: minMatches,
    })
    return (
        <div className={contactsArea}>
            {
                maxMatches
                    ? <div className={classes.contacts_mobile}>
                        <div className={contactTitle}>
                            Контактная информация <br/> и обратная связь:
                        </div>
                        <div className={textPhone}>
                            Телефон:+7 (8152) - 65 - 25- 50
                        </div>
                        <div className={textEmail}>Email: 1@69paralel.ru</div>
                        <div className={descriptionCard}>
                            Все интересующие вас вопросы, <br/>
                            просьбы и предложения вы можете <br/>
                            озвучить, позвонив, либо написав <br/>
                            нам. Мы с удовольствием выслушаем <br/>
                            вас и дадим обратную связь.
                        </div>
                    </div>
                    : <div>
                        <div className={contactTitle}>
                            Контактная информация и обратная связь:
                        </div>
                        <div className={classes.wrap}>
                            <div>
                                <div className={textPhone}>
                                    Телефон:+7 (8152) - 65 - 25- 50
                                </div>
                                <div className={textEmail}>Email: 1@69paralel.ru</div>
                            </div>
                            <div className={descriptionCard}>
                                Все интересующие вас вопросы,<br/>
                                просьбы и предложения вы можете <br/>
                                озвучить, позвонив, либо написав нам. <br/>
                                Мы с удовольствием выслушаем вас и<br/>
                                дадим обратную связь.
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}

export default ContactsPart;