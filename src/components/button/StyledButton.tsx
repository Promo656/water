import React from 'react';
import {Button, createStyles, makeStyles, Theme} from "@material-ui/core";

type ColorProps = "#075AB4" | "DA442B"

export type StyledButtonPropsType = {
    title: string
    onClick?: () => void
    margin?: string
    btnColor: ColorProps
}

const useStyles = makeStyles<Theme, StyledButtonPropsType>((theme: Theme) =>
    createStyles({
        button: {
            fontSize: 18,
            padding: "18px 32px 16px",
            margin: props => props.margin,
            background: props => props.btnColor,
            borderRadius: 9,
            color: "#ffffff",
            fontFamily: "Yrsa",
            '&:hover': {
                background: "#075AB4",
            }
        },
        reRoot: {
            textTransform: "none"
        }
    })
);

function StyledButton(props: StyledButtonPropsType) {
    const classes = useStyles(props);
    return (
        <Button
            className={classes.button}
            classes={{root: classes.reRoot}}
            onClick={props.onClick}
        >
            {props.title}
        </Button>
    );
}

export default StyledButton;