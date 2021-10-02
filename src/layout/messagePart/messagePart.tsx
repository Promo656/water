import React, {FormEvent} from 'react';
import {Box, makeStyles, TextField} from "@material-ui/core";
import logo from "../../assets/photo/logo5.png"
import StyledButton from "../../components/button/styledButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Resolution} from "../../const";
import classNames from "classnames";
import {StyledInputs} from "../../components/input/styledinput";

const useStyles = makeStyles(() => ({
        message: {
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        message_mobile: {
            marginTop: -20,
            marginBottom: 60
        },
        message_web: {
            height: "100vh",
        },
        logo: {
            width: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: -1
        },
        formArea: {
            borderRadius: 20,
            backgroundColor: "#075AB4",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        formArea_mobile: {
            width: "100%",
            height: 581
        },
        formArea_web: {
            width: 852,
            height: 711
        },
        formTitle: {
            fontFamily: "Inglobal",
            color: "white",
            textAlign: "center"
        },
        formTitle_mobile: {
            fontSize: 14,
            lineHeight: "20px"
        },
        formTitle_web: {
            fontSize: 22
        },
    }),
);

function MessagePart() {
    const classes = useStyles()
    const minMatches = useMediaQuery(Resolution.min);
    const maxMatches = useMediaQuery(Resolution.max);
    const formArea = classNames(classes.formArea, {
        [classes.formArea_mobile]: maxMatches,
        [classes.formArea_web]: minMatches,
    })
    const formTitle = classNames(classes.formTitle, {
        [classes.formTitle_mobile]: maxMatches,
        [classes.formTitle_web]: minMatches,
    })
    const message = classNames(classes.message, {
        [classes.message_mobile]: maxMatches,
        [classes.message_web]: minMatches,
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email')
        })

    }
    return (
        <div className={message}>
            {minMatches && <img className={classes.logo} src={logo} alt=""/>}
            <div className={formArea}>
                {
                    maxMatches
                        ? <span className={formTitle}>
                    Нужна консультация?<br/>
                            Воспользуйтесь формой обратной связи.
                </span>
                        : <span className={formTitle}>
                    Нужна консультация? Воспользуйтесь формой обратной связи. <br/>
                    Мы ответим на ваши вопросы, и поможем составить заказ.
                </span>
                }

                <form onSubmit={handleSubmit}>

                    <StyledInputs/>

                    <div></div>
                    <StyledButton title="Отправить" btnColor="#DA442B"/>
                </form>
            </div>
        </div>
    );
}

export default MessagePart;