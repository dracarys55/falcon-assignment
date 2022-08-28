import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';

import NewsList from './components/NewsList';
import newsRequest from './apis/newsRequest';
import TabBarList from './components/TabBarList';
import Footer from './components/Footer';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    onTermSubmit();
  }, []);
  const onTermSubmit = async () => {
    const response = await newsRequest.get();
    setNews(response.data.articles);
  };

  return (
    <div className='App'>
      <Header />
      <Container>
        <Row>
          <Col md={3}>
            <TabBarList />
          </Col>
          <Col md={9}>
            <h1>熱門報導</h1>
            <NewsList news={news} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
