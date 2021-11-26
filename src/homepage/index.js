import React from "react";
import SlideHandler from './slide/slideContent';
import About from './indexAbout';
import Contact from '../Contact/contact'
import  Header from '../shared/Header'
import  Footer from '../shared/Footer'

function Homepage(){
    return(
        <div>  
            <Header/>     
    <SlideHandler/>
    <br/>
    <About/>
    <br/>
    <Contact/>
    <Footer/>
        </div>
    );
}
export default Homepage;