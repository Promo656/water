import React, {ChangeEvent, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {ReactComponent as CloseIcon} from "../../assets/logo/closeIcon.svg";
import {FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Resolution} from "../../const";
import classNames from "classnames";

export type SearchInputPropsType = {
    title: string
    multiline?: boolean
    placeholder?: string
}

const useStyles = makeStyles<Theme, SearchInputPropsType>((theme: Theme) =>
    createStyles({
        reInput: {
            borderRadius: "12px!important",
            backgroundColor: "white!important",
            fontFamily: "Inglobal!important",
            fontSize: "18px!important",
            // width: "275px",
            // height: "61px"

        },
        reFormHelperText: {
            fontFamily: "Inglobal!important",
            fontSize: "18px!important",
            color: "white!important",
            marginLeft: "0px!important",
            marginBottom: "20px!important"
        },
        reRoot: {
            borderColor: "#DA442B"
        },
        formControl_web: {
            width: '25ch'
        },
        formControl_mobile: {
            width: "100%"
        }

    }),
);

export function StyledInputs(props: SearchInputPropsType) {
    const classes = useStyles(props);
    const minMatches = useMediaQuery(Resolution.min);
    const maxMatches = useMediaQuery(Resolution.max);
    const formControl = classNames({
        [classes.formControl_mobile]: maxMatches,
        [classes.formControl_web]: minMatches,
    })

    const [inputText, setInputText] = useState("")

    const onChangeInputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }

    const onClearInputTextHandler = () => {
        setInputText("")
    }

    return (
        <FormControl sx={{m: 1}} className={formControl} variant="outlined">
            <FormHelperText id={props.title} classes={{root: classes.reFormHelperText}}>{props.title}</FormHelperText>
            <OutlinedInput
                multiline={props.multiline}
                placeholder={props.placeholder}
                minRows={11}
                maxRows={11}
                classes={{notchedOutline: classes.reRoot}}
                className={classes.reInput}
                id={`outlined-adornment-${props.title}`}
                value={inputText}
                onChange={onChangeInputTextHandler}
                endAdornment={inputText !== ""
                && <InputAdornment position="end">
                    <IconButton
                        size="small"
                        className={classes.button}
                        classes={{root: classes.reButton}}
                        onClick={onClearInputTextHandler}
                    >
                        <CloseIcon/>
                    </IconButton>
                </InputAdornment>}
            />
        </FormControl>
    );
}
