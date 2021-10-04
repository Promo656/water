import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {blue} from '@mui/material/colors';
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
        links: {
            borderRight: "1px solid black",
            textDecoration: "none",
            width: "100%",
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
const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {
    const classes = useStyles()
    const {onClose, selectedValue, open} = props;

    const handleClose = () => {
        onClose();
    };

    const handleListItemClick = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open} classes={{paper: classes.dialog}}>

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

            {/*       <DialogTitle>Set backup account</DialogTitle>
            <List sx={{pt: 0}}>
                {emails.map((email) => (
                    <ListItem button onClick={() => handleListItemClick(email)} key={email}>
                        <ListItemAvatar>
                            <Avatar sx={{bgcolor: blue[100], color: blue[600]}}>
                                x
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={email}/>
                    </ListItem>
                ))}
                <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
                    <ListItemAvatar>
                        <Avatar>
                            +
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Add account"/>
                </ListItem>
            </List>*/}
        </Dialog>
    );
}

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

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
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}
