import React, {ChangeEvent, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import {ReactComponent as CloseIcon} from "../../assets/logo/closeIcon.svg";
import classNames from "classnames";
import {FormControl, FormHelperText, InputAdornment, OutlinedInput} from "@mui/material";

export type SearchInputPropsType = {}

const useStyles = makeStyles<Theme, SearchInputPropsType>((theme: Theme) =>
    createStyles({
        /*   wrap: {
               // position: "relative",
               width: 275,
               height: 61,
               backgroundColor: "white",
               borderRadius: 12,
               border: "1px solid white",
               display: "flex",
               alignItems: "center",
           },
           activeInput: {
               border: "1px solid #DA442B",
           },
           input: {

               boxSizing: "border-box",
               borderWidth: 0,
               width: 240,
               borderRadius: 12,
               padding: "20px",
               fontFamily: "Inglobal",
               fontSize: 18,
               '&:focus': {
                   outline: "none",
                   // border: "1px solid #DA442B"
               }
           },
           button: {
               // position: "absolute",
               // right: "10px"
           },
           reButton: {
               padding: 0,
               minWidth: 20
           }*/
        reInput: {
            borderRadius: 12
        }

    }),
);

export function StyledInputs(props: SearchInputPropsType) {
    const classes = useStyles(props);
    const [inputText, setInputText] = useState("")

    const onChangeInputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }

    const onClearInputTextHandler = () => {
        setInputText("")
    }

    return (
        /*  <div className={wrap}>

              <input
                  className={classes.input}
                  type="text"
                  value={inputText}
                  onChange={onChangeInputTextHandler}
              />

              {
                  inputText !== ""
                  && <Button
                      className={classes.button}
                      classes={{root: classes.reButton}}
                      onClick={onClearInputTextHandler}
                  >
                      <CloseIcon/>
                  </Button>
              }
          </div>*/
        <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
            <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
            <OutlinedInput
                className={classes.reInput}
                id="outlined-adornment-weight"
                value={inputText}
                onChange={onChangeInputTextHandler}
                endAdornment={inputText !== "" && <InputAdornment position="end"><Button
                    className={classes.button}
                    classes={{root: classes.reButton}}
                    onClick={onClearInputTextHandler}
                >
                    <CloseIcon/>
                </Button></InputAdornment>}
            />
        </FormControl>
    );
}
