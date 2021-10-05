import React from 'react';
import {makeStyles, RadioProps} from "@material-ui/core";
import buyLogo from "../../assets/photo/logo2.png"
import useMediaQuery from "@mui/material/useMediaQuery";
import classNames from "classnames";
import StyledButton from "../../components/button/styledButton";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, styled} from "@mui/material";
import {Resolution} from "../../const";

const useStyles = makeStyles((theme) => ({
    buyPart: {
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center"
    },
    buyPart_mobile: {
        height: "100%",
        justifyContent: "center",
        marginBottom: 60
    },
    buyPart_web: {
        height: "100vh",
        justifyContent: "flex-end"
    },
    wrap: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    title: {
        fontFamily: "Inglobal",
        letterSpacing: 2,
        marginBottom: 60,
    },
    title_mobile: {
        fontSize: 24,
        color: "black",
    },
    title_web: {
        fontSize: 36,
        color: "white"
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        zIndex: -1
    },
    buyArea: {
        display: 'flex!important' as any,
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap!important" as any,
        flexDirection:"row!important" as any
    },
    buyArea_mobile: {
        flexDirection: "column",
        '&>:nth-child(1)': {
            margin: "0 0 60px 0"
        },
        '&>:nth-child(2)': {
            marginBottom: "60px"
        },
        '&>:nth-child(3)': {
            margin: "0 0 60px 0"
        },
        '&>:nth-child(4)': {
            marginBottom: "40px"
        }
    },
    buyArea_web: {
        width: 800,
        '&>:nth-child(1)': {
            margin: "0 70px 60px 0"
        },
        '&>:nth-child(2)': {
            marginBottom: "60px"
        },
        '&>:nth-child(3)': {
            margin: "0 70px 60px 0"
        },
        '&>:nth-child(4)': {
            marginBottom: "60px"
        }
    },
    buyIcon: {
        width: 276,
        height: 188,
        backgroundColor: "#F0F0F3",
        borderRadius: 23,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    buyText: {
        fontFamily: "Inglobal",
        fontSize: 36,
        letterSpacing: 2,
        lineHeight: "54px",
    },
    reLabel: {
        fontFamily: "Inglobal",
        fontSize: 36,
    }
}));

const BpIcon = styled('span')(({theme}) => ({
    borderRadius: '50%',
    width: 34,
    height: 34,
    backgroundColor: "#075AB4",
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: "#004692",
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background:
            theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#075AB4",
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
        display: 'block',
        width: 34,
        height: 34,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: "#004692"
    },
});

function BpRadio(props: RadioProps) {
    return (
        <Radio
            sx={{
                '&:hover': {
                    bgcolor: 'transparent',
                },
            }}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon/>}
            icon={<BpIcon/>}
            {...props}
        />
    );
}

function BuyPart() {
    const classes = useStyles()

    const [value, setValue] = React.useState('1,5 литра');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const values = [
        "0,6 литра",
        "1,5 литра",
        "5 литров",
        "19 литров"
    ]
    const minMatches = useMediaQuery(Resolution.min);
    const maxMatches = useMediaQuery(Resolution.max);
    const buyArea = classNames(classes.buyArea, {
        [classes.buyArea_mobile]: maxMatches,
        [classes.buyArea_web]: minMatches,
    })
    const buyPart = classNames(classes.buyPart, {
        [classes.buyPart_mobile]: maxMatches,
        [classes.buyPart_web]: minMatches,
    })
    const title = classNames(classes.title, {
        [classes.title_mobile]: maxMatches,
        [classes.title_web]: minMatches,
    })
    return (
        <>
            {minMatches && <img className={classes.image} src={buyLogo} alt=""/>}
            <div className={buyPart}>
                <div className={classes.wrap}>
                    <div className={title}>Выбери свой объем</div>
                    <RadioGroup
                        defaultValue="female"
                        aria-label="gender"
                        name="customized-radios"
                        value={value}
                        onChange={handleChange}
                        className={buyArea}
                    >
                        {
                            values.map((el, index) => (
                                <div key={index} className={classes.buyIcon}>
                                    <FormControlLabel value={el} control={<BpRadio/>}
                                                      label={<span className={classes.buyText}>{el}</span>}/>

                                </div>
                            ))
                        }
                    </RadioGroup>
                    <StyledButton title="Купить" btnColor="#DA442B"/>
                </div>
            </div>
        </>

    );
}

export default BuyPart;