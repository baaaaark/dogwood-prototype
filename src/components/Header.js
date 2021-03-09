import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/blossom.png';

const Header = () => {
    return (        
        <Navbar bg="success" variant="dark">
         
         <Navbar.Brand href="#home"> <img src = {logo} width = '80' alt="logo" /><h5>Dogwood</h5></Navbar.Brand>
          
          <Nav className="mr-auto"> 
            <Nav.Link href="#all">Species</Nav.Link>
            <Nav.Link href="#location">Locations</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar>
    );

}

export default Header
