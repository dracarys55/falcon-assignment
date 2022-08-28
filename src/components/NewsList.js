import React from 'react';
import NewsItem from './NewsItem';
import { Col } from 'react-bootstrap';
const NewsList = ({ news }) => {
  const renderedList = news.map((singleNews) => {
    return (
      <Col key={singleNews._id} sm={12} md={6} lg={4} xl={4}>
        <NewsItem news={singleNews} />
      </Col>
    );
  });
  return <div className='d-flex flex-row flex-wrap'>{renderedList}</div>;
};

export default NewsList;
