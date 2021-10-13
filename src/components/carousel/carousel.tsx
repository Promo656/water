// @ts-nocheck
import React, {useEffect, useReducer, useRef} from "react";
import "./style.css"
import leftLogo from "../../assets/photo/logo8.png"
import centerLogo from "../../assets/photo/logo9.png"
import rightLogo from "../../assets/photo/logo10.png"

import {ReactComponent as LeftArrow} from "../../assets/logo/leftArrow.svg";
import {ReactComponent as RightArrow} from "../../assets/logo/rightArrow.svg";

const slides = [
    {
        description: "Adventure is never far away",
        image: leftLogo
    },
    {
        description: "Let your dreams come true",
        image: centerLogo
    },
    {
        description: "A piece of heaven",
        image: rightLogo
    }
];


const initialState = {
    slideIndex: 0
};

const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
        return {
            ...state,
            slideIndex: state.slideIndex = state.slideIndex + 1
        };
    }
    if (event.type === "PREV") {
        return {
            ...state,
            slideIndex: state.slideIndex = state.slideIndex - 1

        };
    }
};

function Slide({slide, offset}) {
    const active = offset === 1 ? true : null;

    return (
        <div
            className="slide"
            data-active={active}
            style={{
                "--offset": offset === 0
                    ? 1
                    : offset === 1
                        ? 0
                        : offset === 2
                            ? -1
                            : null,
                "--dir": offset === 0
                    ? 1
                    : offset === 1
                        ? 0
                        : offset === 2
                            ? -1
                            : null
            }}
        >
            <div
                className="slideContent"
                style={{
                    backgroundImage: `url('${slide.image}')`
                }}
            >
                <div className="slideContentInner">
                    <p className="slideDescription">{slide.description}</p>
                </div>
            </div>
        </div>
    );
}

export function Slider() {
    const [state, dispatch] = useReducer(slidesReducer, initialState);

    return (
        <div className="slides">
            <button onClick={() => dispatch({type: "PREV"})}><LeftArrow/></button>

            {[...slides].map((slide, i) => {
                return <Slide slide={slide} offset={state.slideIndex} key={i}/>;
            })}
            <button onClick={() => dispatch({type: "NEXT"})}><RightArrow/></button>
        </div>
    );
}

