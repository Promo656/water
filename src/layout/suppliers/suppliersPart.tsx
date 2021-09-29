import React from 'react';
import {makeStyles} from "@material-ui/core";
import logo from "../../assets/photo/logo7.png"

const useStyles = makeStyles((theme) => ({
        suppliers: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        title: {
            fontFamily: "Inglobal",
            fontSize: 40,
            margin: "150px 0 300px"
        },
        cardInfo: {
            width: 450,
            height: 443,
            backgroundColor: "#075AB4",
            borderRadius: 10,
            boxShadow: "0px 4px 30px rgba(7, 90, 180, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "-70px 100px 0 78px"
        },
        cardText: {
            fontFamily: "Inglobal",
            fontSize: 26,
            lineHeight: "45px",
            textAlign: "center",
            color: "white"
        },
        logo: {
            width: 560,
            height: 707,
            margin: "-240px 80px 0 0"
        },
        wrap: {
            display: "flex",
        },
        contactsArea: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom:100
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

function SuppliersPart() {
    const classes = useStyles()
    return (
        <div className={classes.suppliers}>
            <span className={classes.title}>Наши поставщики</span>
            <div>
                <div style={{border: "1px solid #DA442B", padding: "5px", marginBottom: "100px"}}>
                    <div className={classes.wrap} style={{border: "1px solid #DA442B", height: "603px"}}>
                        <div className={classes.cardInfo}>
                            <span className={classes.cardText}>
                                Мы не осуществляем прямые <br/>
                                продажи бутилированной воды. <br/>
                                Для выполенения этой миссии <br/>
                                мы сотрудничаем с диллерами, <br/>
                                которые осуществляют <br/>
                                поставки - ООО «Юг Аква <br/>
                                Сервис» и ООО «Катруся».
                            </span>
                        </div>
                        <img className={classes.logo} src={logo} alt=""/>
                    </div>
                </div>
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
            </div>
        </div>
    );
}

export default SuppliersPart;