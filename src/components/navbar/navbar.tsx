import React from 'react';
import {makeStyles, Theme} from "@material-ui/core";
import {NavLink} from 'react-router-dom';

type PropsType = {
    margin: string
}

const useStyles = makeStyles<Theme, PropsType>((theme) => ({
        navbar: {
            margin: props => props.margin,
            width: 586,
            height: 75,
            borderRadius: 20,
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        links: {
            borderRight: "1px solid black",
            textDecoration: "none",
            marginRight: 10,
            '&:active': {
                color: "#DA442B",
            }

        },
        activeLink: {
            color: "#DA442B",
            borderRight: "1px solid #DA442B"
        },
        linkText: {
            fontFamily:"Inglobal",
            marginRight: 10,
            fontSize: 24
        }
    }),
);

function Navbar(props: PropsType) {
    const classes = useStyles(props)
    return (
        <div className={classes.navbar}>
            <NavLink exact to="/" className={classes.links} activeClassName={classes.activeLink}>
                <div>
                    <span className={classes.linkText}>Главная</span>
                </div>
            </NavLink>
            <NavLink to="/about" className={classes.links} activeClassName={classes.activeLink}>
                <span className={classes.linkText}>О компании</span>
            </NavLink>
            <NavLink to="/production" className={classes.links} activeClassName={classes.activeLink}>
                <span className={classes.linkText}>Производство</span>
            </NavLink>
        </div>
    );
}

export default Navbar;