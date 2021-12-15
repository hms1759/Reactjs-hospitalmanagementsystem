import React from "react";
import Contact from '../Contact/contact'
import AboutUs from './aboutUs'
import  Header from '../shared/Header'
import  Footer from '../shared/Footer'

function About(){
    return(
        <div>
            
            <Header/>
            <AboutUs/>
            <br/>
    <Contact/>
    <Footer/>
        </div>
    )
}
export default About