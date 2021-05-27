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

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div className="row-fluid bg-dark">

            <div className="mb-5 col-12 col-lg-10 mx-auto">
                <Navbar color="dark" className="justify-content-center" dark expand="md" sticky="top" role="navigation">
                    <img src={logo} className="App-logo" alt="logo" />
                    <NavbarBrand className="nav-brand" href='/'>Julio Alcantara</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} className="" id="nav-buttons" navbar>
                        <Nav className="nav-buttons"  navbar>
                            <NavItem>
                                <NavLink to="/about">
                                    <Button className="mt-2" to="/about">about</Button>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/portfolio">
                                    <Button className="mx-5 mt-2" href="/">portfolio</Button>
                                </NavLink>
                            </NavItem>
                            <NavItem className="">
                                <NavLink to="/resume">
                                    <Button className="mt-2" href="/resume">resume</Button>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </div>
        
    );
}

export default NavBar;