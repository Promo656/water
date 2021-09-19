import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
        carouselPage: {
            height: "100vh",
            border: "1px solid red"
        }
    }),
);

function CarouselPart() {
    const classes = useStyles()
    return (
        <div className={classes.carouselPage}>

        </div>
    );
}

export default CarouselPart;