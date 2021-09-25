import React, {FormEvent} from 'react';
import {Box, makeStyles, TextField} from "@material-ui/core";
import logo from "../../assets/photo/logo5.png"
import StyledButton from "../../components/button/styledButton";

const useStyles = makeStyles(() => ({
        message: {
            position: "relative",
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        logo: {
            width: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: -1
        },
        formArea: {
            width: 852,
            height: 711,
            borderRadius: 20,
            backgroundColor: "#075AB4",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        formTitle: {
            fontFamily: "Inglobal",
            fontSize: 22,
            color: "white",
            textAlign: "center"
        },
        formWrap: {}
    }),
);

function MessagePart() {
    const classes = useStyles()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email')
        })

    }
    return (
        <div className={classes.message}>
            <img className={classes.logo} src={logo} alt=""/>
            <div className={classes.formArea}>
                <span className={classes.formTitle}>
                    Нужна консультация? Воспользуйтесь формой обратной связи. <br/>
                    Мы ответим на ваши вопросы, и поможем составить заказ.
                </span>
                <form onSubmit={handleSubmit}>
                    <div>

                    </div>
                    <div></div>
                    <StyledButton title="Отправить" btnColor="#DA442B"/>
                </form>
            </div>
        </div>
    );
}

export default MessagePart;