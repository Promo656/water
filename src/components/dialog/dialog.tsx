import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import {IconButton, makeStyles} from "@material-ui/core";
import {ReactComponent as MenuIcon} from "../../assets/logo/menuIcon.svg";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(() => ({
        dialog: {
            overflowY: "inherit!important" as any,
            border: "1px solid #DA442B",
            boxSizing: "border-box",
            width: 280,
            height: 220,
            padding: "0 20px",

            alignItems: "flex-start",
            justifyContent: "space-around"
        },
        reDialogContainer: {
            alignItems: "flex-start!important" as any
        },
        links: {
            borderRight: "1px solid black",
            textDecoration: "none",
            width: "100%",
            color: "black",
            '&:active': {
                color: "#DA442B",
            }

        },
        activeLink: {
            color: "#DA442B",
            borderRight: "1px solid #DA442B"
        },
        linkText: {
            fontFamily: "Inglobal",
            marginRight: 10,
            fontSize: 24
        }
    }),
);

export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {
    const classes = useStyles()
    const {onClose, open} = props;

    const handleClose = () => {
        onClose();
    };

    const handleListItemClick = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}
                classes={{paper: classes.dialog, container: classes.reDialogContainer}}>

            <NavLink
                exact to="/"
                className={classes.links}
                activeClassName={classes.activeLink}
                onClick={handleListItemClick}
            >
                <div className={classes.linkText}>Главная</div>
            </NavLink>
            <NavLink
                to="/about"
                className={classes.links}
                activeClassName={classes.activeLink}
                onClick={handleListItemClick}
            >
                <div className={classes.linkText}>О компании</div>
            </NavLink>
            <NavLink
                to="/production"
                className={classes.links}
                activeClassName={classes.activeLink}
                onClick={handleListItemClick}
            >
                <div className={classes.linkText}>Производство</div>
            </NavLink>
        </Dialog>
    );
}

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{position: "absolute", zIndex: 100, top: 30, right: 30}}>
            <IconButton onClick={handleClickOpen}>
                <MenuIcon/>
            </IconButton>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}
