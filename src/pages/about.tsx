import React from 'react';
import AboutPart from "../layout/aboutPart/aboutPart";
import SuppliersPart from "../layout/suppliers/suppliersPart";
import Footer from "../layout/footer/footer";
import ContactsPart from "../layout/contacts/contactsPart";

function About() {
    return (
        <>
            <AboutPart/>
            <SuppliersPart/>
            <ContactsPart/>
            <Footer/>
        </>
    );
}

export default About;