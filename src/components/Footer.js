import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
  return (
    <Navbar
      bg='light'
      fixed='bottom'
      className='d-flex justify-content-center align-items-center footerNavbar'
    >
      <Nav>
        <Nav.Link href='#rights'>隱私權和Cookie</Nav.Link>
        <Nav.Link href='#lagalExplaination'>法律聲明</Nav.Link>
        <Nav.Link href='#advertisement'>廣告</Nav.Link>
        <Nav.Link href='#aboutAdvertisement'>關於我們的廣告</Nav.Link>
        <Nav.Link href='#documentation'>說明</Nav.Link>
        <Nav.Link href='#feedBack'>意見反應</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Footer;
