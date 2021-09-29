import React from 'react';
import {Button, createStyles, makeStyles, Theme} from "@material-ui/core";
import useMediaQuery from "@mui/material/useMediaQuery";

type ColorProps = "#075AB4" | "#DA442B"

type StyledButtonPropsType = {
    title: string
    onClick?: () => void
    margin?: string
    btnColor: ColorProps
    matches?: boolean
}


const useStyles = makeStyles<Theme, StyledButtonPropsType>(() =>
    createStyles({
        button: {
            fontSize: 18,
            width: props => props.matches ? 164 : 131,
            height: props => props.matches ? 56 : 49,
            margin: props => props.margin,
            background: props => props.btnColor,
            borderRadius: 9,
            color: "#ffffff",
            // fontFamily: "Yrsa",
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
            type="submit"
            className={classes.button}
            classes={{root: classes.reRoot}}
            onClick={props.onClick}
        >
            {props.title}
        </Button>
    );
}

export default StyledButton;