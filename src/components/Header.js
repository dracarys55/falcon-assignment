import React from 'react';
import { Container, Nav, Navbar, Form } from 'react-bootstrap';
import './Header.css';

import logo from './componentsImages/microsoft-icon-png-21.jpg';
const Header = () => {
  return (
    <>
      <Navbar expand='lg' className='header' bg='light' sticky='top'>
        <Container>
          <Navbar.Brand href='#home' className='navBarBrand'>
            <img
              alt=''
              src={logo}
              width='30px'
              height='30px'
              className='d-inline-block align-top logo'
            />
            Microsoft Bing
          </Navbar.Brand>
          <div className='topnav'>
            <input type='text' placeholder='Search..'></input>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
