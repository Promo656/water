import React from 'react';
import WelcomePart from "../layout/welcomePart/welcomePart";
import CarouselPart from "../layout/carouselPart/carouselPart";
import HarmfulPart from "../layout/harmful/harmfulPart";
import BuyPart from "../layout/buyPart/buyPart";
import Footer from "../layout/footer/footer";


function Main() {
    return (
        <div>
            <WelcomePart/>
            <CarouselPart/>
            <HarmfulPart/>
            <BuyPart/>
            <Footer/>
        </div>
    );
}

export default Main;