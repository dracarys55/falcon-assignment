import React from 'react';
import { Nav, Row, Tab } from 'react-bootstrap';
import './TabBarList.css';

const TabBarList = () => {
  return (
    <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
      <Row className='d-flex'>
        <Nav variant='pills' className='flex-column  '>
          <Nav.Item>
            <Nav.Link href='#hotNews' className='tabBarList' eventKey='hotNews'>
              <i className='fa-solid fa-house'></i> 熱門報導
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='#Taiwan' className='tabBarList' eventKey='Taiwan'>
              <i className='fa-solid fa-house'></i> 台灣
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='#China' className='tabBarList' eventKey='China'>
              <i className='fa-solid fa-house'></i> 中國
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='#Global' className='tabBarList' eventKey='Global'>
              <i className='fa-solid fa-house'></i> 全球
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href='#Entertainment'
              className='tabBarList'
              eventKey='Entertainment'
            >
              <i className='fa-solid fa-house'></i> 娛樂
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href='#Busniess'
              className='tabBarList'
              eventKey='Busniess'
            >
              <i className='fa-solid fa-house'></i> 商業
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
    </Tab.Container>
  );
};

export default TabBarList;
