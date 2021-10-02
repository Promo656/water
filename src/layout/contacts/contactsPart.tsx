import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
        wrap: {
            display: "flex",
        },
        contactsArea: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 100
        },
        text: {
            fontFamily: "Inglobal",
            fontSize: 36,
        },
        descriptionCard: {
            width: 560,
            height: 320,
            marginLeft: 30,
            backgroundColor: "#075AB4",
            borderRadius: 10,
            lineHeight: "40px",
            fontFamily: "Inglobal",
            fontSize: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white"
        }
    }),
);

function ContactsPart() {
    const classes = useStyles()
    return (
        <div className={classes.contactsArea}>
            <div>
                <div className={classes.text} style={{marginBottom: "60px"}}>Контактная информация и обратная
                    связь:
                </div>
                <div className={classes.wrap}>
                    <div>
                        <div className={classes.text} style={{color: "#075AB4", marginBottom: "37px"}}>Телефон:
                            +7
                            (8152) - 65 - 25- 50
                        </div>
                        <div className={classes.text} style={{color: "#075AB4"}}>Email: 1@69paralel.ru</div>
                    </div>
                    <div className={classes.descriptionCard}>
                        Все интересующие вас вопросы,<br/>
                        просьбы и предложения вы можете <br/>
                        озвучить, позвонив, либо написав нам. <br/>
                        Мы с удовольствием выслушаем вас <br/>
                        и дадим обратную связь.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactsPart;