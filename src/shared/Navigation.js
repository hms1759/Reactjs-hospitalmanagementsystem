import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export default class Navigation extends Component{
    render(){
        return(
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav"/>
                <Nav>
                    <NavLink className="d-inline p-2  text-white" to="/">
                        Home
                    </NavLink>
                    <NavLink className="d-inline p-2  text-white" to="/">
                    About Us
                    </NavLink> 
                    <NavLink className="d-inline p-2  text-white" to="/">
                    Contact Us
                    </NavLink> 
                    <NavLink className="d-inline p-2  text-white" to="/">
                    Booking
                    </NavLink>
                </Nav>

            </Navbar>
        )
    }
}