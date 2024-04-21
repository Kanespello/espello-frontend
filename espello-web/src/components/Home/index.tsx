import React from "react";
import FeatureComponent from "./Feature";
import WhatWeDo from "./WhatWeDo";
import Footer from "../Footer";
import Header from "../Header";
import EnterpriseForm from "./EnterpriseForm";

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <FeatureComponent />
            <WhatWeDo />
            <EnterpriseForm/>
            <Footer />
        </React.Fragment>
    )
}

export default Home;