import logo from '../logo.svg';
import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {
    Button, 
    Navbar,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    NavbarBrand,

} from 'reactstrap';

function BottomNavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    document.addEventListener("DOMContentLoaded", function(event) { 
        //document.getElementById("mainButton").();
     });

    return(
        <div className="">
            <Navbar className="py-5 justify-content-center" color="white" light expand="md" sticky="top" role="navigation">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} className="" id="nav-buttons" navbar>
                    <Nav className="justify-content-center w-100"  navbar>
                        <NavItem>
                            <NavLink to="/about">
                                <Button to="/about">about</Button>
                            </NavLink>
                        </NavItem>
                        <NavItem className="mx-5">
                            <NavLink to="/portfolio">
                                <Button onClick={() => {
                                    console.log(document.getElementById("mainButton"));
                                }} id="mainButton" className="" href="/">portfolio</Button>
                            </NavLink>
                        </NavItem>
                        <NavItem className="mr-3">
                            <NavLink to="/resume">
                                <Button href="/resume">resume</Button>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default BottomNavBar;