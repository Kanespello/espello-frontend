import React, { useRef } from "react";
import FeatureComponent from "./Feature";
import WhatWeDo from "./WhatWeDo";
import Footer from "../Footer";
import Header from "../Header";
import EnterpriseForm from "./EnterpriseForm";

const Home = () => {

    const targetRef = useRef<HTMLDivElement>(null);

    const scrollToComponent = () => {
      if (targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
        <React.Fragment>
            <Header scrollToComponent = {scrollToComponent} enableOtherButtons={true}/>
            <FeatureComponent />
            <WhatWeDo />
            <EnterpriseForm targetRef = {targetRef}/>
            <Footer />
        </React.Fragment>
    )
}

export default Home;