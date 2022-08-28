import React from 'react';
import { Card } from 'react-bootstrap';

const NewsItem = ({ news }) => {
  return (
    <>
      <Card className='mx-2 p-3 rounded' style={{ height: '90%' }}>
        <Card.Img src={news.urlToImage} variant='top' />
        <Card.Body>
          <Card.Title as='div'>
            <strong>{news.title}</strong>
          </Card.Title>

          <Card.Text as='div'></Card.Text>
          <Card.Text as='p'>{news.author}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewsItem;
