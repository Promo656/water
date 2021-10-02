import React from 'react';
import ForestPart from "../layout/forestPart/forestPart";
import TechnologicalPart from "../layout/technologicalPart/technologicalPart";
import ContainerPart from "../layout/containerPart/containerPart";
import Footer from "../layout/footer/footer";
import MessagePart from "../layout/messagePart/messagePart";

function Production() {

    return (
        <>
            <ForestPart/>
            <TechnologicalPart/>
            <ContainerPart/>
            {/*<MessagePart/>*/}
            <Footer/>
        </>
    );
}

export default Production;